"use client";

import React, { useState, useEffect } from 'react';
import { AssetGallery } from './AssetGallery';
import type { Asset } from './AssetCard';
import { UploadZone } from './UploadZone';

export const AssetManager = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [driveLinkInput, setDriveLinkInput] = useState('');
  
  // Filtering States
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Fetch initial assets (In reality, replace this with Payload REST API fetch)
  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/assets?limit=20');
      if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to fetch assets (${response.status}): ${body}`);
      }
      const data = await response.json();
      setAssets(data.docs || []);
    } catch (e) {
      console.error("Failed to fetch assets", e);
      setAssets([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDriveLinkSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!driveLinkInput.trim()) return;

    try {
      // Optimistic update
      const newAsset: Asset = {
        id: `temp-${Date.now()}`,
        name: driveLinkInput.split('/').pop() || 'Google Drive File',
        type: 'other', // Will be detected server-side
        status: 'pending',
      };
      
      setAssets([newAsset, ...assets]);
      setDriveLinkInput('');

      // Send to our ingestion endpoint
      const response = await fetch('/api/assets/ingest-drive-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ driveLink: driveLinkInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to ingest link');
      }

      // Refresh list to get actual data
      fetchAssets(); 
    } catch (error) {
      console.error("Upload Error", error);
      fetchAssets();
    }
  };

  const handleBulkUpload = async (files: File[]) => {
    const optimisticUploads = files.map((file) => {
      const previewUrl = file.type.startsWith('image/')
        ? URL.createObjectURL(file)
        : undefined;

      return {
        file,
        asset: {
          id: `bulk-${Date.now()}-${file.name}`,
          name: file.name,
          type: (file.type.startsWith('image/') ? 'image' : 'other') as 'image' | 'other',
          status: 'pending' as const,
          previewUrl,
        },
      };
    });

    setAssets((prev) => [...optimisticUploads.map((item) => item.asset), ...prev]);

    // Upload them in parallel
    await Promise.allSettled(
      optimisticUploads.map(async ({ file, asset }) => {
        const formData = new FormData();
        formData.append('file', file);
        
        try {
          const response = await fetch('/api/assets/upload', {
            method: 'POST',
            body: formData,
          });
          
          if (!response.ok) throw new Error('Upload Failed');
        } catch(e) {
          console.error(`Failed to upload ${file.name}`, e);
        } finally {
          if (asset.previewUrl) {
            URL.revokeObjectURL(asset.previewUrl);
          }
        }
      })
    );
    
    // Refresh entirely after parallel batch completes
    await fetchAssets();
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-7xl mx-auto my-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Asset Library</h2>
          <p className="text-gray-500 mt-1">Manage images and documents for your products.</p>
        </div>
        
        <form onSubmit={handleDriveLinkSubmit} className="flex gap-2">
          <input 
            type="url"
            value={driveLinkInput}
            onChange={(e) => setDriveLinkInput(e.target.value)}
            placeholder="Paste Google Drive URL..."
            className="px-4 py-2 border border-gray-300 rounded-lg w-64 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Add Link
          </button>
        </form>
      </div>

      <UploadZone onUpload={handleBulkUpload} />

      {/* Filtering Toolbar */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="w-full md:w-1/3">
          <input 
            type="text" 
            placeholder="Search assets by name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-black"
          />
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <select 
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-black"
          >
            <option value="all">All Types</option>
            <option value="image">Images</option>
            <option value="pdf">PDFs</option>
            <option value="other">Other Documents</option>
          </select>
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-black"
          >
            <option value="all">All Statuses</option>
            <option value="available">Available</option>
            <option value="pending">Pending</option>
            <option value="error">Errors</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        {isLoading ? (
          <div className="text-center py-12 text-gray-500 animate-pulse">Loading Assets...</div>
        ) : (
          <AssetGallery 
            assets={assets.filter(asset => {
              const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesType = typeFilter === 'all' || asset.type === typeFilter;
              const matchesStatus = statusFilter === 'all' || asset.status === statusFilter;
              return matchesSearch && matchesType && matchesStatus;
            })} 
          />
        )}
      </div>
    </div>
  );
};


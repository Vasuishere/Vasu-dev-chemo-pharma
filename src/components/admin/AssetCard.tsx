import React from 'react';
import Image from 'next/image';

// Using arbitrary types matching Payload collection for MVP
export type Asset = {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'other';
  status: 'pending' | 'available' | 'error';
  referenceSize?: { width: number; height: number };
  sizeBytes?: number;
  previewUrl?: string; // Optional real thumb
};

type Props = {
  asset: Asset;
  onClick?: (asset: Asset) => void;
};

export const AssetCard: React.FC<Props> = ({ asset, onClick }) => {
  const isPending = asset.status === 'pending';
  const hasDimensions = asset.referenceSize?.width && asset.referenceSize?.height;
  
  // Simulating validation badge. Real logic parses actual size vs referenceSize.
  const sizeWarning = asset.status === 'error';

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      if (event.key === ' ') {
        event.preventDefault();
      }
      onClick?.(asset);
    }
  };

  return (
    <div 
      className={`border rounded-xl p-4 cursor-pointer transition-shadow hover:shadow-md
        ${isPending ? 'animate-pulse bg-gray-50' : 'bg-white'} 
        ${sizeWarning ? 'border-red-500' : 'border-gray-200'}`}
      role="button"
      tabIndex={0}
      onClick={() => onClick?.(asset)}
      onKeyDown={handleKeyDown}
    >
      <div className="relative h-40 bg-gray-100 rounded-lg flex flex-col items-center justify-center mb-3 overflow-hidden text-gray-400">
        {asset.previewUrl && !isPending ? (
          <Image src={asset.previewUrl} alt={asset.name} fill unoptimized className="object-cover" />
        ) : (
          <div className="text-center">
             <div className="text-3xl mb-2">
               {asset.type === 'pdf' ? '📄' : asset.type === 'image' ? '🖼️' : '📁'}
             </div>
             {isPending && <div className="text-xs font-medium">Uploading...</div>}
          </div>
        )}
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-sm truncate" title={asset.name}>
          {asset.name}
        </h3>
        
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span className="uppercase">{asset.type}</span>
          <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium
            ${asset.status === 'available' ? 'bg-green-100 text-green-700' : 
              asset.status === 'pending' ? 'bg-yellow-100 text-yellow-700' : 
              'bg-red-100 text-red-700'}`}>
            {asset.status}
          </span>
        </div>

        {hasDimensions && (
          <div className="text-xs text-gray-400 mt-2">
            Target Size: {asset.referenceSize?.width}x{asset.referenceSize?.height}
          </div>
        )}
      </div>
    </div>
  );
};

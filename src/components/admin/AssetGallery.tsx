import React from 'react';
import { Asset, AssetCard } from './AssetCard';

type Props = {
  assets: Asset[];
  onSelectAsset?: (asset: Asset) => void;
};

export const AssetGallery: React.FC<Props> = ({ assets, onSelectAsset }) => {
  if (!assets || assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 border border-dashed border-gray-300 rounded-lg">
        <span className="text-gray-400 mb-2 mt-4">No assets found</span>
        <span className="text-sm text-gray-500 max-w-sm text-center">
          Upload images or provide Google Drive links to see them listed here.
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {assets.map((asset) => (
        <AssetCard 
          key={asset.id} 
          asset={asset} 
          onClick={onSelectAsset} 
        />
      ))}
    </div>
  );
};

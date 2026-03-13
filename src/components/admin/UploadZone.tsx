import React, { useCallback, useState } from 'react';

type Props = {
  onUpload: (files: File[]) => void;
};

export const UploadZone: React.FC<Props> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);
      onUpload(filesArray);
    }
  }, [onUpload]);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      onUpload(filesArray);
      
      // Reset input so the same file could be uploaded again if needed
      e.target.value = '';
    }
  }, [onUpload]);

  return (
    <div 
      className={`w-full mt-6 p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-colors
        ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="text-4xl mb-4">☁️</div>
      <p className="text-gray-700 font-medium mb-1">
        Drag and drop your files here
      </p>
      <p className="text-gray-500 text-sm mb-4">
        Supports multi-file upload for images and documents
      </p>
      
      <label className="cursor-pointer bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
        Browse Files
        <input 
          type="file" 
          multiple 
          className="hidden" 
          onChange={handleFileInput} 
        />
      </label>
    </div>
  );
};

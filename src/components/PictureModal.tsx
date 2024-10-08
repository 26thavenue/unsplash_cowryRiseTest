import React from 'react';

interface PictureModalProps {
    imageURL: string;
    author: string;
    location: string;
    onClose: () => void;
}

const PictureModal: React.FC<PictureModalProps> = ({ imageURL, author, location, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-5xl w-full h-[80vh] overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          className="w-full h-[75%] object-cover" 
          src={imageURL} 
          alt={author} 
        /> 
        <div className="p-6 flex flex-col gap-2">
          <p className="text-xl font-semibold">{author}</p>
          <p className="text-lg text-gray-500">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default PictureModal;
import React from 'react'

const ImagePopup = ({ images, currentIndex, onClose, onPrev, onNext }) => {
    if (!images || images.length === 0) return null;
      
        return (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-black p-10 rounded-lg max-w-3xl max-h-[80vh] overflow-auto">
              <button
                className="absolute top-2 right-2 rounded-sm text-white hover:bg-red-700 px-3"
                onClick={onClose}
                aria-label="Close popup"
              >
                Close
              </button>
              <img src={images[currentIndex]} alt="Popup" className="max-w-full max-h-full rounded-lg" />
              <button
                className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={currentIndex > 0 ? onPrev : null}
                disabled={currentIndex === 0}
                aria-label="Previous image"
              >
                {'<'}
              </button>
              <button
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-2 rounded-full ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={currentIndex < images.length - 1 ? onNext : null}
                disabled={currentIndex === images.length - 1}
                aria-label="Next image"
              >
                {'>'}
              </button>
            </div>
          </div>
        );
}

export default ImagePopup;
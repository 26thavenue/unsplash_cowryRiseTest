import  { useRef, useEffect, useState } from "react";
import Masonry from "./Masonry";
import './Masonry.css';
import PictureModal from "./PictureModal";

interface PictureGridProps {
  imageLink: string;
  firstName: string;
  lastName: string;
  location: string;
  width: string;
  height: string;
}

const PictureGrid = ({ isLoading, images }: { isLoading: boolean; images: PictureGridProps[] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        console.log("Clicked outside modal");
        closeModal();
      }
    };

    if (selectedImageIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedImageIndex]);

  return (
    <>
      {isLoading ? (
        <Masonry />
      ) : (
        <div className="mt-[-40px] max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 cursor-pointer">
          {images.map((card, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="relative rounded-md hover:translate-x-1 transition-all ease-in-out"
            >
              <img
                src={card.imageLink}
                alt={card.firstName}
                className="w-full h-full object-cover bg-opacity-50 rounded-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-full text-white p-4">
                <p className="text-[12px] font-bold">{card.firstName} {card.lastName}</p>
                <p className="text-[10px] font-light">{card.location}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef}>
            <PictureModal
              imageURL={images[selectedImageIndex].imageLink}
              author={images[selectedImageIndex].firstName}
              location={images[selectedImageIndex].location}
              onClose={closeModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PictureGrid;
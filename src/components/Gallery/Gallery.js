'use client';

import { getGallery } from '@/services/gallery';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay } from 'swiper/modules';
import CustomModal from '../Modal/CustomModal'; // Ensure this path is correct

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const galleryData = await getGallery();
        setAlbums(galleryData);
      } catch (err) {
        setError("Failed to fetch gallery");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const openAlbum = (album) => {
    setSelectedAlbum(album);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedAlbum(null);
    setModalIsOpen(false);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (modalIsOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalIsOpen]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const swiperParams = {
    slidesPerView: 1,

    pagination: {
      clickable: true,
    },
    // navigation: true,
  };

  return (
    <section className="service__area pt-110 pb-110">
      <div className="container">
        <div className="row">
        <div className="col-xl-12">
        <div className="service__title-wrap">
        <h2 className="section-title move-line-3d">
        আমাদের  <span>গ্যালারি</span> 
                </h2>
            </div>
          </div>
          <div className="gallery">
            {/* Album List */}
            <div className="gallery__album-list">
              {albums.map((album, index) => (
                <div
                  key={index}
                  className="gallery__album"
                  onClick={() => openAlbum(album)}
                  role="button"
                  tabIndex={0} // Makes it keyboard accessible
                  onKeyDown={(e) => e.key === 'Enter' && openAlbum(album)} // Allows keyboard activation
                >
                  <Image
                  className="gallery__album__image"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${album.images[0]?.image}`}
                    alt="Album"
                    width={300}
                    height={300}
          
                  />
                  <h3>{album.title}</h3>
                </div>
              ))}
            </div>

            {/* Custom Modal with Swiper for Slideshow */}
            <CustomModal isOpen={modalIsOpen} onClose={closeModal}>
              <Swiper {...swiperParams} >
                {selectedAlbum?.images?.length ? (
                  selectedAlbum.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        <img
                        //   width={500}
                        //   height={500}
                          src={`${process.env.NEXT_PUBLIC_IMAGE_ROOT}${image.image}`}
                          alt={`Image ${index + 1}`}
                          style={{
                            width: '60%',
                            height: '60%',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <div>No images available</div> // Fallback for no images
                )}
              </Swiper>
            </CustomModal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

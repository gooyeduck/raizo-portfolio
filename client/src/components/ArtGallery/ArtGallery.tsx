import React, { useCallback, useState } from 'react';
import Gallery from 'react-photo-gallery';
import photos from './photos';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ArtGallery() {
  const [index, setIndex] = useState(-1);
  const openLightbox = useCallback((_:any, { index }: { index: number }) => {
    setIndex(index);
  }, []);
  
  const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));
  return (
    <div style={{ margin: "10vh 10vw" }}>
      <Gallery photos={photos} targetRowHeight={500} onClick={openLightbox} />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

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
  const [images, setImages] = useState(photos)
  const [index, setIndex] = useState(-1);
  const openLightbox = useCallback((_: any, { index }: { index: number }) => {
    setIndex(index);
  }, []);

  const photo = photos.map(({ src, width, height }) => ({
    src,
    width,
    height,
  }));
  return (
    <div style={{ margin: "10vh 10vw" }}>
      <Gallery photos={photo} targetRowHeight={500} onClick={openLightbox} />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
}

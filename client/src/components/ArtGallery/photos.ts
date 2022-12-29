const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import imageList from '../../../mock-api.json'

const photos = imageList.resources.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.url,
        width,
        height,
        images: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.url,
                width: breakpoint,
                height,
            };
        }),
    };
});
export default photos;

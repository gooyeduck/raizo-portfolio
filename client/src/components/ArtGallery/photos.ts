const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
import imageList from '../../../mock-api.json'
import photo2 from '../../../mock-api2.json'
const photos = imageList.resources.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: photo.secure_url,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: photo.secure_url,
                width: breakpoint,
                height,
            };
        }),
    };
});
console.log(photos)
export default photos;

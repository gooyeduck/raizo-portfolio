"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photoHandler = void 0;
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];
function photoHandler(data) {
    const photos = data.resources.map((photo) => {
        return {
            src: photo.secure_url,
            width: photo.width,
            height: photo.height,
            alt: photo.asset_id,
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
    return { photos, next_cursor: data.next_cursor };
}
exports.photoHandler = photoHandler;

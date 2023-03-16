import * as images from '../assets/images';

export function preloadImages() {
  const sources = Object.values(images);
  sources.forEach((src) => preloadImage(src));
}

function preloadImage(src: string) {
  return new Promise<void>((resolve, reject) => {
    const image = new Image();
    image.src = src;
    image.style.display = 'none';
    image.onload = () => {
      resolve();
    };
    image.onerror = reject;
    document.body.appendChild(image);
  });
}

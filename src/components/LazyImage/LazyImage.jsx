import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage = ({ src, alt, objectFit = 'contain' }) => (
    <LazyLoadImage
        alt={alt}
        src={src}
        width="100%"
        height="100%"
        effect="blur"
        style={{ objectFit }}
    />
);

export default LazyImage;

import { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ILazyImageProps } from './lazyImage.types';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LazyImage: FC<ILazyImageProps> = ({
    src,
    alt,
    objectFit = 'contain',
    effect = 'blur',
    width = '100%',
    height = '100%',
}) => (
    <LazyLoadImage
        alt={alt}
        src={src}
        width={width}
        height={height}
        effect={effect}
        style={{ objectFit }}
    />
);

export default LazyImage;

export interface ILazyImageProps {
    src: string | object;
    alt: string;
    objectFit?: 'contain' | 'fill' | 'cover' | 'none' | 'scale-down';
    effect?: 'blur' | 'black-and-white';
    width?: string;
    height?: string;
}

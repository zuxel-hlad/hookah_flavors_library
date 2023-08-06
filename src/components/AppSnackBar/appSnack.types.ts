import { SyntheticEvent } from 'react';

export interface ISnackProps {
    open?: boolean;
    verticalPosition?: 'bottom' | 'top';
    horizontalPosition?: 'center' | 'left' | 'right';
    autoHideDuration?: number | null;
    onClose?: (event: SyntheticEvent) => void;
    sx?: any;
}

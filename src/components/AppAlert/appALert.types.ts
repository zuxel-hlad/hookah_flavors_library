import { SyntheticEvent } from 'react';

export interface IAppAlertProps {
    message: string;
    severity: 'error' | 'info' | 'success' | 'warning';
    sx?: any;
    onClose?: (event: SyntheticEvent) => void;
}

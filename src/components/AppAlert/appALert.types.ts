export interface IAppAlertProps {
    message: string;
    status: 'error' | 'info' | 'success' | 'warning';
    sx?: any;
}

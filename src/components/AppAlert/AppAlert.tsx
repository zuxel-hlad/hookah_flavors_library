import { FC } from 'react';
import { Alert } from '@mui/material';
import { IAppAlertProps } from './appALert.types';

const AppALert: FC<IAppAlertProps> = ({ message, severity, sx, onClose }) => (
    <Alert
        onClose={onClose}
        severity={severity}
        sx={sx}
    >
        {message}
    </Alert>
);

export default AppALert;

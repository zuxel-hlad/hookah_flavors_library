import { FC } from 'react';
import { Alert } from '@mui/material';
import { IAppAlertProps } from './appALert.types';

const AppALert: FC<IAppAlertProps> = ({ message, status, sx }) => (
    <Alert
        severity={status}
        sx={sx}
    >
        {message}
    </Alert>
);

export default AppALert;

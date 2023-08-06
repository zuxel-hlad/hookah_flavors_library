import { FC, PropsWithChildren } from 'react';
import { Snackbar } from '@mui/material';
import { ISnackProps } from './appSnack.types';

const AppSnackBar: FC<PropsWithChildren<ISnackProps>> = ({
    children,
    open,
    verticalPosition = 'bottom',
    horizontalPosition = 'left',
    autoHideDuration = 6000,
    sx,
    onClose,
}) => (
    <Snackbar
        sx={sx}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={{
            horizontal: horizontalPosition,
            vertical: verticalPosition,
        }}
    >
        <div>{children}</div>
    </Snackbar>
);
export default AppSnackBar;

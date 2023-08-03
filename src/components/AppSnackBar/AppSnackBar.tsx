import { FC, PropsWithChildren, useState, useEffect } from 'react';
import { Snackbar } from '@mui/material';

const AppSnackBar: FC<PropsWithChildren<{ open: boolean }>> = ({
    children,
    open,
}) => {
    const [openBar, setIsOpenBar] = useState<boolean>(false);

    const timerId = 0;

    useEffect(() => {
        if (open) {
            // timerId = setTimeout(() => setIsOpenBar(false), 4000);
        }

        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, []);

    return openBar && <Snackbar>{children}</Snackbar>;
};

export default AppSnackBar;

import { CircularProgress, Box } from '@mui/material';

const Loader = () => (
    <Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                minHeight: '100vh',
                position: 'fixed',
                zIndex: '9999',
                top: 0,
                left: 0,
                background: 'rgb(10, 25, 41)',
            }}
        >
            <CircularProgress />
        </Box>
    </Box>
);

export default Loader;

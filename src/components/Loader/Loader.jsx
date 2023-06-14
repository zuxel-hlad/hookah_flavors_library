import { CircularProgress, Box } from '@mui/material';
import styles from './Loader.module.scss';

const Loader = () => (
    <Box className={styles.loader}>
        <CircularProgress />
    </Box>
);

export default Loader;

import { FC } from 'react';
import { IFlavorItemProps } from './flavorItem.types';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Rating,
} from '@mui/material';

import LazyImage from '../LazyImage/LazyImage';
import defaultFlavor from '../../assets/img/default_flavor.png';
import styles from './FlavorItem.module.scss';

const FlavorItem: FC<IFlavorItemProps> = ({
    flavor,
    tabIndex,
    updateFlavorRating,
}) => {
    const { title, rating, compound, image, id } = flavor;

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={styles.flavorItem}
        >
            <Card
                className={styles.flavorItemBody}
                tabIndex={tabIndex + 1}
            >
                <Box className={styles.flavorItemImage}>
                    {image && (
                        <LazyImage
                            src={image}
                            alt={title}
                        />
                    )}
                    {!image && (
                        <LazyImage
                            src={defaultFlavor}
                            alt={title}
                        />
                    )}
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        {compound}
                    </Typography>
                </CardContent>
                <Box className={styles.flavorItemRating}>
                    <Rating
                        value={rating}
                        size="large"
                        onChange={(_, newRating) => {
                            updateFlavorRating(newRating, id);
                        }}
                    />
                </Box>
            </Card>
        </Grid>
    );
};

export default FlavorItem;

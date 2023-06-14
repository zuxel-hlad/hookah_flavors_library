import { Grid, Typography } from '@mui/material';
import FlavorItem from '../FlavorItem/FlavorItem';
import styles from './FlavorsList.module.scss';

const FlavorsList = ({ flavors = [], updateFlavorRating }) => (
    <Grid
        component="section"
        container
        spacing={2}
        className={styles.flavorsList}
    >
        {flavors?.length ? (
            flavors.map((flavor, idx) => (
                <FlavorItem
                    tabIndex={idx}
                    key={flavor.id}
                    flavor={flavor}
                    updateFlavorRating={updateFlavorRating}
                />
            ))
        ) : (
            <Typography
                variant="h4"
                color="text.secondary"
                component="h6"
                className={styles.flavorsListEmpty}
                align="center"
            >
                Смаків покищо не знайдено.
            </Typography>
        )}
    </Grid>
);

export default FlavorsList;

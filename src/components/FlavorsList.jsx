import FlavorItem from './FlavorItem';
import { Grid, Typography } from '@mui/material';
import flavors from '../data/flavors';

const FlavorsList = () => {
    return (
        <Grid component="section" container spacing={2}>
            {flavors?.length ? (
                flavors.map((flavor, idx) => {
                    return (
                        <FlavorItem
                            tabIndex={idx}
                            key={flavor.id}
                            flavor={flavor}
                        />
                    );
                })
            ) : (
                <Typography
                    variant="h4"
                    color="text.secondary"
                    component="h6"
                    align="center"
                >
                    No flavors now.
                </Typography>
            )}
        </Grid>
    );
};

export default FlavorsList;

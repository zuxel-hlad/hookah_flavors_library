import { Grid, Typography } from '@mui/material';
import FlavorItem from './FlavorItem';

const FlavorsList = ({ flavors }) => (
    <Grid component="section" container spacing={2}>
        {flavors?.length ? (
            flavors.map((flavor, idx) => (
                <FlavorItem tabIndex={idx} key={flavor.id} flavor={flavor} />
            ))
        ) : (
            <Typography
                variant="h4"
                color="text.secondary"
                component="h6"
                sx={{ margin: '0 auto' }}
            >
                Смаків покищо не знайдено.
            </Typography>
        )}
    </Grid>
);

export default FlavorsList;

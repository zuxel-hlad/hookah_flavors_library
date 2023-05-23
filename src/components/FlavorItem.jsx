import {
    Grid,
    Card,
    CardContent,
    Typography,
    Box,
    Rating,
} from '@mui/material';
import LazyImage from './LazyImage';

const FlavorItem = ({ flavor, tabIndex, updateFlavorRating }) => {
    const { title, rating, compound, image, id } = flavor;

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
        >
            <Card
                sx={{
                    height: '100%',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                tabIndex={tabIndex + 1}
            >
                <Box sx={{ padding: '16px', height: '330px' }}>
                    <LazyImage
                        src={image}
                        alt={title}
                    />
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
                <Box
                    sx={{
                        padding: '0 16px 16px',
                    }}
                >
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

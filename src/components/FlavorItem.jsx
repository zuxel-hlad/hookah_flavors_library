import {
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Rating,
} from '@mui/material';

const FlavorItem = ({ flavor, tabIndex }) => {
    const { title, type, rating, compound, image } = flavor;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
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
                    <CardMedia
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'contain',
                        }}
                        image={image}
                        title={title}
                        component="img"
                        alt={title}
                    />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {compound}
                    </Typography>
                </CardContent>
                <Box sx={{ padding: '0 16px 16px' }}>
                    <Rating name="flavor-rating" value={rating} readOnly />
                </Box>
            </Card>
        </Grid>
    );
};

export default FlavorItem;

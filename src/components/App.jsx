import Header from './Header';
import FlavorsList from './FlavorsList';
import { Container } from '@mui/material';
const App = () => {
    return (
        <div className="app">
            <Header />

            <Container
                sx={{ paddingTop: '100px', paddingBottom: '20px' }}
                component="main"
                maxWidth="xl"
            >
                <FlavorsList />
            </Container>
        </div>
    );
};

export default App;

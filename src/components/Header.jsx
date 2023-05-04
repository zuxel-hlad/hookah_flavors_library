import {
    AppBar,
    Toolbar,
    Paper,
    InputBase,
    Select,
    MenuItem,
    Divider,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const headerStyles = {
    background: 'rgb(10, 25, 41)',

    '& .header-toolbar': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '10px',
    },

    '& .header-filter': {
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0',
        width: '100%',
        maxWidth: '200px',

        '& .MuiInputBase-root': {
            width: '100%',

            '&:hover fieldset': {
                borderColor: 'rgba(0, 0, 0, 0.23)',
            },
        },

        '& .MuiSelect-select': {
            padding: '6.5px 14px',
            border: 0,
            boxShadow: 'none',
        },
    },

    '& .header-search': {
        p: '0 6px 0 12px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '200px',
        boxShadow: 0,
        border: '2px solid transparent',

        '&:active': {
            borderColor: '#1976d2',
        },
        ' &:focus-visible': {
            outlineColor: '#1976d2',
        },
        '& .MuiInputBase-root': {
            outlineColor: 'red',
            flex: 1,
            input: {
                p: 0,
            },
        },

        '& .MuiDivider-root': {
            height: '22.5px',
        },

        '@media screen and (max-width: 576px)': {
            height: '33.5px',
            '& .MuiDivider-root, & .MuiSvgIcon-root': {
                display: 'none',
            },
        },
    },
};

const Header = ({ updateSearch, updateFilter, search, filter }) => {
    return (
        <AppBar position="fixed" sx={headerStyles}>
            <Toolbar className="header-toolbar">
                <Paper component="label" className="header-filter">
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={filter}
                        onChange={e => updateFilter(e.target.value)}
                    >
                        <MenuItem value="all">
                            <em>Усі</em>
                        </MenuItem>
                        <MenuItem value="rating">За рейтингом</MenuItem>
                        <MenuItem value="type">За маркою</MenuItem>
                        <MenuItem value="ice">Є холод</MenuItem>
                    </Select>
                </Paper>
                <Paper component="label" className="header-search">
                    <InputBase
                        value={search}
                        onChange={e => updateSearch(e.target.value)}
                        placeholder="Знайти смак"
                        inputProps={{ 'aria-label': 'Search flavor' }}
                    />
                    <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                    />
                    <SearchIcon />
                </Paper>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

import {
    AppBar,
    Toolbar,
    Paper,
    InputBase,
    Select,
    MenuItem,
    Divider,
    Button,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import filterOptions from '../../data/flavorsFilter';
import styles from './Header.module.scss';

const Header = ({
    updateSearch,
    updateFilter,
    search,
    filter,
    resetFilters,
}) => (
    <AppBar
        position="fixed"
        className={styles.header}
    >
        <Toolbar className={styles.headerToolbar}>
            <Paper
                component="label"
                className={styles.headerFilter}
            >
                <Select
                    className={styles.headerSelect}
                    value={filter}
                    onChange={e => updateFilter(e.target.value)}
                >
                    {filterOptions &&
                        filterOptions.map(({ id, label, value }) => (
                            <MenuItem
                                value={value}
                                key={id}
                            >
                                {label}
                            </MenuItem>
                        ))}
                </Select>
            </Paper>
            <Paper
                component="label"
                className={styles.headerSearch}
            >
                <InputBase
                    sx={{ width: '100%' }}
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
            <Button
                className={styles.headerReset}
                variant="contained"
                onClick={resetFilters}
            >
                Скинути фільтри
            </Button>
        </Toolbar>
    </AppBar>
);

export default Header;

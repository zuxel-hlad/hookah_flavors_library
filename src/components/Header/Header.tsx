import { ChangeEvent } from 'react';
import {
    AppBar,
    Toolbar,
    Paper,
    InputBase,
    Select,
    MenuItem,
    Divider,
    Button,
    SelectChangeEvent,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import useCreateFilterOptions from '../../hooks/createFilterOptions.hook';
import { useAppSelector, useAppDispatch } from '../../redux/store';
import { setFilter } from '../../redux/filterSlice';
import { setSearch } from '../../redux/searchSlice';
import { flavorsSelector } from '../../redux/flavorsSlice/selectors';
import filterSelector from '../../redux/filterSlice/selectors';
import searchSelector from '../../redux/searchSlice/selectors';
import styles from './Header.module.scss';

const Header = () => {
    const dispatch = useAppDispatch();
    const filter = useAppSelector(filterSelector);
    const search = useAppSelector(searchSelector);
    const flavors = useAppSelector(flavorsSelector);
    const filterOptions = useCreateFilterOptions(flavors);

    const resetFilters = () => {
        if (filter !== 'all' || search.length > 0) {
            dispatch(setFilter('all'));
            dispatch(setSearch(''));
        }
    };
    return (
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
                        onChange={(e: SelectChangeEvent) =>
                            dispatch(setFilter(e.target.value))
                        }
                    >
                        {filterOptions &&
                            filterOptions.map(({ label, value }) => (
                                <MenuItem
                                    value={value}
                                    key={value}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            dispatch(setSearch(e.target.value))
                        }
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
};

export default Header;

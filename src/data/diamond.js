import { v4 as uuidv4 } from 'uuid';
import diamondCitrusMix from '../assets/img/diamond/diamond_citrus_mix.png';

export default [
    {
        id: uuidv4(),
        title: 'Diamond Citrus Mix',
        type: 'diamond',
        rating: 5,
        compound: 'Мікс цитрусів',
        image: diamondCitrusMix,
        ice: false,
    },
];

import { v4 as uuidv4 } from 'uuid';
import liraSours from '../assets/img/lira/lirra_50_gr_sours-800x534.jpg';

export default [
    {
        id: uuidv4(),
        title: 'Lira MIX SOURS',
        type: 'lira',
        rating: 1,
        compound: 'Апельсин, Кавун, Яблуко, Мандарин',
        image: liraSours,
        ice: false,
    },
];

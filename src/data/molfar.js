import { v4 as uuidv4 } from 'uuid';
import molfarPiritLine from '../assets/img/molfar/Tabak-Molfar-Tobacco-Spirit-Line-Varenik-s-Vishnyami-100-gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'MOLFAR SPIRIT LINE',
        type: 'molfar',
        rating: 3,
        compound: 'Вареники, Вишня',
        image: molfarPiritLine,
        ice: false,
    },
];

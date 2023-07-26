import { v4 as uuidv4 } from 'uuid';
import { IFMockFlavor } from './data.types';
import zodiacSourBerries from '../assets/img/zodiac/Tabak-Zodiac-Light-Line-Sour-Berries-Sauer-Yagody-200-gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'ZODIAC - SOUR BERRIES',
        type: 'zodiac',
        rating: 5,
        compound: 'Бузина, Клюква, Красная Смородина',
        image: zodiacSourBerries,
        ice: false,
        comments: [],
    },
] as IFMockFlavor[];

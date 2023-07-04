import { v4 as uuidv4 } from 'uuid';
import zeljanika from '../assets/img/hookah420/vajld-rr-squirt-420.jpg';
import lightLine from '../assets/img/hookah420/Tabak-420-Light-Line-Ananasovyy-Smuzi-25-gr.webp';

export default [
    {
        id: uuidv4(),
        title: '420 – Wildberry',
        type: '420',
        rating: 3,
        compound: 'Суниця',
        image: zeljanika,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: '420 - LIGHT LINE',
        type: '420',
        rating: 3,
        compound: 'Ананас, Коктейль',
        image: lightLine,
        ice: false,
        comments: [],
    },
];

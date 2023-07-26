import { v4 as uuidv4 } from 'uuid';
import { IFMockFlavor } from './data.types';
import adalyaTazMangui from '../assets/img/adalya/Tabak-Adalya-Taz-Mangui-Taz-Mengi-50gr.webp';
import adalyaNothLights from '../assets/img/adalya/Tabak-Adalya-North-Lights-Nors-Layts-50gr.webp';
import adalyaEndlessFlirt from '../assets/img/daim/Tabak-Adalya-Endless-Flirt-Endless-Flirt-50gr.webp';
import adalyaLove66 from '../assets/img/daim/Tabak-Adalya-Endless-Flirt-Endless-Flirt-50gr.webp';

const f: IFMockFlavor = {
    id: uuidv4(),
    title: 'Adalya TAZ MANGUI',
    type: 'adalya',
    rating: 3,
    compound: "Апельсин, Манго, М'ята",
    image: adalyaTazMangui,
    ice: true,
    comments: [],
};

export default [
    {
        id: uuidv4(),
        title: 'Adalya TAZ MANGUI',
        type: 'adalya',
        rating: 3,
        compound: "Апельсин, Манго, М'ята",
        image: adalyaTazMangui,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Adalya NORTH LIGHTS',
        type: 'adalya',
        rating: 3,
        compound: 'Апельсин, Грейпфрут',
        image: adalyaNothLights,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Adalya - ENDLESS FLIRT',
        type: 'adalya',
        rating: 3,
        compound: 'Манго, Маракуйя, Мята, Черника',
        image: adalyaEndlessFlirt,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Adalya - Love 66',
        type: 'adalya',
        rating: 3,
        compound: "Диня, М'ята, Маракуйя, Роза",
        image: adalyaLove66,
        ice: false,
        comments: [],
    },
];

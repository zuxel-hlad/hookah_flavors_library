import { v4 as uuidv4 } from 'uuid';
import adalyaTazMangui from '../assets/img/adalya/Tabak-Adalya-Taz-Mangui-Taz-Mengi-50gr.webp';
import adalyaNothLights from '../assets/img/adalya/Tabak-Adalya-North-Lights-Nors-Layts-50gr.webp';
import adalyaEndlessFlirt from '../assets/img/daim/Tabak-Adalya-Endless-Flirt-Endless-Flirt-50gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'Adalya TAZ MANGUI',
        type: 'adalya',
        rating: 3,
        compound: "Апельсин, Манго, М'ята",
        image: adalyaTazMangui,
        ice: true,
    },
    {
        id: uuidv4(),
        title: 'Adalya NORTH LIGHTS',
        type: 'adalya',
        rating: 3,
        compound: 'Апельсин, Грейпфрут',
        image: adalyaNothLights,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Daim - ENDLESS FLIRT',
        type: 'daim',
        rating: 3,
        compound: 'Манго, Маракуйя, Мята, Черника',
        image: adalyaEndlessFlirt,
        ice: false,
    },
];

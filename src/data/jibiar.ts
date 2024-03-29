import { v4 as uuidv4 } from 'uuid';
import { IFMockFlavor } from './data.types';
import jibiarFreshBerry from '../assets/img/jibiar/tabak-jibiar-fresh-berry-yagody-led-50-gr.jpg';
import jibiarMasterMix from '../assets/img/jibiar/Tabak-JIBIAR-Master-Mix-Master-Miks-50-gr.webp';
import jibiarRaspberryPeachBlueberry from '../assets/img/jibiar/Tabak-JIBIAR-Raspberry-Peach-Blueberry-Malina-Persik-Chernika-50-gr.webp';
import jibiarDejavu from '../assets/img/jibiar/Tabak-JIBIAR-Dejavu-Deghavyu-50-gr.webp';
import jibiarAmourInfini from '../assets/img/jibiar/Tabak-JIBIAR-Amour-Infini-Amur-Infini-50-gr.webp';
import jibiarSantaBarbara from '../assets/img/jibiar/Tabak-JIBIAR-Santa-Barbara-Santa-Barbara-50-gr.webp';
import jibiarGreenMix from '../assets/img/jibiar/Tabak-JIBIAR-Green-Mix-Grin-Miks-50-gr.webp';
import jibiarIceCola from '../assets/img/jibiar/Tabak-JIBIAR-Ice-Cola-Kola-Led-50-gr.webp';
import jibiarPanRaas from '../assets/img/jibiar/Tabak-JIBIAR-Pan-Raas-Pan-Raas-50gr.webp';
import jibiarHavana from '../assets/img/jibiar/Tabak-JIBIAR-Havana-Gavana-50gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'Jibiar Fresh Berry',
        type: 'jibiar',
        rating: 4,
        compound: 'Ожина, Лід, Малина',
        image: jibiarFreshBerry,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar MASTERMIX',
        type: 'jibiar',
        rating: 5,
        compound: 'Апельсин, Вишня, Малина, Манго, Персик, Чорниця',
        image: jibiarMasterMix,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar RASPBERRY PEACH BLUEBERRY',
        type: 'jibiar',
        rating: 5,
        compound: 'Малина, Персик, Чорниця',
        image: jibiarRaspberryPeachBlueberry,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar DEJAVU',
        type: 'jibiar',
        rating: 5,
        compound: "Кавун, Ваніль, Диня, М'ята",
        image: jibiarDejavu,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar AMOUR INFINI',
        type: 'jibiar',
        rating: 3,
        compound: 'Кавун, Манго, Маракуя, Пітайя',
        image: jibiarAmourInfini,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar SANTA BARBARA',
        type: 'jibiar',
        rating: 3,
        compound: 'Абрикос, Лід, Чорниця',
        image: jibiarSantaBarbara,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar GREEN MIX',
        type: 'jibiar',
        rating: 3,
        compound: "Зелене Яблуко, Ківі, Лайм, М'ята",
        image: jibiarGreenMix,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar ICE COLA',
        type: 'jibiar',
        rating: 3,
        compound: 'Кола, Лід',
        image: jibiarIceCola,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar HAVANA',
        type: 'jibiar',
        rating: 3,
        compound: 'Ананас, Маракуйя, Пітая',
        image: jibiarHavana,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Jibiar PAN RAAS',
        type: 'jibiar',
        rating: 1,
        compound: 'Спеції',
        image: jibiarPanRaas,
        ice: false,
        comments: [],
    },
] as IFMockFlavor[];

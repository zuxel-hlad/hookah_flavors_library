import { v4 as uuidv4 } from 'uuid';
import { IFMockFlavor } from './data.types';
import daimBillionaire from '../assets/img/daim/Tabak-Daim-Billionaire-Baylone-50gr.webp';
import daimOzzyFozzy from '../assets/img/daim/Tabak-Daim-Ozzy-Fozzy-Ozzi-Fozzi-50gr.webp';
import daimAbsoluteZero from '../assets/img/daim/Tabak-Daim-Absolute-Zero-Absolyut-Zero-50gr.webp';
import daimLove69 from '../assets/img/daim/daim_love_69_50gr-800x534.jpg';
import daimIceWaterMelonBerry from '../assets/img/daim/Tabak-Daim-Ice-Watermelon-Berry-Led-Arbuz-Yagoda-50gr.webp';
import daimLadyKiller from '../assets/img/daim/Tabak-Daim-Lady-Killer-Ledi-Killer-50gr.webp';
import daimAmericanQueen from '../assets/img/daim/Tabak-Daim-American-Queen-Amerikan-Kvin-50gr.webp';
import daimTusovka from '../assets/img/daim/daim_tusovka.jpg';
import daimEgzotica from '../assets/img/daim/Tabak-Daim-Egzotica-Egzotika-50gr.jpg';
import daimSpicedPeach from '../assets/img/daim/Tabak-Daim-Spiced-Peach-Pryanyy-Persik-50gr.webp';
import daimBayraktar from '../assets/img/daim/Tabak-Daim-Bayraktar-Bayraktar-50gr.webp';
import daimBayDejaflue from '../assets/img/daim/Tabak-Daim-Dejaflue-Deghaflyu-50gr.webp';
import daimIceCola from '../assets/img/daim/Tabak-Daim-Ice-Cola-Led-Kola-50gr.webp';
import daimCinderella from '../assets/img/daim/Tabak-Daim-Cinderella-Sinderella-50gr.webp';
import daimHawaii from '../assets/img/daim/Tabak-Daim-Hawaii-Gavayi-50gr.webp';
import daimHeisenberg from '../assets/img/daim/Tabak-Daim-Heisenberg-Hayzenberg-50gr.webp';
import daimZeus from '../assets/img/daim/Tabak-Daim-Zeus-Zevs-50gr.webp';
import daimHaram from '../assets/img/daim/daim_haram.png';
import daimRedDream from '../assets/img/daim/Tabak-Daim-Red-Dream-Red-Drim-50gr.webp';
import daimBajaBlue from '../assets/img/daim/Tabak-Daim-Baja-Blue-Badgha-Blu-50gr.webp';
import daimIceOrangePomegranate from '../assets/img/daim/Tabak-Daim-Baja-Blue-Badgha-Blu-50gr.webp';
import daimChillOut from '../assets/img/daim/Tabak-Daim-Chill-Out-Chill-Aut-50gr.webp';
import daimTwoApples from '../assets/img/daim/Tabak-Daim-Two-Apples-Dvoynoe-Yabloko-50gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'Daim BILLIONAIRE',
        type: 'daim',
        rating: 5,
        compound: 'Какао, Пиріг, Шоколад',
        image: daimBillionaire,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim OZZY FOZZY',
        type: 'daim',
        rating: 3,
        compound: "Лайм, Маракуя, М'ята, Слива",
        image: daimOzzyFozzy,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim Absolute Zero',
        type: 'daim',
        rating: 5,
        compound: "Лід, М'ята",
        image: daimAbsoluteZero,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim LOVE 69',
        type: 'daim',
        rating: 3,
        compound: "Диня, Маракуя, М'ята, Роза",
        image: daimLove69,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim Ice Watermelon Berry',
        type: 'daim',
        rating: 3,
        compound: 'Кавун, Ожина, Лід, Малина, Чорниця',
        image: daimIceWaterMelonBerry,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim LADY KILLER',
        type: 'daim',
        rating: 3,
        compound: "Диня, Ожина, Полуниця, Малина, Манго, М'ята",
        image: daimLadyKiller,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim AMERICAN QUEEN',
        type: 'daim',
        rating: 3,
        compound: 'Ананас, Банан, Манго, Маракуя, Папая, Персик, Пітайя',
        image: daimAmericanQueen,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim TUSOVKA',
        type: 'daim',
        rating: 3,
        compound: 'Фруктовий мікс',
        image: daimTusovka,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - Egzotica',
        type: 'daim',
        rating: 3,
        compound: 'Мультіфрукт',
        image: daimEgzotica,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - Spiced Peach',
        type: 'daim',
        rating: 3,
        compound: 'Гриль , Персик',
        image: daimSpicedPeach,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - BAYRAKTAR',
        type: 'daim',
        rating: 3,
        compound: 'Апельсин, Банан, Ківі, Лимон, Персик',
        image: daimBayraktar,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - DEJAFLUE',
        type: 'daim',
        rating: 3,
        compound: 'Диня, Кавун, Лід, Морозиво',
        image: daimBayDejaflue,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - ICE COLA',
        type: 'daim',
        rating: 3,
        compound: 'Кола, Лід',
        image: daimIceCola,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - CINDERELLA',
        type: 'daim',
        rating: 3,
        compound: 'Диня, Малина, Манго, Ожина, Персик',
        image: daimCinderella,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - HAWAII',
        type: 'daim',
        rating: 3,
        compound: 'Ананас, Лід, Маракуйя',
        image: daimHawaii,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - HEISENBERG',
        type: 'daim',
        rating: 3,
        compound: 'Ананас, Банан, Ківі, Лід, Манго',
        image: daimHeisenberg,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - ZEUS',
        type: 'daim',
        rating: 3,
        compound: 'Диня, Лід, Персик',
        image: daimZeus,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - ZEUS',
        type: 'daim',
        rating: 3,
        compound: 'Ментол, Банан, Лісові Ягоди',
        image: daimHaram,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - RED DREAM',
        type: 'daim',
        rating: 3,
        compound: 'Журавлина, Малина, Суниця, Червона смородина',
        image: daimRedDream,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - BAJA BLUE',
        type: 'daim',
        rating: 3,
        compound: 'Лимон, Лохина, Чорниця',
        image: daimBajaBlue,
        ice: false,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - ICE ORANGE POMEGRANATE',
        type: 'daim',
        rating: 3,
        compound: 'Апельсин, Гранат, Лід',
        image: daimIceOrangePomegranate,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - CHILL OUT',
        type: 'daim',
        rating: 3,
        compound: 'Вишня, Грейпфрут, Диня, Лід, Маракуйя, Ожина',
        image: daimChillOut,
        ice: true,
        comments: [],
    },
    {
        id: uuidv4(),
        title: 'Daim - TWO APPLES',
        type: 'daim',
        rating: 3,
        compound: 'Аніс, Зелене яблуко, Яблуко',
        image: daimTwoApples,
        ice: false,
        comments: [],
    },
] as IFMockFlavor[];

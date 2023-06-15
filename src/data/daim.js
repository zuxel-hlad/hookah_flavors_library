import { v4 as uuidv4 } from 'uuid';
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

export default [
    {
        id: uuidv4(),
        title: 'Daim BILLIONAIRE',
        type: 'daim',
        rating: 5,
        compound: 'Какао, Пиріг, Шоколад',
        image: daimBillionaire,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Daim OZZY FOZZY',
        type: 'daim',
        rating: 3,
        compound: "Лайм, Маракуя, М'ята, Слива",
        image: daimOzzyFozzy,
        ice: true,
    },
    {
        id: uuidv4(),
        title: 'Daim Absolute Zero',
        type: 'daim',
        rating: 5,
        compound: "Лід, М'ята",
        image: daimAbsoluteZero,
        ice: true,
    },
    {
        id: uuidv4(),
        title: 'Daim LOVE 69',
        type: 'daim',
        rating: 3,
        compound: "Диня, Маракуя, М'ята, Роза",
        image: daimLove69,
        ice: true,
    },
    {
        id: uuidv4(),
        title: 'Daim Ice Watermelon Berry',
        type: 'daim',
        rating: 3,
        compound: 'Кавун, Ожина, Лід, Малина, Чорниця',
        image: daimIceWaterMelonBerry,
        ice: true,
    },
    {
        id: uuidv4(),
        title: 'Daim LADY KILLER',
        type: 'daim',
        rating: 3,
        compound: "Диня, Ожина, Полуниця, Малина, Манго, М'ята",
        image: daimLadyKiller,
        ice: true,
    },
    {
        id: uuidv4(),
        title: 'Daim AMERICAN QUEEN',
        type: 'daim',
        rating: 3,
        compound: 'Ананас, Банан, Манго, Маракуя, Папая, Персик, Пітайя',
        image: daimAmericanQueen,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Daim TUSOVKA',
        type: 'daim',
        rating: 3,
        compound: 'Фруктовий мікс',
        image: daimTusovka,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Daim - Egzotica',
        type: 'daim',
        rating: 3,
        compound: 'Мультіфрукт',
        image: daimEgzotica,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Daim - Spiced Peach',
        type: 'daim',
        rating: 3,
        compound: 'Гриль , Персик',
        image: daimSpicedPeach,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Daim - BAYRAKTAR',
        type: 'daim',
        rating: 3,
        compound: 'Апельсин, Банан, Ківі, Лимон, Персик',
        image: daimBayraktar,
        ice: false,
    },
];

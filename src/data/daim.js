import { v4 as uuidv4 } from 'uuid';
import daimBillionaire from '../assets/img/daim/Tabak-Daim-Billionaire-Baylone-50gr.webp';
import daimOzzyFozzy from '../assets/img/daim/Tabak-Daim-Ozzy-Fozzy-Ozzi-Fozzi-50gr.webp';
import daimAbsoluteZero from '../assets/img/daim/Tabak-Daim-Absolute-Zero-Absolyut-Zero-50gr.webp';
import daimLove69 from '../assets/img/daim/tabak-daim-love69-scaled-700x700.jpg';
import daimIceWaterMelonBerry from '../assets/img/daim/Tabak-Daim-Ice-Watermelon-Berry-Led-Arbuz-Yagoda-50gr.webp';
import daimLadyKiller from '../assets/img/daim/Tabak-Daim-Lady-Killer-Ledi-Killer-50gr.webp';
import daimAmericanQueen from '../assets/img/daim/Tabak-Daim-American-Queen-Amerikan-Kvin-50gr.webp';
import daimTusovka from '../assets/img/daim/daim_tusovka.jpg';

export default [
    {
        id: uuidv4(),
        title: 'Daim BILLIONAIRE',
        type: 'daim',
        rating: 5,
        compound: 'Какао, Пирог, Шоколад',
        image: daimBillionaire,
    },
    {
        id: uuidv4(),
        title: 'Daim OZZY FOZZY',
        type: 'daim',
        rating: 3,
        compound: 'Лайм, Маракуйя, Мята, Слива',
        image: daimOzzyFozzy,
    },
    {
        id: uuidv4(),
        title: 'Daim Absolute Zero',
        type: 'daim',
        rating: 5,
        compound: 'Лед, Мята',
        image: daimAbsoluteZero,
    },
    {
        id: uuidv4(),
        title: 'Daim LOVE 69',
        type: 'daim',
        rating: 3,
        compound: 'Дыня, Маракуйя, Мята, Роза',
        image: daimLove69,
    },
    {
        id: uuidv4(),
        title: 'Daim Ice Watermelon Berry',
        type: 'daim',
        rating: 3,
        compound: 'Арбуз, Ежевика, Лед, Малина, Черника',
        image: daimIceWaterMelonBerry,
    },
    {
        id: uuidv4(),
        title: 'Daim LADY KILLER',
        type: 'daim',
        rating: 3,
        compound: 'Дыня, Ежевика, Клубника, Малина, Манго, Мята',
        image: daimLadyKiller,
    },
    {
        id: uuidv4(),
        title: 'Daim AMERICAN QUEEN',
        type: 'daim',
        rating: 3,
        compound: 'Ананас, Банан, Манго, Маракуйя, Папайя, Персик, Питайя',
        image: daimAmericanQueen,
    },
    {
        id: uuidv4(),
        title: 'Daim TUSOVKA',
        type: 'daim',
        rating: 3,
        compound: 'Ананас, Банан, Манго, Маракуйя, Папайя, Персик, Питайя',
        image: daimTusovka,
    },
];

import { v4 as uuidv4 } from 'uuid';
import jibiarFreshBerry from '../assets/img/jibiar/tabak-jibiar-fresh-berry-yagody-led-50-gr.jpg';
import jibiarMasterMix from '../assets/img/jibiar/tabak-jibiar-master-mix-master-miks-50-gramm-500x500.jpg';
import jibiarRaspberryPeachBlueberry from '../assets/img/jibiar/Tabak-JIBIAR-Raspberry-Peach-Blueberry-Malina-Persik-Chernika-50-gr.webp';
import jibiarDejavu from '../assets/img/jibiar/Tabak-JIBIAR-Dejavu-Deghavyu-50-gr.webp';
import jibiarAmourInfini from '../assets/img/jibiar/Tabak-JIBIAR-Amour-Infini-Amur-Infini-50-gr.webp';
import jibiarSantaBarbara from '../assets/img/jibiar/Tabak-JIBIAR-Santa-Barbara-Santa-Barbara-50-gr.webp';
import jibiarGreenMix from '../assets/img/jibiar/Tabak-JIBIAR-Green-Mix-Grin-Miks-50-gr.webp';
import jibiarIceCola from '../assets/img/jibiar/Tabak-JIBIAR-Ice-Cola-Kola-Led-50-gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'Jibiar Fresh Berry',
        type: 'jibiar',
        rating: 4,
        compound: 'Ежевика, Лед, Малина',
        image: jibiarFreshBerry,
    },
    {
        id: uuidv4(),
        title: 'Jibiar MASTERMIX',
        type: 'jibiar',
        rating: 5,
        compound: 'Апельсин, Вишня, Малина, Манго, Персик, Черника',
        image: jibiarMasterMix,
    },
    {
        id: uuidv4(),
        title: 'Jibiar RASPBERRY PEACH BLUEBERRY',
        type: 'jibiar',
        rating: 5,
        compound: 'Малина, Персик, Черника',
        image: jibiarRaspberryPeachBlueberry,
    },
    {
        id: uuidv4(),
        title: 'Jibiar DEJAVU',
        type: 'jibiar',
        rating: 5,
        compound: 'Арбуз, Ваниль, Дыня, Мята',
        image: jibiarDejavu,
    },
    {
        id: uuidv4(),
        title: 'Jibiar AMOUR INFINI',
        type: 'jibiar',
        rating: 3,
        compound: 'Арбуз, Манго, Маракуйя, Питайя',
        image: jibiarAmourInfini,
    },
    {
        id: uuidv4(),
        title: 'Jibiar SANTA BARBARA',
        type: 'jibiar',
        rating: 3,
        compound: 'Абрикос, Лед, Черника',
        image: jibiarSantaBarbara,
    },
    {
        id: uuidv4(),
        title: 'Jibiar GREEN MIX',
        type: 'jibiar',
        rating: 3,
        compound: 'Зеленое Яблоко, Киви, Лайм, Мята',
        image: jibiarGreenMix,
    },
    {
        id: uuidv4(),
        title: 'Jibiar ICE COLA',
        type: 'jibiar',
        rating: 3,
        compound: 'Кола, Лед',
        image: jibiarIceCola,
    },
];

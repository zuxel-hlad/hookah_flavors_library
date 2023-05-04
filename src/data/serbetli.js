import { v4 as uuidv4 } from 'uuid';
import serbetliRaspberryPeachBlueberry from '../assets/img/serbetli/Tabak-Serbetli-Raspberry-Peach-Blueberry-Malina-Persik-Chernika-50gr.webp';
import serbetliDoubleEffect from '../assets/img/serbetli/Tabak-Serbetli-Double-Effect-Dvoynoy-Effekt-50gr.webp';

export default [
    {
        id: uuidv4(),
        title: 'Serbetli RASPBERRY PEACH BLUEBERRY',
        type: 'serbetly',
        rating: 3,
        compound: 'Малина, Персик, Чорниця',
        image: serbetliRaspberryPeachBlueberry,
        ice: false,
    },
    {
        id: uuidv4(),
        title: 'Serbetli DOUBLE EFFECT',
        type: 'serbetly',
        rating: 3,
        compound: 'Кола , Лимон',
        image: serbetliDoubleEffect,
        ice: false,
    },
];

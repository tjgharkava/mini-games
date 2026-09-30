import { createHeader } from '../components/header/header';
import '../styles/style.css';
import { createHero } from '../components/hero/hero';

const app = document.getElementById('app');

if (app) {
    app.appendChild(createHeader());
    app.appendChild(createHero());
}
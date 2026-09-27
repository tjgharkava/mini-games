import { createHeader } from '../components/header/header';
import '../styles/style.css';

const app = document.getElementById('app');

if (app) {
    app.appendChild(createHeader());
}
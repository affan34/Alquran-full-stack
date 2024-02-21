import { render } from 'preact'
import { App } from './app.jsx'
export const server="https://api.alquran.cloud/v1/surah/";
export const recitation="https://cdn.islamic.network/quran/audio/128/ar.alafasy/";


render(<App />, document.getElementById('app'))

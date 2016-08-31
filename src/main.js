import {Alegria} from "./core/alegria";
import {Cards} from "./../widgets/cards/cards";

import {version} from '../package.json';

console.log('Current version of Alegria is:' + version);

new Alegria().render();
new Cards().render();
import template from './cards.hbs';
import {Alegria} from './../../src/core/alegria';

export class Cards extends Alegria {

    render() {
        console.log(template({name: "John Doe"}));
    }
}

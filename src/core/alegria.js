import {Compiler} from "./compiler";

export class Alegria {

    constructor(settings = {}) {
        this.settings = Object.assign({}, settings);
        this.compiler = new Compiler();
    }

    render() {
        let template = this.compiler.compile(this.settings.template);
        let html = template(this.settings.data);

        let el = document.getElementById(this.settings.selector);
        el.innerHTML = html;

        return this;
    }

    get jsonData() {
        return this.settings.data;
    }

    set jsonData(jsonData) {
        this.settings.data = jsonData;
    }

    action(name, callback) {
        Alegria.prototype[name] = callback;
    }
}
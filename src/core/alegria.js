import {Compiler} from "./compiler";

export class Alegria {

    constructor(settings = {}) {
        this.settings = Object.assign({}, settings);
        this.compiler = new Compiler();
    }

    render() {
        console.log("Render here!");

        return this;
    }

    compileTemplate(template) {
        this.compiler.compile(template);

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
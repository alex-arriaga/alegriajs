import Handlebars from "handlebars";
export class Compiler {

    constructor() {

    }

    compile(template) {
        return Handlebars.compile(template);
    }
}
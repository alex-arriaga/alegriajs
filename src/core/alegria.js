export class Alegria {

    constructor(params = {}) {

    }

    render() {
        return new Promise((resolve, reject)=> {
            console.log("Hey!");
            resolve();
        });
    }

    data() {
        console.log("data");
    }
}
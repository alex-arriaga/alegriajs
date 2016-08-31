import {Alegria} from "./core/alegria";

let template = `
    <div class="item">
        {{title}}
    </div>
`;
let widget = new Alegria({
    data: {
        items: [{
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            id: 2,
            title: "Nullam dignissim dolor venenatis metus"
        }]
    }
});

widget.action("filterByTitle", function () {
    // Filter only even items
    let filteredItems = this.jsonData.items.filter((obj, i) => {
        return obj.id % 2 === 0;
    });
    console.log(filteredItems);

    return this;
});

widget
    .compileTemplate()
    .render()
    .filterByTitle();


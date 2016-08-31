import {Alegria} from "./core/alegria";

let template = `
    <h1>{{ title }}</h1>
    {{#each items}}
    <div class="item">
        {{title}}
        {{#if statistics.views}}
            <strong>Views: </strong>{{ statistics.views }}
        {{/if}}
    </div>
    {{/each}}
`;

let widget = new Alegria({
    selector: "container",
    template: template,
    data: {
        title: "Recent events",
        items: [{
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            statistics: {
                views: 34,
                special: true,
                social: {
                    facebook: {
                        likes: 345
                    }
                }
            }
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
    .render()
    .filterByTitle();


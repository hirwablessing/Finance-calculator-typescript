export class ListTemplate {
    //pass a specific element of typeHTMLUListElement to the constructor, the element is stored in conteainer variable
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        if (pos === "start") {
            //if it's at the start of the list we'll add it at the beginning of the list
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}

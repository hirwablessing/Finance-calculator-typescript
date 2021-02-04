
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js';
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { ListTemplate } from './classes/ListTemplate.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("hirwa", "web work", 2500);
docTwo = new Invoice("blessing", "plumbing work", 300);

let docs: HasFormatter[] = []
docs.push(docOne);
docs.push(docTwo);


//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#details") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

let doc: HasFormatter;

if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
} else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
}

list.render(doc, type.value, 'end');

//GENERICS

//ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docone: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { name: "tailwind css" }
}

const doctwo: Resource<string[]> = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: ["tailwind css", "bootstrap"]
}
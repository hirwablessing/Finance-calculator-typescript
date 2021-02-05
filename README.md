## TypeScript Notes

To install TypeScript

```
npm install -g typescript
```

TypeScript is not recognised by the browser. The code is compiled into Old JS and then the browser renders it.

To compile the .ts file run the following:

```
tsc example.ts
```

This compiles the TS code into JS and creates a file called example.js which is served to the browser.
If you dont wan't to keep compiling and want it automatically done for you, use the following:

```
tsc example.ts -w
```

-w flag stands for 'watch' the file for changes

'?:' in TS when used together means Optional Argument
Example of override in TS
Use '!'
const anchor = document.querySelector('a')!;

Access Specifiers in Classes:

public
private
readonly

Generics: Reusable blocks of code to be used with different types
'<T>' is added as a prefix

Eg:

```
// GENERICS

// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
//let docTwo = addUID('shaun');

console.log(docOne.name);

// with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docThree: Resource<object> = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: 'shoppingList',
  data: ['bread', 'milk']
};

console.log(docThree, docFour);
```

Enums: Are used when it is hard to remember index, so we choose to give the numbers names

```
// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);
```

Tuples: Types are fixed in the array. The respective indexs' types are fixed.
They are declared as follows:

```
let tup = [<type1>,<type2>,<type3>];

Eg:
let tup = [string,number,boolean] = ['Ritik',20,true];
tup[0] = 'Rohan';
tup[1] = 30;
```

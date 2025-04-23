type Person = {
    name: string;
};
type AdditionFields = {
    age: number;
}

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const merged = merge<Person, AdditionFields>({ name: 'Alisa' }, { age: 28 });

console.log(merged.name);
console.log(merged.age);

export { };

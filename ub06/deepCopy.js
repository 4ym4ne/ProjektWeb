const deepCopy = (struct) =>
    Array.isArray(struct)
        ? struct.map((item) => deepCopy(item))
        : typeof struct === 'object'
            ? Object.fromEntries(
                Object.entries(struct).map(([key, value]) => [key, deepCopy(value)])
            )
            : struct;

const originalObject = {
    name: 'User',
    age: 30,
    address: {
        city: 'Bonn',
        zip: '53122',
    },
    hobbies: ['reading', 'coding', { type: 'outdoor', activities: ['hiking', 'camping'] }],
};

const copiedObject = deepCopy(originalObject);

console.assert(originalObject !== copiedObject, 'Objects are not the same reference');
console.assert(
    originalObject.address !== copiedObject.address,
    'Nested objects are not the same reference'
);
console.assert(
    originalObject.hobbies[2] !== copiedObject.hobbies[2],
    'Nested objects inside arrays are not the same reference'
);
console.assert(
    originalObject.hobbies[2].activities !== copiedObject.hobbies[2].activities,
    'Nested arrays inside objects are not the same reference'
);
console.assert(
    JSON.stringify(originalObject) === JSON.stringify(copiedObject),
    'Objects have the same content'
);

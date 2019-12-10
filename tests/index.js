QUnit.test('copyArray', function(assert) {
    const arrayToCopy = [1, 2, 3, 4, 5];
    const copiedArray = copyArray(arrayToCopy);

    assert.ok(
        Array.isArray(copiedArray),
        'The copied array should be an array'
    );

    assert.deepEqual(
        copiedArray,
        [1, 2, 3, 4, 5],
        'The copied array should equal [1, 2, 3, 4, 5]'
    );

    assert.notStrictEqual(
        arrayToCopy,
        copiedArray,
        'The copied array should not equal the original array'
    );
});

QUnit.test('copyArrayAndDoubleValues', function(assert) {
    const arrayToCopy = [1, 2, 3, 4, 5];
    const copiedArray = copyArrayAndDoubleValues(arrayToCopy);

    assert.ok(
        Array.isArray(copiedArray),
        'The copied array should be an array'
    );

    assert.deepEqual(
        copiedArray,
        [2, 4, 6, 8, 10],
        'The copied array should equal [2, 4, 6, 8, 10]'
    );

    assert.deepEqual(
        arrayToCopy,
        [1, 2, 3, 4, 5],
        'The original array should still equal [1, 2, 3, 4, 5]'
    );
});

QUnit.test('updateObjectValues', function(assert) {
    const obj = {
        id: 1,
        name: 'John',
        favoriteColor: 'red',
    };
    const modifiedObj = updateObjectValues(obj);

    assert.equal(
        Object.prototype.toString.call(modifiedObj),
        '[object Object]',
        'The returned item should be an object'
    );

    assert.deepEqual(
        modifiedObj.name,
        'Zach',
        `The 'name' property was updated from 'John' to 'Zach'`
    );

    assert.deepEqual(
        modifiedObj.favoriteColor,
        'blue',
        `The 'favoriteColor' property was updated from 'red' to 'blue'`
    );

    assert.deepEqual(
        Object.entries(modifiedObj).map(item => item[1]),
        [1, 'Zach', 'blue'],
        `The new object values should equal [1, 'Zach', 'blue']`
    );
});

QUnit.test('copyAndDoubleObject', function(assert) {
    const objectToCopy = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
    };
    const copiedObject = copyAndDoubleObject(objectToCopy);

    assert.equal(
        Object.prototype.toString.call(copiedObject),
        '[object Object]',
        'The copied object should be an object'
    );

    assert.deepEqual(
        Object.entries(copiedObject).map(item => item[1]),
        [2, 4, 6, 8, 10],
        'The copied object values should equal [2, 4, 6, 8, 10]'
    );

    assert.deepEqual(
        Object.entries(objectToCopy).map(item => item[1]),
        [1, 2, 3, 4, 5],
        '`objectToCopy` values should still equal [1, 2, 3, 4, 5]'
    );
});

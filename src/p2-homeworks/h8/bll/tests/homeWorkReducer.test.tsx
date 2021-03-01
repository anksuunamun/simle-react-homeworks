import React from 'react';
import {homeWorkReducer} from '../homeWorkReducer';
import {HumanType, InitialPeopleType} from '../../HW8';

let initialState: InitialPeopleType;

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
});

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'});
    console.log(newState);

    let names = newState.map((human: HumanType) => human.name);

    expect(names).toEqual(['Александр', 'Виктор', 'Дмитрий', 'Ирина', 'Коля', 'Кот']);
    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe('Александр');
});
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'});
    let names = newState.map((human: HumanType) => human.name);

    expect(names).toEqual(['Кот', 'Коля', 'Ирина', 'Дмитрий', 'Виктор', 'Александр']);
    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe('Кот');
});
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18});
    const secondNewState = homeWorkReducer(initialState, {type: 'check', payload: 50});

    expect(newState.length).toBe(4);
    expect(newState[0].name).toBe('Александр');

    expect(secondNewState[0].name).toBe('Александр');
    expect(secondNewState[1].name).toBe('Ирина');
    expect(secondNewState.length).toBe(2);

});

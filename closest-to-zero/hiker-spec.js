'use strict';

const hiker = require('./hiker.js');

describe('answer', () => {
  it('should return 0 when array only number is 0', () => {
    expect(hiker.answer([0])).toEqual(0);
  });

  it('should return 42 when only 1 number of 42 is in the array', () => {
    expect(hiker.answer([42])).toEqual(42);
  });

  it('should return 41 when 2 numbers of 42 and 41 are in the array', () => {
    expect(hiker.answer([42, 41])).toEqual(41);
  });

  it('should return 0 when 3 numbers include 0 are in the array', () => {
    expect(hiker.answer([42, 41, 0])).toEqual(0);
  });

  it('should return -1 when 3 numbers  are in the array', () => {
    expect(hiker.answer([42, -1, 41])).toEqual(-1);
  });

  it('should return 1 when 4 numbers are in the array', () => {
    expect(hiker.answer([42, -1, 41, 1])).toEqual(1);
  });

  it('should return -41 when 2 negative numbers are in the array', () => {
    expect(hiker.answer([-42, -41])).toEqual(-41);
  });

  it('should return 42 when 1 positive and 1 negative numbers are in the array', () => {
    expect(hiker.answer([-99, -42, 42, 99])).toEqual(42);
  });

  it('should return 0 when a 0 and negative numbers are in the array', () => {
    expect(hiker.answer([-1, 0, 1])).toEqual(0);
  });
});

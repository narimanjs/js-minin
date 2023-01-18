"use strict";
const rect1 = {
    id: 'id',
    size: {
        with: 12,
        height: 24,
    },
    color: '#ccc'
};
const rect2 = {
    id: 'id2',
    size: {
        with: 10,
        height: 20
    }
};
rect2.color = 'black';
const rect3 = {};
const rect4 = {}; // old
const rect5 = {
    id: 'id5',
    size: {
        with: 20,
        height: 40
    },
    getArea() {
        return this.size.with * this.size.height;
    },
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};

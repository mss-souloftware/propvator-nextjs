import data from './tableDataBody.json';


let minPrice = Infinity;
let maxPrice = 0;
let mincommission = Infinity;
let maxcommission = 0;
let minleverage = Infinity;
let maxleverage = 0;
let mincredits = Infinity;
let maxcredits = 0;

data.forEach(i => {
    if (i.price !== '') {
        if (i.price < minPrice) {
            minPrice = i.price
        }
    }
})
data.forEach(i => {
    if (i.price !== '') {
        if (i.price > maxPrice) {
            maxPrice = i.price
        }
    }
})

data.forEach(i => {
    if (i.commission !== '') {
        if (i.commission < mincommission) {
            mincommission = i.commission
        }
    }
})
data.forEach(i => {
    if (i.commission !== '') {
        if (i.commission > maxcommission) {
            maxcommission = i.commission
        }
    }
})

data.forEach(i => {
    if (i.leverage !== '') {
        if (i.leverage < minleverage) {
            minleverage = i.leverage
        }
    }
})
data.forEach(i => {
    if (i.leverage !== '') {
        if (i.leverage > maxleverage) {
            maxleverage = i.leverage
        }
    }
})

data.forEach(i => {
    if (i.credits !== '') {
        if (i.credits < mincredits) {
            mincredits = i.credits
        }
    }
})
data.forEach(i => {
    if (i.credits !== '') {
        if (i.credits > maxcredits) {
            maxcredits = i.credits
        }
    }
})


const rangeSlider = {
    // price: [minPrice, maxPrice],
    // commission: [mincommission, maxcommission],
    // leverage: [minleverage, maxleverage],
    // credits: [mincredits, maxcredits],
    price: [0, 5000],
    commission: [0, maxcommission],
    leverage: [0, 30],
    credits: [0, maxcredits],
}

export default rangeSlider;
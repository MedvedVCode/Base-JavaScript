/* 1. Задание с температурой */

print = (a, ...b) => {
    let [forenheight, kelvin, celsium = a] = b;
    console.log(`Температура по: 
    цельсию - ${celsium}
    форенгейту - ${forenheight}
    кельвину - ${kelvin}`);
};

calcForenheight = (temp) => {
    const fT = (9 / 5) * temp + 32;
    return fT;
};

calcKelvin = (temp) => {
    const kT  = temp + 273.15;
    return kT;
}

const celsium = 22;
const forenheight = calcForenheight(celsium);
const kelvin = calcKelvin(celsium);

print(celsium, forenheight, kelvin);

/* 2. Задание с переменными */

const maName = 'Денис Федоров';
const admin = maName;
console.log(`\nadmin = ${admin}`);

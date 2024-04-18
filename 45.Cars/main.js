function storeCarInfo(manufacture, modelName, ...extraOption) {
    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return carInfo;
}
let answar = storeCarInfo('Honda', 'Civic', { colour: "Black" }, { features: ['Navigation', 'Power Window'] });
console.log(answar);
export {};

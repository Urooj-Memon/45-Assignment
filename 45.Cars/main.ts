import { features } from "process";

function storeCarInfo(manufacture: string, modelName: string, ...extraOption: { [key: string] : any} [] ) :
Object {
    const carInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...extraOption)
    }
    return carInfo;
} 


let answar = storeCarInfo('Honda', 'Civic', {colour: "Black"}, {features: ['Navigation', 'Power Window']})

console.log(answar);
import { FrenchConverter } from './core/french.converter'; 
import { NumberParser } from './core/NumberParser';
 
  

const converter = new NumberParser(new FrenchConverter());
console.log(converter.singleNumber(999999));
console.log(converter.singleNumber(100));
console.log(converter.singleNumber(200));
console.log(converter.singleNumber(802));
console.log(converter.singleNumber(1110));
console.log(converter.singleNumber(180000));
console.log(converter.singleNumber(2000));
console.log(converter.multipleNumbers([0, 2, 10]));
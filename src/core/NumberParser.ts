import { FrenchConverter } from "./french.converter";

export class NumberParser {
  frenchConverter: FrenchConverter;
  constructor(frenchConverter: FrenchConverter) {
    this.frenchConverter = frenchConverter;
  }
  singleNumber(number: number) {
    return this.frenchConverter.convertToFrench(number);
  }
  multipleNumbers(numbers: number[]) {
    const words = [];
    for (const num of numbers) {
      words.push(this.singleNumber(num));
    }
    return words;
  }
}

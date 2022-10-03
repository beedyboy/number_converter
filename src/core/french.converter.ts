import { language } from "../fr";
import { MainNumber } from "./MainNumber";

export class FrenchConverter extends MainNumber {
  constructor() {
    super();
  }
  convertToFrench(n: number): string | undefined {
    if (n < 0) return undefined;
    if (isNaN(n)) return "A numeric value is expected";

    n = Math.round(+n);
    const key: number = n;
    if (this.unitExceptions[n]) return this.unitExceptions[key];
    if (this.base[n]) return this.base[key];
    if (n < 100) return this.handleSmallerThan100(n);

    return this.biggerNumbers(n);
  }

  handleSmallerThan100(n: number) {
    const dec = Math.floor(n / 10) * 10;
    const unit = n - dec;
    if (unit) {
      return this.base[dec] + "-" + this.convertToFrench(unit);
    }
    return this.base[dec];
  }
  biggerNumbers(n: number) {
    let remainder = n % 100;
    let words = [];

    if (remainder) {
      words.push(this.convertToFrench(remainder));
    }

    let biggerNumber: number = 0;
    const len = this.UNITS.length;
    for (let i = 0; i < len; i++) {
      let rest = Math.floor(n / this.scale[i]);
      let divideBy;
      if (i === len - 1) divideBy = 1000000;
      else divideBy = this.scale[i + 1] / this.scale[i];

      rest %= divideBy;

      const unit = this.UNITS[i];
      if (!rest) continue;
      biggerNumber = this.scale[i];
      let form;
      if (rest === 1 && rest % 10 === 1) {
        form = unit.singular;
      } else {
        form = unit.plural && !remainder ? unit.plural : unit.singular;
      }

      if (
        unit.avoidPrefixException &&
        unit.avoidPrefixException.indexOf(rest) > -1
      ) {
        words.push(form);
        continue;
      }

      let exception = language.unitExceptions[rest];
      let num = exception || this.convertToFrench(rest);
      n -= rest * this.scale[i];
      words.push(num + " " + form);
    }

    return words.reverse().join(" ");
  }
}

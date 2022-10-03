import { language } from "../fr";
export class MainNumber {
  readonly base = language.base;
  readonly unitExceptions = language.unitExceptions;
  UNITS = [
    {
      singular: "cent",
      plural: "cents",
      avoidPrefixException: [1],
    },
    {
      singular: "mille",
      plural: "milles",
      avoidPrefixException: [1],
    },
  ];
  constructor() {
    this.caculateScale();
  }
  scale = [100];

  caculateScale() {
    for (var i = 1; i <= 16; i++) {
      this.scale.push(Math.pow(10, i * 3));
    }
  }
}

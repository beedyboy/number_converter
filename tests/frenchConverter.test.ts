import { FrenchConverter } from "../src/core/french.converter"; 
describe('check for one', () => {
  let  frenchConverter: FrenchConverter; 
    beforeEach(() => {
        frenchConverter = new FrenchConverter();
    })
    it('convert 80 to be quatre-vingts', () => { 
        expect(frenchConverter.convertToFrench(80)).toBe("quatre-vingts")
    })
    it('convert 100 to be cent', () => { 
        expect(frenchConverter.convertToFrench(100)).toBe("cent")
    })
    it('convert 200 to be deux cents', () => { 
        expect(frenchConverter.convertToFrench(200)).toBe("deux cents")
    })
    it('convert 2000 to be deux milles', () => { 
        expect(frenchConverter.convertToFrench(2000)).toBe("deux milles")
    })
    it('convert 82 to be quatre-vingt-deux', () => { 
        expect(frenchConverter.convertToFrench(82)).toBe("quatre-vingt-deux")
    })
}) 
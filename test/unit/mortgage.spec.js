const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
  beforeEach(() => {
    mortgage = new Mortgage(200000, 2.5, 30, 12);
    mortgageTest = new Mortgage(100000, 5, 15, 12);
  });

  it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should return monthly payment to equal 790.79', () => {
    expect(mortgageTest.monthlyPayment()).to.equal('790.79');
  });

  it("should return monthly payment to equal 790.24", () => {
    expect(mortgage.monthlyPayment()).to.equal("790.24");
  });

  it('should return a string value of number', () => {
    expect(typeof (mortgageTest.monthlyPayment())).to.equal('string');
  });
});

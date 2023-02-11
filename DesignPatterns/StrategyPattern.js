function Fedex() {
  this.calculate = (package) => {
    return 2.45;
  };
}

function UPS() {
  this.calculate = (package) => {
    return 1.46;
  };
}

function USPS() {
  this.calculate = (package) => {
    return 4.5;
  };
}

function Shipping() {
  this.company = '';

  this.setStrategy = (company) => {
    this.company = company;
  };

  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const package = { from: 'Bangalore', to: 'Mangalore', weight: 1.56 };

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log(`Fedex:${shipping.calculate(package)}`);

shipping.setStrategy(ups);
console.log(`UPS:${shipping.calculate(package)}`);

shipping.setStrategy(usps);
console.log(`USPS:${shipping.calculate(package)}`);

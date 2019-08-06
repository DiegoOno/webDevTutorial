class EconomicalRelease {
    constructor(name = 'Genéric', value = 0) {
        this.name = name;
        this.value = value;
    }
}

class FinancialCycle {
    constructor(month, year) {
        this.month = month;
        this.year = year;
        this.releases = [];
    }

    addReleases (...releases) {
        releases.forEach(r => this.releases.push(r));
    }

    sumary() {
        let consolidatedValue = 0;
        this.releases.forEach(r => {
            consolidatedValue += r.value;
        })
        return consolidatedValue;
    }
}

const salary = new EconomicalRelease('Salary', 10000);
const energy = new EconomicalRelease('Energy tariff', -220);
const water = new EconomicalRelease('Water tariff', - 300);

const final = new FinancialCycle('May', 2019);
final.addReleases(salary, energy, water);
console.log(final.sumary());
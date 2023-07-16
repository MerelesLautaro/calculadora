class Display {
    constructor(displayValueBefore, displayValueActual) {
        this.displayValueBefore = displayValueBefore;
        this.displayValueActual = displayValueActual;
        this.calculator = new Calculator();
        this.typeOperator = undefined;
        this.saveValueActual = '';
        this.saveValueBefore = '';
        this.signs = {
            sum: '+',
            subtract: '-',
            divide: '/',
            multiplication: 'x'

        }
    }

    deleteNumber() {
        this.saveValueActual = this.saveValueActual.toString().slice(0,-1);
        this.printValues();
    }
    
    deleteAll() {
        this.saveValueActual = '';
        this.saveValueBefore = '';
        this.typeOperator = undefined;
        this.printValues();
    }
    
    addNumber(number) {
        if(number === ',' && this.saveValueActual.includes(',')) return
        this.saveValueActual = this.saveValueActual.toString() + number.toString();
        this.printValues();
    }

    addOperator(operators) {
        this.typeOperator !== 'equal' && this.calculate();
        this.typeOperator = operators;
        this.saveValueBefore = this.saveValueActual || this.saveValueBefore;
        this.saveValueActual = '';
        this.printValues();
    }

    printValues() {
        this.displayValueActual.textContent = this.saveValueActual;
        this.displayValueBefore.textContent = `${this.saveValueBefore} ${this.signs[this.typeOperator] || ''}`;
    }

    calculate() {
        const saveValueBefore = parseFloat(this.saveValueBefore);
        const saveValueActual = parseFloat(this.saveValueActual);

        if(isNaN(saveValueActual)  || isNaN(saveValueBefore)) return
        this.saveValueActual = this.calculator[this.typeOperator](saveValueActual, saveValueBefore).toString();
    }
};

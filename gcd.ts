export class numbers {
    constructor(
        public numerator: number,
        public denominator: number,
    ) {

    }

    public gcdBruteForce(a: number, b: number) {
        for (let i = a + b; i > 0; i--) {
            if (a % i === 0 && b % i === 0) {
                return i;
            }
        }
    }

    public cancel() {
        for (let i = this.numerator + this.denominator; i > 0; i--) {
            if (this.numerator % i === 0 && this.denominator % i === 0) {
                this.numerator = this.numerator / i
                this.denominator = this.denominator / i
                return;
            }
        }
    }


    public gcdEuclid(a: number, b: number): number {
        if (a === b) {
            return a;
        }
        if (a > b) { return this.gcdEuclid(a - b, b); }
        else {
        return this.gcdEuclid(a, b - a);}
    }

}
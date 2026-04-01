export class numbers {
    constructor(
        public numerator: number,
        public denominator: number,
    ) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be 0");
        }
        this.cancel()
    }

    public gcdBruteForce(a: number, b: number) {
        const min = Math.min(a, b);
        for (let i = min; i >= 1; i--) {
            if (a % i === 0 && b % i === 0) {
                return i;
            }
        }
        return 1;
    }

    public cancel() {
        const gcd = this.gcdBruteForce(this.numerator, this.denominator)
        this.numerator = this.numerator / gcd
        this.denominator = this.denominator / gcd
    }

    public gcdEuclid(a: number, b: number): number {
        if (b === 0) return a;
        return this.gcdEuclid(b, a % b);
    }

}
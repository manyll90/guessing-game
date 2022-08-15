class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.result;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.result = this.min + Math.ceil((this.max - this.min) / 2);
    }

    lower() {
        this.max = this.result;
    }

    greater() {
        this.min = this.result;
    }
}

module.exports = GuessingGame;

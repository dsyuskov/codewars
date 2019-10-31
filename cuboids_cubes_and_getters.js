class Cuboid {
    constructor(length, width, height) {
        this.length = length, this.width = width;
        this.height = height;
    }

    get volume() {
        return this.length * this.width * this.height
    }
    get surfaceArea() {
        return(this.length * this.width + this.length * this.height + this.width * this.height) * 2
    };
}

class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
    }
}

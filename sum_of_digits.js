function digital_root(n) {
    let result = 0;
    do {
        let add = n % 10;
        result += add;
        n = Math.trunc(n / 10);

        if (n < 10) {
            result += n;
            if (result > 9) {
                n = result;
                result = 0;
            }
        }
    } while (n > 10);

    return result;
}

console.log(digital_root(493193));

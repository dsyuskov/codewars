function prefill(n, v) {
    let result = []
    let count = n / 1;
    let ost = n % 1;
    count = parseInt(count);
    if (isNaN(count) || count < 0 || ost !== 0 || n === true || n === false) {
        throw new TypeError(`${n} is invalid`);
    }
    for (let i = 0; i < count; i++) {
        result.push(v);
    }
    return result;
}
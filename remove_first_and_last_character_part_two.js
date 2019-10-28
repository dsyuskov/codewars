function array(arr) {
    let first = arr.indexOf(',');
    let last = arr.lastIndexOf(',');
    if (first < last) {
        return arr.slice(first + 1, last).split(',').join(' ');
    }
    return null;
}

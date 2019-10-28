Object.prototype.hash = function (string) {
    let arr = string.split('.');
    let link = obj;
    for (let name of arr) {
        link = link[name];
        if (link === undefined) {
            return undefined;
        }
    }
    return link;
}
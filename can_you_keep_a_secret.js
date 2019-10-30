function createSecretHolder(secret) {
    let obj = new Object(secret);
    obj._secret = secret;
    obj.getSecret = function () {
        return obj._secret;
    }
    obj.setSecret = function (secret) {
        obj._secret = secret;
    }
    return obj;
}
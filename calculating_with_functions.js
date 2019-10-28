function sel(n, obj) {
    switch (obj.oper) {
        case 'plus':
            return n + obj.value;
        case 'times':
            return n * obj.value;
        case 'minus':
            return n - obj.value;
        case 'dividedBy':
            return n / obj.value;
    }
}

function zero() {
    if (arguments[0] === undefined) {
        return 0;
    }
    return sel(0, arguments[0]);
}

function one() {
    if (arguments[0] === undefined) {
        return 1;
    }
    return sel(1, arguments[0]);
}
function two() {
    if (arguments[0] === undefined) {
        return 2;
    }
    return sel(2, arguments[0]);
}
function three() {
    if (arguments[0] === undefined) {
        return 3;
    }
    return sel(3, arguments[0]);
}
function four() {
    if (arguments[0] === undefined) {
        return 4;
    }
    return sel(4, arguments[0]);
}
function five() {
    if (arguments[0] === undefined) {
        return 5;
    }
    return sel(5, arguments[0]);
}
function six() {
    if (arguments[0] === undefined) {
        return 6;
    }
    return sel(6, arguments[0]);
}
function seven() {
    if (arguments[0] === undefined) {
        return 7;
    }
    return sel(7, arguments[0]);
}
function eight() {
    if (arguments[0] === undefined) {
        return 8;
    }
    return sel(8, arguments[0]);
}
function nine() {
    if (arguments[0] === undefined) {
        return 9;
    }
    return sel(9, arguments[0]);
}

function plus() {
    return {'oper': 'plus', 'value': arguments[0]};
}
function minus() {
    return {'oper': 'minus', 'value': arguments[0]};
}
function times() {
    return {'oper': 'times', 'value': arguments[0]};
}
function dividedBy() {
    return {'oper': 'dividedBy', 'value': arguments[0]};
}
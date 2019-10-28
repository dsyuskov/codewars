function getMiddle(s) {
    var n;    
    if (s.length % 2 == 0) {
        n = s.length / 2;
        return s.substr(n - 1, 2);
    } else {
        n = (s.length + 1) / 2;
        return s.substr(n - 1, 1);
    }
}
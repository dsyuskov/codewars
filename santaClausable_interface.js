var santa = {
    sayHoHoHo: function () {
        console.log('Ho Ho Ho!')
    },
    distributeGifts: function () {
        console.log('Gifts for all!');
    },
    goDownTheChimney: function () {
        console.log('*whoosh*');
    }
};

var notSanta = {
    sayHoHoHo: function () {
        console.log('Oink Oink!')
    }
};

function isSantaClausable(obj) {
    return(typeof obj.distributeGifts === 'function' && typeof obj.goDownTheChimney === 'function' && typeof obj.sayHoHoHo === 'function');
}
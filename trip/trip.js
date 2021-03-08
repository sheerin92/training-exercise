var moment = require('moment'); // require
moment().format();

const getTime = (h, m) => {
    let currentDate = new Date();
    currentDate.setHours(h, m);
    return currentDate;
};

const trips = [
    {
        id: 1,
        pick: { plannedEta: moment(getTime(7, 30)) },
        drop: { plannedEta: moment(getTime(8, 30)) }
    }, {
        id: 2,
        pick: { plannedEta: moment(getTime(8, 45)) },
        drop: { plannedEta: moment(getTime(9, 15)) }
    }
];

const breakTime = moment(getTime(8, 35));

function findingDropAndPickTime(trip) {
    var dropStopBeforeBreak, pickStopAFterBreak;
    const tripTime = [];
    for (var i = 0; i < trip.length; i++) {
        if (trip[i].drop.plannedEta < breakTime) {
            dropStopBeforeBreak = trip[i].drop;
            tripTime.push(dropStopBeforeBreak);
        }
        if (trip[i].pick.plannedEta > breakTime) {
            pickStopAFterBreak = trip[i].pick;
            tripTime.push(pickStopAFterBreak);
        }
    }
    return tripTime;
}

console.log(findingDropAndPickTime(trips));
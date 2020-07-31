function gradePoints(x) {
    var val;
    if (x >= 90) {
        x = 'S';
        val = `Your grade is ${x} and you have passed in First Class with Distinction.`;
    }
    if (x >= 80 && x < 90) {
        x = 'A';
        val = `Your grade is ${x} and you have passed in First Class.`;
    }
    if (x >= 70 && x < 80) {
        x = 'B';
        val = `Your grade is ${x} and you have passed in Second Class.`;
    }
    if (x >= 60 && x < 70) {
        x = 'C';
        val = `Your grade is ${x} and you have passed in Third Class.`;
    }
    if (x >= 50 && x < 60) {
        x = 'D';
        val = `Your grade is ${x} and you have passed in Fourth Class.`;
    }
    if (x < 50) {
        x = 'E';
        val = `Your grade is ${x} and you have failed.`;
    }
    return val;
}

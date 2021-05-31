function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1
}

function toHour(num) {
    return `${num}`.padStart(2, '0');
}

function toMinutes(num) {
    return `${num}`.padEnd(2, '0');
}
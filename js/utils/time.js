export function getRandomToMax(max) {
    return Math.ceil(Math.random() * (max + 1)) - 1;
}

export function toHour(num) {
    return `${num}`.padStart(2, '0');
}

export function toMinutes(num) {
    return `${num}`.padEnd(2, '0');
}

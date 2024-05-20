const TIME = 2000;

export function move(callback) {
    const intervalId = setInterval(callback, TIME);
}
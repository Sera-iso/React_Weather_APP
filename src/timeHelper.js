export function formatTime(value) {
        if (value <10) {
            return `0${value}`;
        } else {
            return value;
        }
    }
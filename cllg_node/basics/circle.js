let PI = 3.14;
const area = (radius) => {
    return PI * radius * radius;
}

const circumference = (radius) => {
    return 2 * PI * radius;
}

module.exports = {
    area: area,
    circumference: circumference
}
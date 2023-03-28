
const numberToGuess = Math.floor(Math.random() * 1000);
console.log(numberToGuess)

let numberOfAttemts = 11
let attemptsUsed = 0

while (numberOfAttemts != 0) {
    numberOfAttemts -= 1
    const numberGuessed = prompt("Вопытайся угадать число:")
    flag = false

    if (isNaN(numberGuessed)) {
        alert("Необходимо ввести целое число")
    } else if (numberGuessed == numberToGuess) {
        alert("Ты угадал, красава !")
        flag = true
        break
    } else if (numberGuessed < numberToGuess) {
        alert(`Нет, не угадал. Мое число больше. У тебя осталось ${numberOfAttemts} попыток`)
        attemptsUsed += 1
    } else {
        alert(`Нет, не угадал. Мое число меньше. У тебя осталось ${numberOfAttemts} попыток`)
        attemptsUsed += 1
    }
}

if (flag) {
    alert(`Ты угадал число за ${attemptsUsed} попыток`)
    alert("Можешь быть собой доволен")
} else {
    alert("Увы, попытки закончились и я победил =P")
}

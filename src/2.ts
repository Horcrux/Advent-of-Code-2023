import { getLinesFromStdin } from './utils.js';

const numbers = [
  "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
]

const getFirstNumber = (line: string) => {
  for (let i = 0; i < line.length; i++) {
    // string
    for (let ni = 0; ni < numbers.length; ni++) {
      let n = numbers[ni]
      if (line.substring(i).startsWith(n)) {
        return ni + 1
      }
    }

    // char
    const char = line[i]
    const parsed = parseInt(char)
    if (!isNaN(parsed)) {
      return parsed
    }
  }
}

const getLastNumber = (line: string) => {
  for (let i = line.length; i >= 0; i--) {
    // string
    for (let ni = 0; ni < numbers.length; ni++) {
      let n = numbers[ni]
      if (line.substring(i).startsWith(n)) {
        return ni + 1
      }
    }

    //char
    const char = line[i]
    const parsed = parseInt(char)
    if (!isNaN(parsed)) {
      return parsed
    }
  }
}

const input = await getLinesFromStdin()
let sum = 0
input.split("\n").filter(l => l != "").forEach(line => {
  let first = getFirstNumber(line)
  let last = getLastNumber(line)
  console.log({ first, last })
  sum += parseInt("" + first + last)
});

console.log(`total sum: ${sum}`)
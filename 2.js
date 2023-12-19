import { createInterface } from 'readline';

const getLinesFromStdin = async () => {
  return new Promise((res, rej) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    let acc = []

    rl.on('line', (line) => {
      acc.push(line)
    });

    rl.once('close', () => {
      res(acc.join("\n"))
    })
  })
}

const numbers = [
  "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
]

const getFirstNumber = (line) => {
  for (let i = 0; i < line.length; i++) {
    // string
    for (let ni = 0; ni < numbers.length; ni++){
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

const getLastNumber = (line) => {
  for (let i = line.length; i >= 0; i--) {
    // string
    for (let ni = 0; ni < numbers.length; ni++){
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
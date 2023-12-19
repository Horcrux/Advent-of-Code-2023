import { getLinesFromStdin } from './utils.js';

const input = await getLinesFromStdin()
let sum = 0
input.split("\n").forEach(line => {
  let first = -1
  let last = -1

  let idx = 0;
  while (first == -1) {
    const char = line[idx]
    const parsed = parseInt(char)
    if (!isNaN(parsed)) {
      first = parseInt(char)
    } else { idx++ }
  }

  idx = line.length
  while (last == -1) {
    const char = line[idx]
    const parsed = parseInt(char)
    if (!isNaN(parsed)) {
      last = parseInt(char)
    } else { idx-- }
  }

  sum += parseInt("" + first + last)
});

console.log(`total sum: ${sum}`)
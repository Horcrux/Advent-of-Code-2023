import { createInterface } from 'readline';

export const getLinesFromStdin = async (): Promise<string> => {
  return new Promise((res, rej) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    });

    let acc: string[] = []

    rl.on('line', (line) => {
      acc.push(line)
    });

    rl.once('close', () => {
      res(acc.join("\n"))
    })
  })
}
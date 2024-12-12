import { Command } from 'commander';

const billSplitter = new Command('bill');

billSplitter
  .command('split <amount> <people>')
  .description('Split a bill between a number of people')
  .action((amount, people) => {
    const amountPerPerson = (amount / people).toFixed(2);
    console.log(`To split a £${amount} bill between ${people} people, each person should pay £${amountPerPerson}`);
  });

export default billSplitter;

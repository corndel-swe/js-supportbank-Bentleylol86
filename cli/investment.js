import { Command } from 'commander';

const investmentcalculator = new Command('investment');


investmentcalculator
  .command('invest <amount> <percent> <years> ')
  .description('Split a bill between a number of people')
  .action((amount, percent, years) => {
    // const total = (amount * (percent /100) * years) my original 
    const total = (amount * Math.pow(1 + percent / 100, years)).toFixed(2);
    console.log(`to invest £${amount} at ${percent}% over ${years} years will give you £${total}`);
  });


export default investmentcalculator;

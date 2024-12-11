import { Command } from 'commander';

const currencyconverter = new Command('conversion');

currencyconverter
  .command('convert <amount>')
  .description('convert dollars into pounds')
  .action((amount) => {
    const converteddollars = (amount * 0.78).toFixed(2); // Updated the conversion factor
    console.log(`Conversion of $${amount} into GBP is £${converteddollars}`);
  });

export default currencyconverter;

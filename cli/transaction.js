import { Command } from 'commander';

const transactionController = new Command('transaction');

transactionController
  .command('log <from> <to> <amount>')
  .description('Log transaction data to the console')
  .action((from, to, amount) => {
    const logTransaction = (from, to, amount) => {
      const now = new Date();
      const formattedDate = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      console.log(`On the date of our lord ${formattedDate}, ${from} Handed ${to} Moneys${amount}`);
    };

    logTransaction(from, to, amount);
  });

export default transactionController;

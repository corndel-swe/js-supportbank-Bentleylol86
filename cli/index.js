import { program } from "commander";
import transactionController from './transaction.js';
import billSplitter from './billsplitter.js';
import currencyconverter from "./currencyconverter.js";

program.version(`0.1.0`).description("SupportBank")

// Adding transactionController
program.addCommand(transactionController);

// Adding billSplitter
program.addCommand(billSplitter);

// Adding currencyconverter
program.addCommand(currencyconverter);

// Parse the command-line arguments
program.parse(process.argv);

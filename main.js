#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\tWelcome to CodeWithSaima = Currency Convertor \n"));
//define the list of currencies and exchange rate
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70,
    //Add more currencies on therir exchange rate here
};
let user_answer = await inquirer.prompt([
    {
        name: "fromcurrency",
        type: "list",
        message: "select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert in to:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//perform currency convertor by using formula
let from_amount = exchange_rate[user_answer.fromcurrency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//display the converted amount
console.log(`Converted Amount = ${converted_amount.toFixed(2)}`);

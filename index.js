#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 288,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "enter amount",
        type: "number"
    },
]);
let fromamount = currency[user_answer.from]; // exchange rate
let toamount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseamount = amount / fromamount; // USD base currency // 4
let convertedamount = baseamount * toamount;
console.log(convertedamount);

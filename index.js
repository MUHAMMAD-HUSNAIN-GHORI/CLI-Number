#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "HusnainGhori",
        type: "input",
        message: chalk.green("The user is requested to select any number from 1 to 10. If any number matches your number, we will give you Umrah retuned ticket."),
        validate: (name) => {
            if (name === "") {
                return (chalk.red('Error!U Need To Add A Valid Number'));
            }
            else {
                return true;
            }
        }
    },
]);
if (answer.HusnainGhori === randomNumber) {
    console.log("congratulations Umrah tikets");
}
else {
    console.log(chalk.yellowBright("\n\nbest of luck to next time"));
}

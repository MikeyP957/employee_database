# employee_database

## Overview

This application runs in the terminal and uses node.js, inquirer and mysql to create and modify entries in a database to store employee information. This interface is relatively simple for a user to access the database by table (view), add an entry to a table (add) or update an existing entry (update). The user is also able to delete any entry upon request as found in the update option.

## Usage

When the user starts the program they are asked what action they would like to take, add, view or update a table. Then the user is asked what table they would like to view or modify. After making this choice the user is asked a series of questions that relate to the necessary informatoin for the chosen table, i.e. an employee must have a first and last name, a role and optional manager. When the user is finished they can continue using the program and view their changes to the database.

To watch a demonstration [Click Here](https://drive.google.com/file/d/1zDrqVP_I3dA3eLcfF5bMaqoX7VF453-D/view)

## Depoloyment

This application runs with no errors and has basic functionality. Next steps would be to modify the response to the user once a modification to the database has been made. The functionality of this application can also be updated to show how many employees in each role and how much the company spends on salaries for each role. There is also no method for viewing only managers or employee's by there manager. 

## Technology

This application uses:
1. MySql to create and modify a database
1. NPM inquirer to promt the user and return user input
1. node.js to take in user input and interact with the database

## URL

[Employee Database Github Repo](https://github.com/MikeyP957/employee_database)
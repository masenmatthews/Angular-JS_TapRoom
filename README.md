# Angular Taproom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

### By: Masen Matthews and Andy Grossberg

## Live Preview
This project features a live preview through Firebase. You can view it by navigating to https://angular-taproom.firebaseapp.com/. 

## Description
An Angular application to simulate the organization of a bar's beer inventory.

## Rules

**Objectives**
Build a small Angular app that a bar can use to track their kegs.

**Patron - User Expectations**
1) As a patron, I want to see a list/menu of all available kegs.
2) As a patron, I want to have kegs prices to be color-coded for easy readability.
3) As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

**Employee - User Expectations**
1) As an employee, I want to fill out a form when I tap a new keg to add it to the list.
2) As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
3) As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
4) As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.

**Employee + Patron - Universal User Expectations**
1) As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).

## Specifications
### NOTE: Login features were not completed at the time that this project was made. There is additional functionality that hasn't been fleshed out and may be completed at a later date.

* Make ABV show up as a specific shade based on percentage
* Make prices over $8-per-pint show up as magenta while prices under $8 show up as green
* Don't show a beer if the keg is empty
* Implement beer description modal when beer is clicked on
* Add descriptions to beer
* Implement "order" button on modal so that a customer can order a beer or close
* Implement subtraction of pints when clicked and bought

## Future expansion

* Add a note to menu if a keg is low
* Implement pint subtraction from the appropriate keg when "order" button is clicked.
* Implement employee login (changes "Employee Login" to "Employee Use")
* Implement a modal for Employee Use
* Alert logged in employee when a keg is low
* Move Add Keg to employee modal
* Move Edit Keg to employee modal
* Do we need to make sure edited values don't reset? Add firebase?
* Pretty up the UI
* Refactor code as needed.

## Technologies Used

* HTML
* CSS
* TypeScript/JavaScript
* Angular

## Dependencies and plugins
**Dependencies**
* Webpack 4.0.1 (as my module bundler)
* Jasmine (for tests)
* Angular/ *

**Dev Dependencies**
* Webpack 4.0.1
* Webpack-cli 2.0.9
* Karma (for test running)
* ESLint (for linting my code, looking for dropped semi-colons and whatnot)
* Babel (to transpile my code)
* Bootstrap 4.0.0
* jQuery 3.3.1
* Popper.js 1.14.0
* tslint
* typescript

## Setup/Installation Requirements
* Download the project from the repository https://github.com/
* Install and initialize (init -y) Node (if it isn't already)
* Navigate to your root project directory
* Type "npm init" and run through the package.json file filling in details as needed
* Navigate to node_modules/.bin/ and type "jasmine init"
* Navigate back to the project's root directory
* Type "npm install dotenv-webpack --save-dev" to process environment variables (if you don't have Dotenv installed).
* Type "npm install typescript -g" (unless you already have Typescript installed)
* Type "npm install -g @angular/cli@1.6.5" (unless you already have Angular installed)
  - If you're on a Mac and get an error: Type "brew upgrade node"
* Type "npm install"
* Type "ng serve"
* Point your browser to localhost:4200

## Known Bugs and Issues

There are no known bugs at this time.

## Support and contact details

**Contact the authors at masenmatthews@gmail.com -or- andy.grossberg@gmail.com **

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2018 Andy Grossberg and Masen Matthews

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

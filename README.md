# Presentation

Dynamic/reactive to-do list application using Angular and TypeScript. This application allow users to add, edit, delete, and mark tasks as completed/uncompleted.The application keep tasks in local storage.

Use of async pipe, module-based app, NgRx store, small components, OnPush ChangeDetectorStrategy, avoidance of direct changes to Objects have been chosen to improve performances of the app.

# Init the project

If project does not run locally after cloning from git, please check the following :
- Use Node.js to install the dependencies (I used the 20.15.0, official installation process [here](https://nodejs.org/en/download/package-manager)) by running `npm install`.

- Download TypeScript (I have the latest version, 5.4.2) if it has not been installed.
 
- Angular, Angular material and [NgRx Store](https://ngrx.io/guide/store/install) version 18.0.4 have been used. Check they have been well installed.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

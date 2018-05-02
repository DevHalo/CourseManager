A small project I wanted to work on.

A native desktop application that allows the user to view course dependencies for Computer Science at York University.

Written using Electron as well as the following libraries:
- [anime.js](https://github.com/juliangarnier/anime) (For animations and to make it look cool)
- [vis.js](https://github.com/almende/vis) (For data visualization)

### Planned release features:
- Allow user to save their grades earned in a particular course, calculating GPA avg. etc
- Courses included are for Bachelors of Computer Science (Honours incl.) as well as the specialized fields

### Other features I plan on working on:
- Scrapes the YorkU course website for updated courses (Might be moved to an AWS server instead)

### Deployment
Dev:
- Run **npm start** in the repo directory.

Production:
- I use electron-packager so **electron-packager .** in the repo directory will work.

Currently tested on Windows 10. No plans for Mac or Linux yet.

# CourseManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

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

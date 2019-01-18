# QueuedApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
This is a prototype 1.0 build version of our first Team Application. Queued is designed to eventually become a full release application for customers to purchase "Placers" to save their place in lines in busy public settings, such as amusement parks, movie theaters, busy metropolitan shopping centers, etc..

When you start the app, you will be routed to the homepage. In order to continue, you will have to register for an account, otherwise the AuthGard will prevent you from viewing the other components.

Once your account has been created, you should then continue on to the "Account Info" button on the top right of the nav-bar. Using angular forms, we will then store your personal information in our database through our custom API (here is a link to that https://github.com/JGCaban/Queued-BE).

From there you can choose whether or not you would like to become a "Placer" (employee of Queued, who takes 'bounties/contracts' from "Jumpers") or a "Jumper" (the customer who will 'jump' into the line in place of the "Placer") by using the "Save Time" or "Make Money" nav options respectively.

Once you click "Save Time" (the "Jumper" option), you will be prompted to create an 'event', with all required details including the price and address of the 'event', that will populate a list of events in your area for "Placers" to select from.

As a Placer, you will click "Make Money" and be brought to said list of events in your relative area. From there you select an event, and confirm your assignment to said event. You will then be brought to the dashboard for keeping track of benchmarks per the event (ie isAssigned, isPaid, isCompleted, isExpired) where you will update the information until the event is complete and expired. After it's expired, it will be purged from the list of events.

This application is a work in progress, and meets our MVP for the 3 week sprint we completed. Future features will be implemented as they are created/updated.

//:TODO
Utilize GoogleMaps to pinpoint the location via address/lat+long
Implement payment features (stripe/paypal)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

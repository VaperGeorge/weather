# WeatherApp

This project was generated with [Angular CLI] for recruitment process in Software Mind.

Stack:
node version: 10+

"@angular/animations": "~13.3.0",
"@angular/common": "~13.3.0",
"@angular/compiler": "~13.3.0",
"@angular/core": "~13.3.0",
"@angular/forms": "~13.3.0",
"@angular/localize": "~13.3.0",
"@angular/platform-browser": "~13.3.0",
"@angular/platform-browser-dynamic": "~13.3.0",
"@angular/router": "~13.3.0"

Used libraries:

- I used the most popular Ng Bootstrap library to use already created components like: buttons, tabs, texts etc...
- all other stuff were created without any external libs

Architecture:
Here I tried to implement the simple architecture what we can improve in the future when if we will evolve oor project.
Also I created the reusable components what can be used in all places of our app.
Of course here present only 1 module, but if it will be necessary we can create separated modules for each future section and use the Lazy loading to improve the App speed
And for now here we don't have Angular SSR implement because it is not needed at this stage of the project

Styles:
I used the SCSS preprocess like default one in the project because with this one we can simply create the variables and mixins and reuse them in all our components.
Also SCSS has the cascade structure that improve reading the code and helps to avoid overriding the another parts of App.
For Responsive Web Design I used the standard Media Queries to fit the App for small screens

To start the project in dev mode, use:

# npm install
# ng serve / npm start

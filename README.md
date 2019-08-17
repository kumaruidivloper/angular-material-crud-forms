# AngularMaterialCrudForms

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Initial setup
Step1: ng new <App-name> --style=scss --routing
Step2: npm install json-server
Step3: create db.json
Step4: Create some initial Data in db.json file
Step5: Edit package.json start property ["start": "concurrently \"ng serve\" \"json-server --watch db.json\" ",]
Step6: npm install concurrently
Step7: npm run start [For run the app]

## Install Angular Marerial
Step8: npm install --save @angular/material @angular/cdk  
Step9: Add style.scss [@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';]
Step10: npm install --save @angular/animations
Step11: npm install material-icons
Step12: npm install --save hammerjs
Step13: npm install material-design-icons
Step14: add style.scss [@import '~material-design-icons/iconfont/material-icons.css';]

## Install NGXS
Step:15: npm install @ngxs/store --save  [Yarn: yarn add @ngxs/store]

## Install NGXS Logger Plugin & Devtool Plugin
Step16: npm install @ngxs/store@dev --save
Step17: npm install @ngxs/logger-plugin@dev --save [Yarn: yarn add @ngxs/logger-plugin @ngxs/devtools-plugin --dev]

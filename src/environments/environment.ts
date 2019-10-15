// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "MY_API_KEY",
    authDomain: "myangularproject-a920e.firebaseapp.com",
    databaseURL: "https://myangularproject-a920e.firebaseio.com",
    projectId: "myangularproject-a920e",
    storageBucket: "myangularproject-a920e.appspot.com",
    messagingSenderId: "566159205010",
    appId: "1:566159205010:web:fed0512b9a772d32"
  },
  googleMapsConfig : {
    apiKey: 'AIzaSyBCQpeby-wSPIV_c_R6jgVc680ZoWmyagg'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

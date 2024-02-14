//Configuration file that is used to specify various settings and options for your end-to-end (E2E) tests written with Cypress
//Config file for the Local environment

import { defineConfig } from "cypress"; //This statement imports the defineConfig function from the 'cypress' module

const { verifyDownloadTasks } = require('cy-verify-downloads'); //download CSV file

export default defineConfig({
    //This code exports the configuration object as the default export of the module
    env: {
        //Configure your credentials here, leave empty for cd, demo, preprod and prod (credentials will be taken from Azure Key Vault in pipeline)
        environment: "local",
       username: "Test1",
       password: "Sanja@123..",
       
       username1: "Test",
       
    },
    e2e: {
        //Configure your E2E tests here
        baseUrl: "https://demoqa.com",
        viewportHeight: 900, //Height of the viewport
        viewportWidth: 1440, //Width of the viewport
        video: true, //enables video recordings for your test runs
        experimentalModifyObstructiveThirdPartyCode: true, //modifies obstructive third-party code
        supportFile: "cypress/support/index.ts", //path to the support file for your tests
        specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}", //defines the spec pattern for locating test spec files
        setupNodeEvents(on, config) {
            //implement node event listeners here
            on('task', verifyDownloadTasks);
        },
    },
});

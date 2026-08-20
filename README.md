# demoQACypressTypescript

This repository holds the Cypress automation project for the [demoqa.com](https://demoqa.com/books) web application. The automated tests have been written in Cypress.io with TypeScript.

# Structure
The automation framework is built with object files, utilities files, fixture files and test spec files.

**Objects** Under the objects folder are grouped TS files that contain elements(locators) per page and their selectors. For example, all books related elements and selectors are grouped in the books.ts objects file.

**Utilities** Under utilities folder are grouped TS files that contain methods in the form of Cypress commands. For example, all commands for the books page are grouped together in the books.ts utilities file. The utilities files make use of the objects files to simplify the writing of commands.

**Fixtures** Under the fixtures folder is the test input file(input.data.json) that holds test data.

Test scripts Under the **test-suites** folder are grouped all automated test scripts.

**Support**: commands and index

The commands.ts file under Support folder holds all common commands that are used across all tests.
The e2e.ts file under Support folder includes configurations to import all of the utilities files.
The index.ts file under Support folder includes all method declarations for TypeScript.

# Configuration

cypress.config.ts file holds configuration data important for the automated tests, i.e the baseUrl, credentials.
tsconfig.json specifies how TypeScript should compile your TypeScript code into JavaScript

# Required for running tests:
Cypress, 
Node.js, 
Node Package Manager (npm)

# Steps to set up automation project:

Verify that Node.js is installed on your machine, if not then install Node.js

Install VS Code

Clone repository code from GitHub repository

In your machine locally create a folder where you want to store the automation project code

Open the folder in VS code and open the terminal

In the terminal write: git clone <cloned_repository_link>

In the terminal write: npm install

In the terminal write: npm install cypress

In the terminal write: npx cypress open

To run the tests in terminal (headless): npx cypress run

# Add a local config file:

Create a file called cypress.config.ts (it is included under gitignore)
In the file copy-paste the contents of one of the other config files
Fill in credentials and baseUrl for the environment you are writing tests for locally

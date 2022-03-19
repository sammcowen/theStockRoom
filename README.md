 # the Stock Room 

  ![badge](https://img.shields.io/badge/license-MITLicense-brightorange)
  
  ## Table of Contents
  
-[Licensing](#Licensing)

-[Description](#description)

-[Demo](#Demo)

-[Installation](#Installation)

-[Usage](#Usage)

-[Contributions](#Contributions)

-[Tests](#Tests)

-[Questions](#Questions)

  ## Licensing:
 
  This application uses MIT License.

  For more information please visit the [license description](https://choosealicense.com/licenses/mit/).

  ## Description

  the Stock Room is a backend for an e-commerce site , built using Express.js API and configured to use Sequelize npm in order to interact with a MySQL database.
  
  
  ## Demo 

[Link to Full Walkthrough Video ](https://drive.google.com/file/d/1fDAgtYt6Nce0NiRlG_VCVEVxqsepQmw3/view)

  ## Installation
  Follow these steps to properly install this application:

  User can clone the application repo into their local machine and then in the root of the project directory , enter into the terminal :
  'npm init -y' 
  'npm i sequelize mysql2 dotenv'
  make sure INSIDE PACKAGE.JSON scripts looks like the following  
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "seed": "node seeds/index.js"
  }

  ## Usage 
  Instructions for use:
 Enter mysql shell command 
 'mysql -u root -p'
 Enter your password when prompted
 Source the database with schema file
 'source db/schema.sql;'
 Make sure ecommerce_db is added 
 'show databases;'
 Use that database 
 'use ecommerce_db;'
 Leave mysql shell 
 'quit'
 
 In the terminal seed the database models
 'npm run seed'
 Start the server 
 'npm start'
 Open Insomnia App or Postman and begin testing the routes found in routes directory 
 

     

  ## Contributions
  If you would like to contribute to this project, please follow these guidelines: 

  N/A 

  ## Tests 
  Instructions for testing this application:

  Users  can test the Stock Room's API  routes by entering them into  Insomnia or Postman after seeding the database and starting the server .

  ## Questions
  Any questions please reach out to me at my [Github](https://github.com/sammcowen)
   or by my email at  sammcowen@gmail.com



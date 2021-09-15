# Football API - NodeJS

![Football](https://www.worcester.gov.uk/images/easyblog_shared/2019/Football---carousel.jpg)

## Welcome to the Football API

### My name is [Carlos Eduardo](https://www.linkedin.com/in/cnicacio/), the developer of this project. This API has been created using JavaScript language and MongoDB database. It enables you to create a new team, read all of the teams saved in the database or a single one by its MongoDB ID, update or delete information about an existing team or delete. The API also enables you to filter the teams by the name, country, league or all of the parameters.

#
## Using the API in your project

### To use it in your own project, please clone the Git repository in your personal computer using `git clone https://github.com/cnicacio/nodejs_football` into your Command Prompt or Git Bash. Make sure you have a MongoDB Atlas active account in order to connect your database to the project (you can find further information about connection with MongoDB Atlas following this [link](https://docs.mongodb.com/guides/server/drivers/)).

#
## Installing the packages

### In order to install all of the necessary packages, please type in your terminal:
```bash
npm i
```

#

## Running the project

### To run the project, after the installation of node packages, type in your terminal:
```bash
npm run dev
```

#

## Testing the API

### You can use the following tools to check whether the API is running correctly or not:

* Postman
* Insomnia
* Thunder Client (VSCode plugin)

#

## URLs

### The default testing URL is: http://localhost:3000/teams
##
### To get a team by ID, update or delete, use the URL: http://localhost:3000/teams/id (make sure you use a valid MongoDB ID)
##
### To filter teams by their name, use: http://localhost:3000/filterByName?name=nameOfTheTeam
##
### To filter teams by their country, use: http://localhost:3000/filterByCountry?country=countryOfTheTeam
##
### To filter teams by their league, use: http://localhost:3000/filterByLeague?league=leagueOfTheTeam
##
### To filter simultaneously by the name, country and league, use: http://localhost:3000/filterAll?name=nameOfTheTeam&country=countryOfTheTeam&league=leagueOfTheTeam

#

## Create and Update JSON structure

### Use the following JSON structure to create and update a team. Make sure you fulfilled all of the fields correctly:

```json
{
    "name": "",
    "foundationYear": ,
    "country": "",
    "league": "",
    "image": ""
}
```

## Thank you for your attention!
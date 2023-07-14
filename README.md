## WELCOME TO FLIGHT SERVICE

#Project Setup

-Clone the project to your local
-Execute `npm install` on the same path as of your root directory of the downloaded project
-Create a `.env` file on the  root directory and add the following environment variable
    -`PORT = 4000`
-Inside the  `src/config` folder create a new file `config.json` then add the following piece of json
```
{
    "development": {
        "username": <YOUR_DB_USERNAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "flight_database",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```

-once you have added your db config as listed above, go to the src folder from your terminal and execute 
`npx sequelize db:create`
-then execute 
`npx sequelize db:migrate`

## DB Design
-Airplane Table
    -[id,model_number,capacity]
-Flight
    -[id,departure_city_id,destination_city_id,airplane_id,departure,arrival,flight_number,airport_id]
-Airport
    -[id,name,city_id,Address]
-City
    -[id,name]


-A flight belongs to an airplane but one airplane can be used in multiple flights
-A city has multiple airports but one airport belongs to a city
-One airport can have multiple flights but a flight belongs to a single airport


## Tables

### city -> id , name , createAt , updatedAt
### Airport -> id , name , address , city_id , createdAt , UpdatedAt
    here we have a relationship that city has many airports and a airport belongs to a city
    (that is one to many relationship)

``
we have create the Airport model using this command
npx sequelize model:generate --name Airport --attributes name:String , address:String , cityId:integer
then we did the associations on the two models cities and airports and set the foreign key and then we did
npx sequelize db:migrate to bring the db to the local database
now to fill in the data in the airport we are gonna create a file in seeders using
npx sequelize seed:generate --name add-airports
next seed all the data
npx sequelize db:seed:all
above will seed every data in the seeders folder
``

now we are receving the api calls which are begin sent from the customer but it makes no sene to take in the incorrct api calls as it will eventually give error message and will waste the database callback time so what we can do is set up a middle ware so that if the incoming request breaches the rest api contract or is unwanted or harmful the we can stop or filter it in the middleware layer

/
//below is a roll base modelling

-src/
    -index.js//server
    -models/
    -controllers/
    -middlewares/
    -services/
    -utils/
    -config/
    -repository/

-test //work on this later
-static data
-temp/
/
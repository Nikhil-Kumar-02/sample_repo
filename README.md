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
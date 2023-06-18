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
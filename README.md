# donoid
I LOVE YOU, YOU LOVE ME

## Setup
Create file `config/development.json` and add the following:
    
    {
      "host": "your ip"
      "token": "your plot.ly token"
    }
    
Make sure to run `npm install`

## Running the Application
Make sure to set the environment and run the command
    
    NODE_ENV=development node app.js
    
## Production
Make sure to repeat the setup with `config/production.json`

Run the command:

   NODE_ENV=production node app.js

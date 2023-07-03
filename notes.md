# Notes on the app build
BT uses this setup as it will avoid CORS issues as all will be hosted together on the one domain name.

## What do I need to review?
### redux toolkit
* How does this all stick together?
* How are async queries handled? It used to be that you'd use Redux Saga.

### JWT
* How is the auth stuff handled?

## Next work
* review this in line with "React Application Architecture for Production"
* what do I need to do to
    * deploy to Azure Web Apps (FE and BE together)
    * deploy FE to Netlify and BE to ? (might as well be Azure Web Apps)
    * deploy FE to Azure Static Web Apps and BE to Azure Web Apps
* when using Azure Web Apps, the in built auth stuff could be removed and use the built in stuff.
* look to migrate the DB to CosmosDB
* add testing at different levels
    * FE and BE unit tests
    * API tests
    * Web tests

## Stuff to check on
* vite.config.js
    * what is the proxy setting business?
* Node JS
    * review what ```path.resolve()``` does
        * how are we getting the base folder for the app?
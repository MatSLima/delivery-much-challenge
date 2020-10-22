# Delivery Much Tech Challenge

This project aims to fulfill the requirements stipulated by the delivery much test. The project was built using Clean Architecture.

---
## Requirements

For development, you will only need Node.js 12, npm and Docker installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.19.0

    $ npm --version
    6.14.8

## Install

    $ git clone https://github.com/MatSLima/delivery-much-challenge.git
    $ cd delivery-much-challenge/
    $ npm install

## Configure env vars

Open the file with the name `sampledotenv` and save it with the name `.env`:

## Running the project (Multiple ways):
- #### Running by npm

      $ npm run start

- #### Running by Docker

      $ docker build -t delivery-much-app .
      $ docker run -p 80:3000 -d delivery-much-app

- #### Detailed run for development

      $ npm run dev

## Running the tests
- #### Unit tests
      
      $ npm run test
    
- #### E2E tests
      $ docker run -p 80:3000 -d delivery-much-app
      $ npm run test:e2e

## Accessing API    
- #### If you are running through npm
    `http://127.0.0.1:3000/recipes/?i=onion,tomato`

- #### If you are running through Docker
    `http://127.0.0.1/recipes/?i=onion,tomato`
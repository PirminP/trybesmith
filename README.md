# Project TrybeSmith
#### This project contains an API creating items and sales for a medieval product store, using TypeScript.

* Developed using Node.js, Express, Typescript, MySQL & Docker
* Using REST practices
* Applied Software Architecture: Model, Service & Controller layers

### Instructions
* To run the repository locally, clone the project and use the following commands to initialize Docker & install all dependencies:\
`Note:` The `Trybesmith.sql` file contains the queries that create and populate MySQL database.
  
  ```
  docker-compose up -d // start application with docker
  docker exec -it trybesmith bash
  npm install // install dependencies
  docker-compose down // stop application
  ```

Use the following command to run the application:
  ```
  npm start // start application
  ```

### Endpoints
#### Products

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   | Register a new product | http://localhost:3000/products |
  | `GET`   | Returns a list of all registered products | http://localhost:3000/products |

The following JSON is to be entered in the request POST:
  ```
  {
  "name": "Espada longa",
  "amount": "30 peças de ouro"
  }
  ```

#### User

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   | Register new user and returns token | http://localhost:3000/users |

The following JSON is to be entered in the request POST:
  ```
  {
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
  }
  ```

#### Orders

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   | Returns a list of all orders | http://localhost:3000/orders |


# :construction: README em construção ! :construction:

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
  | `POST`   |  ... | http://localhost:3000/ |
  | `GET`   |  ... | http://localhost:3000/ |

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
  | `POST`   | ... | http://localhost:3000/ |

The following JSON is to be entered in the request POST:
  ```
  {
  "username": "MAX",
  "classe": "swordsman",
  "level": 10,
  "password": "SavingPeople"
  }
  ```

#### Login

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   | ... | http://localhost:3000/ |

The following JSON is to be entered in the request POST:
  ```
  {
  "username": "MAX",
  "password": "SavingPeople"
  }
  ```

#### Orders

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   | ... | http://localhost:3000/ |
  | `POST`   | ... | http://localhost:3000/ |

The following JSON is to be entered in the request POST:
  ```
  {
  "productsIds": [1, 2]
  }
  ```

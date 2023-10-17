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
  npm run prestart // create data bank & migrations
  npm run seed // populate data bank
  docker-compose up -d // start application with docker
  docker attach blogs_api
  npm install // install dependencies
  docker-compose down // stop application
  ```

Use the following command to run the application:
  ```
  npm start // start application
  ou
  npm run debug // start application in development environment
  ```

### Endpoints
#### Login

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   |  Login user and returns token | http://localhost:3000/login |

The following JSON is to be entered in the request:
  ```
  {
  "email": "email-registered-db-@email.com",
  "password": "123456"
  }
  ```

#### User

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   | Create a new user and return token | http://localhost:3000/user |
  | `GET`   | Returns all non-sensitive data of users | http://localhost:3000/user |
  | `GET`   | Returns non-sensitive data of a specific user | http://localhost:3000/user/:id |

The following JSON is to be entered in the request PUT & POST:
  ```
  {
    "displayName": "User example",
    "email": "user-example@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  }
  ```

#### Categories

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `POST`   | Add new category | http://localhost:3000/categories |
  | `GET`   | Returns all registered categories | http://localhost:3000/categories |

The following JSON is to be entered in the request POST:
  ```
  {
    "name": "Typescript"
  }
  ```

#### Post

  | Method     | Functionality | URL |
  | ----------- | ----------- | ----------- |
  | `GET`   |  Returns all posts containing created user and categories| http://localhost:3000/post |
  | `GET`   | Returns specific post containing created user and categories | http://localhost:3000/post/:id |

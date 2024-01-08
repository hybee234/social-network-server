# social-network-server
Week 18 NoSQL  Challenge
<a ID="readme-top"></a>

<div align="center">

# Huber's Social Network Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge&logo=mit)](https://opensource.org/licenses/MIT)
[![Node.js Badge](https://img.shields.io/badge/Node.js-393?style=for-the-badge&logo=nodedotjs&logoColor=fff)](https://nodejs.org/en)
[![MySQL2 Badge](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Express Badge](https://img.shields.io/badge/Express-000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Badge](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose Badge](https://img.shields.io/badge/Mongoose-4EA94B?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)



Challenge 18 - No SQL (MongoDB)
</div>


## Description

Huber's social network backend is a server designed on a MongoDB platform. Its purpose is to connect the front-end social network application

High level features of the server are:

* User management
* Enabling users to express their thoughts on the platform
* Enabling other users to respond to thoughts with reactions
* Allowing users to connect and become friends with one another.

This application has been developed without starting code

## Table of contents

- <a href="#user-story">User Story</a>
- <a href="#user-acceptance-criteria">User Acceptance Criteria</a>
- [Installation](#installation)
- [Usage](#usage)
- <a href="#video-screenshots">Video and Screenshots</a>
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)
- <a href="#technologies-used">Technologies Used</a>
- [Questions](#questions)

## User Story <a ID="user-story"></a>

This server was developed with this user story in mind:


```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## User Acceptance Criteria <a ID="user-acceptance-criteria"></a>

### This server was developed with the below User acceptance criteria:

```
GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

### Additional requirements:

* Monogoose package must be used to connect to MongoDB database
* Express JS package must be used for routing


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Video and Screenshots <a ID = "video-screenshots"></a>

### Video

Watch this video to learn more about the server

<a href="https://drive.google.com/file/d/1h29d87JOBtMskNZp2F4yEOWwkikeE907/view"> Video - "How to: Huber's eCommerce Backend" </a>

### Screenshots

Screenshot of response to a GET request for all categories
<div align="center">

![Screenshot of the response to GET all categories](./assets/images/screenshot1.png)
</div>

Screenshot of response to a GET request for all products
<div align="center">

![Screenshot of the response to GET all products](./assets/images/screenshot2.png)
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

1. Clone or fork the repository
2. Run the below in console install necessary packages
    * Express 
    * Mongoose
    
```
npm i
```
3. Once installed you can start the server with the below command in the CLI:
```
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

As this is purely a backend social-network server, utilise an API development platform like <a href="https://insomnia.rest/">Insomnia </a> to transmit API requests

Available APIs are as followeds

| Users                   | API                                      | 
| ----------------------- | ---------------------------------------- | 
| GET all users:          | http://localhost:3001/api/users/         | 
| GET one user:           | http://localhost:3001/api/users/:userId  | 
| POST one user:          | http://localhost:3001/api/users          | 
| PUT one user by ID:     | http://localhost:3001/api/users/:userId  | 
| DELETE one user by ID:  | http://localhost:3001/api/users/:userId  | 

Category POST/PUT sample JSON body:
```
{
	"username" : "test1",
	"email" : "a@b.com"
}
```
** GET ONE user will also obtain detail information about thoughts and reactions
** DELETE one user will also delete thoughts authored by that user

*** UP TO HERE ***

| Thoughts                  | API                                    | 
| ------------------------- | -------------------------------------- | 
| GET all Product:          | http://localhost:3001/api/products/    | 
| GET one Product by ID:    | http://localhost:3001/api/products/:id | 
| POST one Product          | http://localhost:3001/api/products/    |  
| PUT one Product by ID:    | http://localhost:3001/api/products/:id |
| DELETE one Product by ID: | http://localhost:3001/api/products/:id |

Product POST/PUT sample JSON body:
 ```
 {
	"product_name": "basketball",
	"price" : 30.00,
	"stock" : 3,
	"tagIds" : ["1", "2", "3", "4"]
 }
 ```

| Tags                  |                                    |
| --------------------- | ---------------------------------- |
| GET all Tag:          | http://localhost:3001/api/tags/    |
| GET one Tag by ID:    | http://localhost:3001/api/tags/:id |
| POST one Tag          | http://localhost:3001/api/tags/    |
| PUT one Tag by ID:    | http://localhost:3001/api/tags/:id |
| DELETE one Tag by ID: | http://localhost:3001/api/tags/:id |

Tag POST/PUT sample JSON body:
```
{
"tag_name" : "ball"
}
```


The below SQL can be used to pull table data across the 4 tables used in this server:
```
--All values from all tables
SELECT
p.id as product_id,
p.product_name,
p.price,
p.stock, 
t.id as tag_id,
t.tag_name,
pt.id as producttag_id,
c.id as category_id,
c.category_name
FROM product p
LEFT JOIN product_tag pt on pt.product_id = p.id
LEFT JOIN tag t on t.id = pt.tag_id
LEFT JOIN category c ON p.category_id = c.id;
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
    
## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This application can be used in conjunction with licensing covered in  <b>MIT Lcensee</b>

(Click on the badge for details of the license)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

To contribute to this application, please reach out to me via my contact details below

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

Automated Test scripts have not been developed for this application

## Schema and Seeding
* Validate that running the schema.sql file via mysql2 does not result in errors
* Validate that running the index.js file within the seed folder does nto result in seed errors

### Categories

* Validate that GET all Category request returns all Categories and associated Products
* Validate that GET one Category by ID returns a single Category and associated Products if the category ID exists
* Validate that GET one Category by ID returns an error if the category ID does not exist
* Validate that POST a Category adds a new record to the category table
* Validate that PUT (Updating) a Category by ID  is reflected in the database for the same ID
* Validate that PUT (Updating) a Category by ID  returns an error if the category ID does not exist
* Validate that DELETING a Category by ID removes the category from the database
* Validate that DELETING a Category by ID  returns an error if the ID does not exist

### Products

* Validate that GET all Product request returns all Products and associated Category and Tags
* Validate that GET one Product by ID returns a single Products and associated Category and Tags if the Product ID exists
* Validate that GET one Product by ID returns an error if the Product ID does not exist
* Validate that POST a Product adds a new record to the product table and corresponding record entries on the ProducTag table for each tag associated 
* Validate that PUT (Updating) a Product by ID  is reflected in the database for the same ID (including updating associated tags)
* Validate that PUT (Updating) a Product by ID  returns an error if the Product ID does not exist
* Validate that DELETING a Product by ID removes the Product from the database along with tag associations on the ProductTag table
* Validate that DELETING a Product by ID  returns an error if the ID does not exist

### Tags

* Validate that GET all Tag request returns all Tags and associated Products
* Validate that GET one Tag by ID returns a single Tag and associated Products if the Tag ID exists
* Validate that GET one Tag by ID returns an error if the Tag ID does not exist
* Validate that POST a Tag adds a new record to the product table 
* Validate that PUT (Updating) a Tag by ID  is reflected in the database for the same ID
* Validate that PUT (Updating) a Tag by ID  returns an error if the Product ID does not exist
* Validate that DELETING a Tag by ID removes the Tag from the database along with tag associations on the ProductTag table
* Validate that DELETING a Tag by ID  returns an error if the ID does not exist

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies used <a ID="technologies-used"></a>

* Javascript
* Node.js
* Node Package Manager (NPM)
* MySQL2
* Express
* Sequelize
* dotenv

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Questions

- Visit my GitHub page: <a href="https://github.com/hybee234"> hybee234 </a>
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


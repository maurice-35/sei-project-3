# sei-project-3

https://tails-whiskers.herokuapp.com/


Project 3 Readme - Tails & Whiskers 

Click 👉🏽 🦮🐈

- Table of Contents


- Overview
- Brief & Timeframe
- Technologies
- Installing
- How-To-Use Tails & Whiskers
- Approach
    - Other Models
    - Pet’s profile
    - Division of Work
    - Schema
    - Controllers and Route
    - Front End
- Final Thoughts & Project Wrap
- Wins
- Challenges / Bugs
- Project's Future
- Key Learnings
- License & copyright

#  Overview
Inspired by the `Butler & butter`  website, Tails & Whiskers is an e-commerce website that enables pet lovers (cat & dog) to navigate and choose the type of food appropriate for their pet. 
This is the third project in the General Assembly Software Engineering Immersive course.
Working with three other colleagues (Arjun, Ineta  & Aya), we had 10 days to develop a full stack MERN application using an Express API to serve data from a Mongo database, and a separate front end built with React.


#  Brief & Timeframe

- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React.
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
- Have a visually impressive design.
- Be deployed online so it's publicly accessible.
- Timeframe: 8 days.


#  Technologies
## Languages
- JavaScript (ES6)
- HTML
- SASS
- Bootstrap
## Frameworks & Libraries
- React
- React-Router-Dom
- React-Icons
- React-Select
- Styled-components
- Node.js

## Dependencies & Components
- Axios
- Bcrypt
- Cloudinary
- Express
- JsonWebToken
- Nodemon
- Mongoose
- MongoDB

#  Install
- Set-up the development folder on GitHub.
- Create branches of the development folder.
- Install dependencies in the root of the project yarn.
- Install dependencies in the client folder cd client && yarn.
- Start the database mongod --dbpath ~/data/db.


#  How to use Tails & Whiskers
- Landing page where users can register or login. 
- Users can also add products on pet profiles.


- Gif
 
 
- Home page / Index page
- Pics


#  Approach
General approach: We started by brainstorming on the type of project to build. We took each person’s idea of what can potentially be done, discussing in detail and voting on each element of the idea (from how challenging it would be to build the front and back end, to populating the database and the overall app). We selected the project idea with the highest score. We used agile methodology, and set up a Trello board to keep track of our work. We also had stand-ups every morning and communicated on Slack since we were working remotely. We had pair-coding sessions on Zoom and shared live screens. We found all these to be effective means of communication.
To better understand how our app would work at the fundamental level, we had to set out our models and functionality:
We structured the various models using Miro.com as shown below:

![The DB](https://user-images.githubusercontent.com/84001897/131374923-3c77381d-c545-4734-bcf6-8de8b86866ee.png)

![Flow-chart](https://user-images.githubusercontent.com/84001897/131375281-5849474e-2219-4783-a479-511009c681ec.png)


Using Figma.com, we sketched the wireframe.

![figma-project3](https://user-images.githubusercontent.com/84001897/131375939-1de9eff8-b7cd-48c9-85eb-419c8571289f.png)

We also used Trello Board to plan our work and daily activities as shown below:


![Trello P3-1](https://user-images.githubusercontent.com/84001897/131376082-5fbb813e-27ee-4b2a-a5db-a3f595dc457e.png)


![Trello P3-2](https://user-images.githubusercontent.com/84001897/131376134-71d37215-4610-407f-b49c-96d51e392af2.png)


 
By day 2, we were working on the back-end creating models, controllers and routes.
We worked together by pair-coding, overcoming any blockers we had and trouble-shooting to solve them out as effectively as possible.

##  Other Models

###  Pet’s Profile

        const [petData, setPetData] = useState({
            name: '',
            image: '',
            gender: '',
            age: '',
            breed: '',
          })



###  Division of work

 
We had every awareness that the workload would be bigger than anything that we had built before. 

Most of the time we worked as a team in the front and back ends, pair-coding and resolving errors. 
I pair-coded with Arjun when writing the ‘BasketModal’ and the ‘MainModal’.

We decided later to split the front end into sections. We worked in pairs and in my pair with Arjun, we had individual responsibilities. This way, we were able to work effectively given the timeframe. We were also able to resolve individual hurdles at any point in the process. 
I was mainly responsible for the cat products, register and login pages. 

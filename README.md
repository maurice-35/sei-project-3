# SEI-Project-3: Tails & Whiskers
 

 [Click](#click)👉🏽 [<b>🦮🐈](https://tails-whiskers.herokuapp.com/)

# Table of Contents


- [Overview](#overview)
- [Brief](#brief) 
- [Technologies](#technologies)
   - [Languages](#languages)
   - [Frameworks and Libraries](#frameworks-and-libraries)
   - [Dependencies and Components](#dependencies-and-components)
- [Install](#install)
- [How-To-Use Tails and Whiskers](#how-to-use-tails-and-whiskers)
- [Approach](#approach)
    - [Other Models](#other-models)
      - [Pet's Profile](#pets-profile)
    - [Division of Work](#division-of-work)
    - [Schema](#schema)
    - [Controllers and Routes](#controllers-and-routes)
    - [The Front End](#the-front-end)
- [Wins](#wins)
- [Challenges](#challenges)
- [Future Features](#future-features)
- [Key Learnings](#key-learnings)
- [License & copyright](#license-and-copyright)

#  Overview
Inspired by the `Butler & butter`  website, Tails & Whiskers is an e-commerce website that enables pet lovers (cat & dog) to navigate and choose the type of food appropriate for their pet. 
This is the third project in the General Assembly Software Engineering Immersive course.
Working with three other colleagues ([Arjun](https://github.com/arjun-doel), [Ineta](https://github.com/inetabliu)  & [Aya](https://github.com/Ayamallahx)), we had 10 days to develop a full stack MERN application using an Express API to serve data from a Mongo database, and a separate front end built with React.


#  Brief 

- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React.
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
- Have a visually impressive design.
- Be deployed online so it's publicly accessible.



#  Technologies
## Languages
- [JavaScript (ES6)](https://www.javascript.com/)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [SASS](https://sass-lang.com/documentation/syntax)
- [Bootstrap](https://react-bootstrap.github.io/)
## Frameworks and Libraries
- [React](https://reactjs.org/docs/getting-started.html)
- [React-Router-Dom](https://reactrouter.com/web/example/modal-gallery)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [React-Select](https://react-slick.neostack.com/)
- [Node.js](https://nodejs.org/en/)

## Dependencies and Components
- [Axios](https://github.com/axios/axios)
- [Bcrypt](https://pypi.org/project/bcrypt/)
- [Cloudinary](https://cloudinary.com/documentation)
- [Express](https://www.react.express/)
- [JsonWebToken](https://jwt.io/introduction)
- [Nodemon](https://nodemon.io/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/)

#  Install
- Set-up the development folder on GitHub.
- Create branches of the development folder.
- Install dependencies in the root of the project `yarn`.
- Install dependencies in the client folder **cd client && yarn**.
- Start the database `mongod --dbpath ~/data/db`.


#  How to use Tails and Whiskers
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
I pair-coded with Arjun when writing the `BasketModal` and the `MainModal`.

We decided later to split the front end into sections. We worked in pairs and in my pair with Arjun, we had individual responsibilities. This way, we were able to work effectively given the timeframe. We were also able to resolve individual hurdles at any point in the process. 
I was mainly responsible for the cat products, register and login pages. 

###  Schemas

We built a user interaction in a one to many relationship with comments and product schemas.

        // commentSchema
        const commentSchema = new mongoose.Schema({
          text: { type: String, required: true, maxlength: 300 },
          rating: { type: Number, required: true, min: 1, max: 5 },
          owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
        }, {
          timestamps: true // Create timestamps automatically on creation and update
        })


        // productSchema
        const productSchema = new mongoose.Schema({
          name: { type: String, required: true, unique: true },
          shortDescription: { type: String, required: true, maxlength: 500 },
          description: { type: String, required: true, maxlength: 1000 },
          ingredient: [{ type: String, required: true }],
          image: { type: String, required: true },
          typeAnimal: { type: String, required: true },
          storage: { type: String, required: true },
          typeProduct: { type: String, required: true },
          age: { type: String, required: true },
          price: { type: Number, required: true },
          onDisplay: { type: Boolean },
          comments: [commentSchema],
          owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
        })

###  Controllers and Routes

We created the controllers and the router, using Insomnia to make API requests, testing each controller as it was created.
Here are the routes our app is using, along with notes about access information:


        router.route('/products')
          .get(getAllProducts)
          .post(secureRoute, addProduct)
          
        //Delete function set to use params for Frond end. Can always change to send Json ID.
        router.route('/products/:id')
          .delete(secureRoute, deleteProduct)
          .put(secureRoute, updateProduct)

        router.route('/basket')
          .post(secureRoute, addItemToBasket)
          .delete(secureRoute, removeItemFromBasket)

        router.route('/products/:id/comments')
          .post(secureRoute, addComment)

        router.route('/products/:id/comments/:commentId')
          .delete(secureRoute, deleteComment)

        router.route('/register')
          .post(registerUser)

        router.route('/login')
          .post(loginUser)

        router.route('/profile')
          .get(secureRoute, getUserProfile)
          .post(secureRoute, addPet)
          .delete(secureRoute, removePet)

        router.route('/profile/pets')
          .get(secureRoute, getPetProfile)

        router.route('/profile/basket')
          .get(secureRoute, getBasket)
        router.route('/profile/basket/:id')
          .delete(secureRoute, deleteBasket)


Below are the controllers which handle requests made to the server.
- `auth.js` registers new users and login.
- `products.js` deals with product and comment requests.
- `users.js` deals with user requests.


The code below is from the `products file` in the `controllers folder`.


        // INDEX ROUTE
        export const getAllProducts = async (_req, res) => {
          const products = await Product.find()
          return res.status(200).json(products)
        }
        //Add product
        export const addProduct = async (req, res) => {
          try {
            const productWithOwner = { ...req.body, owner: req.currentUser._id }
            const addProduct = await Product.create(productWithOwner)
            return res.status(201).json(addProduct)

          } catch (err) {
            console.log(err)
            return res.status(422).json(err)
          }
        }

        //Remove Product
        export const deleteProduct = async (req, res) => {
          try {
            const { id } = req.params
            const productToDelete = await Product.findById(id)
            if (!productToDelete) throw new Error()
            if (!productToDelete.owner.equals(req.currentUser._id)) throw new Error('Unauthorized')
            await productToDelete.remove()
            return res.sendStatus(204)
          } catch (err) {
            console.log(err)
            return res.status(404).json({ message: err.message })
          }
        }

        //Update Product 

        export const updateProduct = async (req, res) => {
          try {
            const { id } = req.params
            const productToUpdate = await Product.findByIdAndUpdate(id, req.body, { new: true })
            if (!productToUpdate) throw new Error()
            return res.status(200).json(productToUpdate)
          } catch (err) {
            console.log(err)
            return res.status(404).json({ message: 'Not found' })
          }
        }

We implemented a `secure route` once it was established that the API requests were working correctly. This would check if a user had the correct credentials before fulfilling the request. 

#  The Front-End
To begin the front-end, we created a React app based on a custom template, scaffolding to the back end using the command `npx create_react_app client --template cra-template-ga-ldn-projects`.
This followed by creating the `setupProxy.js` file to have a matching local host address to the back end, and updated the back end `index.js` to route all routes via `'/api'`:


        // add router


           app.use('/api', router)


Since we are using nodemon to help with automatically restarting the node application when file changes in the directory are detected, we created a new file `nodemon.json` in the root of my project and set it to ignore client directory changes:


        {
         "ignore": [ "client" ]
        }


I created the cat page and grabbed all the cats products, meals and treats using filters.


         //* Grabbing all cat products
                const catsProducts = data.filter(cat => cat.typeAnimal.toLowerCase() === 'cat')
                 //* Filter to get treats and save to new array
                const catTreat = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'treat')
                //* Filter to get meals and save to new array
                const catMeal = catsProducts.filter(food => food.typeProduct.toLowerCase() === 'meal')
               
               
               
#  Wins

- Teamwork: Most of the time we worked by pair-coding and screen-sharing. As a result, we learnt a lot from each other and worked together towards resolving any issues we ran into. We got on very well, had a good workflow and managed to reach our MVP in time.  
- Basket setting: We struggled with setting-up the basket on the back-end but were finally pleased to have it functioning normally.
               

#  Challenges
The major challenge was during deployment. As we had a separate folder for the back and front ends, it was not possible to deploy in this state. We had to refactor the back-end folder. This was done by removing the main folder and making each sub-folder completely independent.


#  Future Features

This final output does not cover all  intentions and plan for the project. As a result, I intend to make some improvements on this project particularly on:
- Adding the comment section.
- Replacing the images that are not appearing on the site because they have been taken off from cloudinary.


#  Key learnings
- Building our own RESTFul framework from the back-end and moving to the front-end was a great experience. 
- Working with MongoDB and Express on a Full-Stack project was a positive challenge which has helped to increase my understanding of these frameworks.
- The transition from back-end to front-end was not immediate. I had the impression that I had forgotten everything I knew on the front-end but gradually, as I switched from back-end to front-end to check on the models and permissions, I regained full knowledge of what we had to do on the front-end.

#  Contribution to the project
We welcome any contribution or suggestions to improve on this project.

#  License and copyright
This project was built for educational purposes only. All the information on the website may not be accurate (including some names, contact details and pet information). No copyright infringement is intended and all content is used under educational license.

##### © Arjun,  Aya, Ineta and Maurice (AAIM)	


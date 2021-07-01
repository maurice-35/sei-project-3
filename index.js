import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'

const app = express()

const startServer = async () => {
  try {
    // connecting dbURI
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🌟 Database has connected successfully')

    // log request
    app.use((req, _res, next) => {
      console.log(`🐶🐱 Incoming request: METHOD: ${req.method}, URL: ${req.url}`)
      next()
    })

    // convert into json
    app.use(express.json())

    // add router
    app.use(router)

    // event listener
    app.listen(port, () => console.log(`🐶🐱 Express is up and running on ${port}`))

  } catch (err) {
    console.log(err)
    console.log('S.O.S 💀')
  }
}

startServer()



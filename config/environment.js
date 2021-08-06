import dotenv from 'dotenv'
dotenv.config()

export const port = process.env.PORT || 9000
export const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/sei-project-3'

export const secret = process.env.SECRET || 'aaim'
import express from 'express'
import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()

app.use(cors())
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ limit: "16kb", extended: true }))
app.use(express.static("public"))
app.use(cookieParser())


// import routes 
import signinroutes from './routes/signin.routes.js'
import signuproutes from './routes/signup.routes.js'
import tokenverifyrouter from './routes/tokenverify.routes.js'



// declartions of routes

app.use("/api/v1", signuproutes)
app.use("/api/v2", signinroutes)
app.use("/api/v3", tokenverifyrouter)


export { app }
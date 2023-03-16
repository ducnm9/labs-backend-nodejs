const express = require('express')
const { default: helmet } = require('helmet')
const morgan = require('morgan')
const compression = require('compression')
const app = express()

// Init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())

// Init db

// Init routers
app.get('/', (req, res, next) => {
    const strE = 'Welcome test'
    return res.status(200).json({
        message: 'Welcome test',
        metadata: strE.repeat(10000)
    })
})

// Handling error

module.exports = app
const express = require('express')
const dotenv = require('dotenv')


dotenv.config()
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection', client => {
    console.log(`connection received`)

    client.on('new_message', (chat) => {
        client.emit('broadcast', chat)
        // console.log(`new message: ${msg}`)
        // client.emit(`resent same message: ${msg}`)
    })
    
})

app.get('/', (req, res) => {
    res.send("Server is running...")
})


const port = process.env.PORT
server.listen(port, () => {
    console.log(`server running at ${port}...`)
})
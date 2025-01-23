const express = require('express')
const connectDB = require('./config/database')
const bookRoutes = require('./routes/bookRoutes')

const app = express()

const port = process.env.PORT || 3000



app.get('/', (req, res) => {    
    res.send('Hello World!')
});

app.use(express.json());
app.use('/books', bookRoutes);





connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})

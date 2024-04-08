require('dotenv').config()
const app = require('./app')

// define port 
const PORT = 3031
app.listen(PORT, ()=>{
     console.log(`Server have been start with port${PORT}`)
})

// const unexpectedErrorHandler = (error) => {
//      console.log(error)
// };


import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})


// // server.js
// import app from './app.js';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config({ path: './config.env' });

// const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not set

// app.listen(PORT, () => {
//     console.log(`SERVER HAS STARTED AT PORT ${PORT}`);
// });

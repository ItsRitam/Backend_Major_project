import dotenv from "dotenv"
import connectDB from "./db/db.js"


dotenv.config({
    path : "./.env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
console.log("MongoDB Connection Failed !",err);
})
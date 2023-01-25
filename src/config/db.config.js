import mongoose from 'mongoose';


const connectDB =  async ()=>{

    try{
        mongoose.set("strictQuery", true);
        const conn = await mongoose.connect(process.env.MONGODB_KEY,{
          
            useNewUrlParser: true,
        })
        console.log(`db connected successfully! `)
    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1)
    }

}

export default connectDB
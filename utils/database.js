import mongoose from "mongoose";


let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is connect')
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnected= true

        console.log("MonoDB Connect")
    } catch (error) {
        console.log("not working")
    }
}
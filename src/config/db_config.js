import mongoose from "mongoose"

const connectMongodb = async () =>{
    try {
        await mongoose.connect("mongodb+srv://zaeemmian77:hIH187YdLttou3fY@cluster0.tqm4y.mongodb.net/me-chat-db?retryWrites=true&w=majority&appName=Cluster0")
        console.log("db Connected Successfully")
    } catch (error) {
        console.log("Error while connecting with db", error.message)
    }
}

export default connectMongodb;
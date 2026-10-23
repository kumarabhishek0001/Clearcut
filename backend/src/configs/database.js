import mongoose from 'mongoose'
import chalk from 'chalk'

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log(chalk.bgMagentaBright("SUCCESSFULLY CONNECTED TO DB"))
    }
    catch(err){
        console.log(chalk.bgRed("CONNECTION FAILED"))
        console.log(err)
        process.exit()
    }
}

export default connectDB
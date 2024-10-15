import mongoose from 'mongoose'

const dbCOnnect = async () => {
    try {
        const response = await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`)
        console.log("DB Connected SuccessFully");
    } catch (error) {
        throw new error
    }
}

export { dbCOnnect }

import mongoose from "mongoose"

mongoose.connect(process.env.DATABASE_URL)

let db = mongoose.connection

export default db

const { MongoClient, ServerApiVersion } = require('mongodb') 
require('dotenv').config();

const user = process.env.USER_MONGO_DB;
const pass = process.env.PASSWORD_MONGO_DB;
const host = process.env.HOST_MONGO_DB;
const port = process.env.PORT_MONGO_DB;
const db = process.env.DB_MONGO_DB;
const URI = `mongodb://${user}:${pass}@${host}:${port}`;


const Logs = async(collection,consulta) => {
    const mongoClient = new MongoClient(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
    try {
        await mongoClient.connect();
        const dbmongo = mongoClient.db(db);
        const collec = await dbmongo.collection(collection)
        const result = await collec.aggregate(consulta).toArray();
        return result;
    } catch(e) {
        console.error(e);
        return []
    } finally {
        await mongoClient.close();
    }
}

module.exports = {Logs};

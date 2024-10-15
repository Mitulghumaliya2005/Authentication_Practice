import 'dotenv/config'
import { dbCOnnect } from './db/index.js'
import { app } from './app.js'

dbCOnnect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Applications Listen On PORT ${process.env.PORT}`);
    })
}).catch((error) => {
    throw new error
})


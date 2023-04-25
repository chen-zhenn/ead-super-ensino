import dotenv from 'dotenv'
import { app } from './config/app'

dotenv.config()
const port = process.env.PORT || 8000

app.listen(port,() => {
    console.log(`Server is running at http://localhost:${port}`)
})
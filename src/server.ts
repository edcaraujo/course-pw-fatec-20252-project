import app from "./app";
import { AppDataSource } from "./datasource";
import dotenv from "dotenv";
dotenv.config();

try {
    AppDataSource.initialize();
    console.log('Database connection established sucessfully!');
} catch(err){
    console.error('Error connection to database:', err);
    process.exit(1);
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API is ready to use!`);
});
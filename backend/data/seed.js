import dotenv from 'dotenv'
import { db } from '../config/db.js'

dotenv.config();

await db();

async function seedDB(){
    try {
        
    } catch (error) {
        
    }
};

function clearDB(){
    console.log('desde clearDB');
}

if(process.argv[2] === '--import'){
    seedDB()
} else {
    clearDB()
};
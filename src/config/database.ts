import mongoose, { ConnectOptions } from 'mongoose';


// Database connection URL
const dbURL = 'mongodb://localhost:27017/your-database-name';

// Connect to the database
const connectDatabase = async (): Promise<void> => {
    const connectionOptions: ConnectOptions = {};
    try {
        await mongoose.connect('mongodb://localhost:27017/building-cost-api', connectionOptions);
        console.log('Connected to the database');
      } catch (error: any) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1);
      }
};

export default connectDatabase;
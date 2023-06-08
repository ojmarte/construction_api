import mongoose, { ConnectOptions } from 'mongoose';

// Connect to the database
const connectDatabase = async (): Promise<void> => {
    const connectionOptions: ConnectOptions = {};
    try {
      const dbURL = process.env.DB_URL || 'mongodb://localhost:27017/mongodb-1';
      await mongoose.connect(dbURL, connectionOptions);
        console.log('Connected to the database');
    } catch (error: any) {
        console.error('Failed to connect to the database:', error.message);
        process.exit(1);
    }
};

export default connectDatabase;

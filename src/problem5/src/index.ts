import express, { Application } from "express";
import Routes from './routes';
import dotenv from 'dotenv';
import sequelize from './db';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    this.syncDatabase();
    new Routes(app);
  }

  private config(app: Application): void {
    dotenv.config();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

  private async syncDatabase(): Promise<void> {
    try {
      await sequelize.sync();
      console.log('Database synced successfully.');
    } catch (error) {
      console.error('Unable to sync database:', error);
    }
  }
}

import "reflect-metadata";
import { DataSource } from "typeorm";
import { Weather } from "./entities/weather";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [Weather],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    //place to work with database
  })
  .catch((err) => console.log(err));

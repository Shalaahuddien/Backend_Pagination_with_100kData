import { Sequelize } from "sequelize";

const db = new Sequelize('paginate_db','postgres','1234567',{
    host: "localhost",
    dialect: "postgres"
});

export default db;
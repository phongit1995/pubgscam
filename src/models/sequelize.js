require("dotenv").config();
import  Sequelize  from 'sequelize';
const configDB={
    dialect:'sqlite',
    storage: 'pubg.db',
    dialectOptions: {connectTimeout: 1000},
    define:{
        freezeTableName: true,
        charset:"utf8mb4"
    },
    sync:{force: false}
}
  if(process.env.DEV =="dev"){
      configDB.logging=true ;
}
const sequelize = new Sequelize(configDB);
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
export default sequelize ;
import db from './sequelize';
import  Sequelize  from 'sequelize';
export const accountFields = {
    id:'id',
    username:'username',
    password:'password',
    ip:'ip',
    userarge:'userarge'
}
export const accountDB = db.define('account',{
    [accountFields.id]:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    [accountFields.username]:{
        type:Sequelize.TEXT
    },
    [accountFields.password]:{
        type:Sequelize.TEXT
    },
    [accountFields.ip]:{
        type:Sequelize.TEXT
    },
    [accountFields.userarge]:{
        type:Sequelize.TEXT
    },

})
accountDB.sync({force:false})
const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const user=sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    phone:{
        type:Sequelize.INTEGER,
        allowNull:false,
        unique:true
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
})

module.exports=user;
require('dotenv').config()

module.exports = {
    dialect: "postgres",
    host:process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT,
    username:process.env.DATABASE_USERNAME,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
    define:{
        timestamps:true,
        underscored:true,
        underscoredAll:true,
        'createdAt': 'created_at',
        "updateAt": 'update_at'
    },
    dialectOptions:{
        timezone:"America/Sao_paulo"
    },
    timezone:"America/Sao_paulo"
}
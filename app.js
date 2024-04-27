const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());
app.use(express.json());


const sequelize=require('./util/database');

const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));

const adminRouter=require('./routes/admin');

app.use(adminRouter);

sequelize.sync()
.then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});



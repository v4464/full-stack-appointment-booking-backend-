const Users=require('../models/booking');

const path=require('path');

exports.adduser=(req,res,next)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const email=req.body.email;

   const data= Users.create({
        name:name,
        phone:phone,
        email:email
    })
   
    .then(result=>{
        console.log('created');
        res.status(201).json({ newUserDetail: result })
    })
    .catch(err=>console.log(err));
}

exports.postAddUser=(req,res,next)=>{
    res.sendFile(path.join(__dirname ,'../', 'views','booking.html'));
}

exports.showAllUsers=(req,res,next)=>{
    Users.findAll()
    .then(users=>{
        res.status(200).json({ allUsers: users });
    })
    .catch(err=>console.log(err));
}

exports.deleteUser=(req,res,next)=>{
    const userId=req.params.id;
    Users.findByPk(userId)
    .then(product=>{
        return product.destroy();
    })
    .then(result=>{
        res.sendStatus(200);
    })
    .catch(err=>{
        console.log(err);
    })
}
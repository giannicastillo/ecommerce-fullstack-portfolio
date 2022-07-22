const Ecom = require('../models/ecom.model');

module.exports.findAllEcoms = (req,res) =>{
    Ecom.find()
        .then(allEcoms =>{
            res.json({results:allEcoms})
        })
        .catch(err =>{res.json({message:'Something went wrong... try again!', error:err})});
    }


module.exports.getOneEcom = (req,res) =>{
    console.log(res.data)
    Ecom.findOne({_id:req.params.id})
    .then(foundPet => {
        res.json({results:foundPet})
    })
    .catch(err =>{res.json({message:'Something went wrong... try again!', error:err})});
}

module.exports.createEcom = (req,res) =>{
    Ecom.create(req.body)
    .then(newEcomCreated =>{
        res.json({results:newEcomCreated})
    })
    .catch(err =>{res.json({message:'Something went wrong... try again!', error:err})});
}

module.exports.updateOneEcom = (req,res) =>{
    Ecom.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators:true}
    )
    .then(updateEcom =>{
        res.json({results:updateEcom})
    })
    .catch(err =>{res.json({message:'Something went wrong... try again!', error:err})});
}

module.exports.deleteOneEcom = (req,res) =>{
    Ecom.deleteOne({_id: req.params.id})
    .then(deleteEcom =>{
        res.json({results:deleteEcom})
    })
    .catch(err =>{res.json({message:'Something went wrong... try again!', error:err})});
}


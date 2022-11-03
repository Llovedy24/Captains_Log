const { update } = require('../models/log')
const Fruit = require('../models/fruit')

const dataController = {
    //Index,
    index(req, res, next){
        Log.find({}, (err, foundLogs) => {
            if(err){
               res.status(400).send({
                msg: err.message
               }) 
            } else {
                res.locals.data.logs = foundLogs
                next()
            }
        })
    },
    //Destroy
    destroy(req, res, next){
        Log.findByIdAndDelete(req.params.id, (err, deletedLog) => {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = deletedLog
                next()
            }
        })
    },
    //Update
    update(req, res, next){
        req.body.readyToLog = req.body.readyToLog === 'on'? true : false;
        Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.log = updatedLog
                next()
            }
        })
    },
    //Create
    create(req, res, next){
        req.body.readyToEat = req.body.readyToEat === 'on'? true : false;
        Logs.create(req.body, (err, createdLogs)=> {
            if(err){
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.Logs = createdLogs
                next()
            }
        })
    },
    //Edit
    //Show
    show(req, res, next){
        Logs.findById(req.params.id,(err, foundLogs) => {
            if(err){
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find the Captaians Log with that ID'
                })
            } else {
                res.locals.data.log = foundLogs
                next()
            }
        })
    }
}

module.exports = dataController
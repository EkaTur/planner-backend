const PlanModel = require('./PlanModel');

module.exports.getPlan = async(req, res) => { 
    const { userId } = req.query;
    const myPlan = await PlanModel.find({ userId }); 
    res.send(myPlan);
}

module.exports.savePlans = async(req, res) => {
    const { title, userId } = req.body;
    PlanModel.create({ title, userId })
    .then((data) => {console.log('Plan added')
        res.send(data)
    })
}

module.exports.deletePlan = async(req, res) => {
    const { _id, userId } = req.body;
    PlanModel.findByIdAndDelete( {_id, userId })
    .then(() => res.send('Your plan deleted'))
}

module.exports.editPlan = async(req, res) => {
    const { _id, title, userId } = req.body;
    PlanModel.findByIdAndUpdate( { _id, userId }, { title })
    .then(() => res.send('Your plan edited'))
}
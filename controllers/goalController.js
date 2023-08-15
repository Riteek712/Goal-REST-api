const Goal = require('../modal/goalModal')
const mongodb = require('mongodb')

// @desc    GET goals
// @route    GET /api/goals
// @access    private
const getGoals = async (req,res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
}

// @desc      POST goals
// @route     POST /api/goals
// @access    private
const setGoals = async(req,res) =>{
    if(!req.body.text){
        console.log(`set start`)
        res.sendStatus(400).json({message: "please provide the required info."})
        // throw new Error('Please add a text field.')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    console.log(req.body)
    res.status(200).json(goal)
}
// @desc    UPDATE goals
// @route    UPDATE /api/goals/id
// @access    private
const updateGoals = async (req,res) =>{
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400).json({message: `Goal Id given is missing.`})
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body, {
        new: true,
    })
    // console.log(req.body)
    res.status(200).json(updatedGoal)
}
// @desc    DELETE goals
// @route    DELETE /api/goals/id
// @access    private
const deleteGoals = async (req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400).json({message: "No such entry to delete."})
    }
    // await goal.remove()

    const result = await Goal.deleteOne({_id: req.params.id})
    console.log(result)


    res.status(200).json({id: req.params.id})
}
module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}

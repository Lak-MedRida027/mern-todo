const TodoModule = require("../Schema/Schema")

exports.getTaskes = async function(req,res){
    try{
        const tasks = await TodoModule.find()
        return res.json(tasks)
    }catch(err){
        return res.status(404).send({message: err.stack})
    }
}

exports.getOnetaske = async function(req,res){
    try{
        const taskO = await TodoModule.findById(req.params.id)
        return res.json(taskO.task)
    }catch(err){
        return res.status(404).send({message: err.stack})
    }
}

exports.creatTask = async function(req,res){
    try{
        const task = req.body.task;
        await TodoModule.create({task : task})

        return res.json({"status": 200 , message: "Task Added"})
    }catch(err){
        return res.status(404).send({message: err.stack})
    }
}

exports.updateTask = async function(req,res){
    try{
        let id = req.params.id
        const task = await TodoModule.findById(id)
        
        {
            task.done === true
            ?
            await TodoModule.findByIdAndUpdate(id,{done:false})
            :
            await TodoModule.findByIdAndUpdate(id,{done:true})
        }
        
        return res.json({"status":200 , message:"task Updated"})
    }catch(err){
        return res.status(404).send({message: err.stack})
    }
}

exports.editTask = async function(req,res){
    try{
        await TodoModule.findByIdAndUpdate(req.params.id , {task: req.body.task ,done: false})

        return res.json({"status":200 , message:"task Edited"})
    }catch(err){
        return res.status(404).send({message: err.stack})
    }
}

exports.deleteTask = async function(req,res){
    try{
        let id = req.params.id

        await TodoModule.findByIdAndDelete(id)
        return res.json({"status":200 , message:"task Deleted"})

    }catch(err){
        return res.status(404).send({message: err.stack})
    }
}
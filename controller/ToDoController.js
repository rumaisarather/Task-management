const ToDoModel =require("../models/ToDoModel");

module.exports.getToDos = async (req,res)=>{
    const toDos = await ToDoModel.find();
    res.send(toDos);
};


module.exports.saveToDo = (req,res)=>{
    const {toDo} = req.body;
    
    ToDoModel.create({toDo})
    .then((data) =>{
        console.log("saved successfuly..");
        res.status(201).send(data);
    })
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req,res)=>{
    const {id} = req.params;
    const {toDo} =req.body;
    
    ToDoModel.findByIdAndUpdate(id, {toDo})
    .then(() =>{
        res.send("updated successfuly");
    })
    .catch((err) => {
        console.log(err);
    res.send({error:err, msg: "something went wrong!"});
});
};

module.exports.deleteToDo = (req,res)=>{
    const {id} = req.params;
    
    ToDoModel.findByIdAndDelete(id)
    .then(() =>{
        res.send("deleted successfuly..");
    })
    .catch((err) => {
        console.log(err);
    res.send({error:err, msg: "something went wrong!"});
});
};
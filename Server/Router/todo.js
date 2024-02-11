const express = require("express")
const todoCOntrolles = require("../Controlles/todo")

const router = express.Router()

router.get("/api/get" , todoCOntrolles.getTaskes)
router.get("/api/getOne/:id" , todoCOntrolles.getOnetaske)
router.post("/api/creat" , todoCOntrolles.creatTask)
router.put("/api/update/:id" , todoCOntrolles.updateTask)
router.put("/api/edit/:id" , todoCOntrolles.editTask)
router.delete("/api/delete/:id" , todoCOntrolles.deleteTask)

module.exports = router
const express = require('express')
const router = express.Router()

const { listTasks } = require('../controllers/tasks.controller')

router.get("/", listTasks)

module.exports = router;
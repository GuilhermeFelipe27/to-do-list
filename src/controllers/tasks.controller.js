const tasks = require('../data/mock')


const listTasks = async (req,res) => {
    // const name = tasks.name;
    // const status = tasks.status;

    res.status(200).json(tasks)
}

module.exports = { listTasks }
const port = 8080
 
const express = require('express')
const cors = require('cors')
const spawn = require('child_process');



require('dotenv').config()



const app = express()
app.use(cors())
app.get('/', (req, res) => {

    const pythonProcess = spawn.spawn('python',['mailfetch.py']);
    pythonProcess.stdout.on('data', (data) => {
        res.send(data.toString())
    }
    );
    pythonProcess.stderr.on('data', (data) => {
        res.send(data.toString())
    });
    pythonProcess.on('close', (code) => {
        console.log(`child process close all stdio with code ${code}`);
    });
})


app.listen(port, () => console.log(`Server running on port ${port}`))
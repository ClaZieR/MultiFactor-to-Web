const port = 8080
 
const express = require('express')
const cors = require('cors')
const spawn = require('child_process');
const axios = require('axios');




require('dotenv').config()




const app = express()
app.use(cors())
app.get('/', (req, res) => {

    const apikey = req.query.apikey
    const pythonProcess = spawn.spawn('python',['sendreq.py',apikey]);
    pythonProcess.stdout.on('data', (data) => {
       const staus = data.toString().split('"status"')[1].split('"')[1]
        console.log(staus)
       if(staus === "1"){

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
        }
        else{
            res.send("Invalid API Key")
        }
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
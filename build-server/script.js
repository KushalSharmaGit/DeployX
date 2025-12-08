const { exec } = require('child_process')
const path = require('path')
const fs = require('fs-extra')


require("dotenv").config();


// To run the docker image this is the command to use
// docker run -e GIT_REPOSITORY__URL="https://github.com/KushalSharmaGit/React-Bolierplate" -e PROJECT_ID=1 build-server
// To build the image
// docker build -t build-server .
const PROJECT_ID = process.env.PROJECT_ID

async function init() {
    console.log('api-key', process.env.CLOUDINARY_API_KEY)
    console.log('Executing script.js')
    console.log('PROJECT_ID', PROJECT_ID)
    const outDirPath = path.join(__dirname, 'output')

    const p = exec(`cd ${outDirPath} && npm install && npm run build`)
                                                                                
    p.stdout.on('data', function (data) {
        console.log(data.toString())
    })

    p.stdout.on('error', function (data) {
        console.log('Error', data.toString())
    })

    p.on('close', async function () {
        console.log('Build Complete')
        const distFolderPath = path.join(__dirname, 'output', 'dist')
        const distFolderContents = fs.readdirSync(distFolderPath, { recursive: true })
        

        console.log('Website folders and files done');
       
    })
}

init()
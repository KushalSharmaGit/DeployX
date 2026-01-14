const { exec } = require('child_process')
const path = require('path')
const fs = require('fs-extra')
const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3');
const mime = require('mime-types')

require("dotenv").config();


// To run the docker image this is the command to use
// docker run -e GIT_REPOSITORY__URL="https://github.com/KushalSharmaGit/React-Bolierplate" -e PROJECT_ID=1 build-server
// To build the image
// docker build -t build-server .
const PROJECT_ID = process.env.PROJECT_ID

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {  
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

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
        
        for (const content of distFolderContents) {
            const contentPath = path.join(distFolderPath, content);

            if (fs.lstatSync(contentPath).isDirectory()) continue;

            const fileStream = fs.createReadStream(contentPath);
            const { size } = fs.statSync(contentPath);

            const command = new PutObjectCommand({
                Bucket: process.env.AWS_S3_BUCKET_NAME,
                Key: `__outputs/${PROJECT_ID}/${content}`, // relative, clean path
                Body: fileStream,
                ContentLength: size,  
                ContentType: mime.lookup(contentPath) || "application/octet-stream"
            });

            await s3Client.send(command);
            console.log("Uploaded", content);
        }
        console.log('Upload Complete');
       
    })
}

init()
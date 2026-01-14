const asyncHandler = require("express-async-handler");
const Docker = require('dockerode');
const docker = new Docker({ host: '127.0.0.1', port: 2375 })
const { v4: uuidv4 } = require('uuid');

const buildweb =asyncHandler ( async (req , res) =>{

  try {
    const { githubUrl } = req.body;

    if (!githubUrl) {
      return res.status(400).json({ 
        error: 'githubUrl is required' 
      });
    }

    const image = "build-server:latest";
    const projectId = uuidv4();
    const containerName = `builder-${projectId}-${Date.now()}`;

    console.log(`Starting build for project ${projectId} from ${githubUrl}`);

    // Create container with GitHub URL and ID as environment variables
    const container = await docker.createContainer({
      Image: image,
      name: containerName,
      Env: [
        `GIT_REPOSITORY__URL=${githubUrl}`,
        `PROJECT_ID=${projectId}`
      ],
      HostConfig: {
        AutoRemove: false,
        // Optional: Mount volume for build output
        Binds: [
          `/tmp/builds/${projectId}:/app/build`
        ]
      }
    });

    // Start the container
    await container.start();
    console.log(`Container ${containerName} started`);

    // Wait for container to finish
    const data = await container.wait();
    
    // Get logs
    const logs = await container.logs({
      stdout: true,
      stderr: true
    });

    const logsString = logs.toString('utf8');
    console.log('Build logs:', logsString);

    // Check exit code
    if (data.StatusCode === 0) {
        console.log(`Build succeeded for project ${projectId}.localhost:8000`);
      res.json({
        success: true,
        projectId,
        containerId: container.id,
        containerName,
        message: 'Build completed successfully',
        logs: logsString,
        exitCode: data.StatusCode
      });
    } else {
      res.status(500).json({
        success: false,
        projectId,
        containerId: container.id,
        message: 'Build failed',
        logs: logsString,
        exitCode: data.StatusCode
      });
    }

    // Optional: Remove container after build
     await container.remove();

  } catch (err) {
    console.error('Build error:', err);
    res.status(500).json({ 
      error: err.message,
      details: err.stack 
    });
  }
});

module.exports = { buildweb };
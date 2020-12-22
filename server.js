// Import AWS SDK clients
const { S3Client, PutObjectCommand, CreateBucketCommand } = require("@aws-sdk/client-s3");

// Set AWS Region
const REGION = "us-east-2";

// Set bucket parameters
const bucketName = "nodejs-sdk-test";
const bucketParams = { Bucket: bucketName, Region: REGION };

// Create name for uploaded object key
const keyName = "hello_world.txt";
const objectParams = { Bucket: bucketName, Key: keyName, Body: "Hello World!" };

// Create an S3 client service object
const s3 = new S3Client({region: REGION});

const run = async () => {
    // Create an S3 Bucket
    try {
        const data = await s3.send(new CreateBucketCommand(bucketParams));
        console.log("Success! Bucket created.");
    } catch(err) {
        console.log("Error ", err);
    }
    // Send object to the bucket
    try {
        const data = await s3.send(new PutObjectCommand(objectParams));
        console.log(`Successfully uploaded data to ${bucketName}/${keyName}`);
    } catch(err) {
        console.log("Error ", err);
    }
};

// Run the upload
run();

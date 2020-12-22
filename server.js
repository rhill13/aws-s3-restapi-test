// Import AWS SDK clients
const AWS = require("aws-sdk");

// Set AWS Region
const REGION = "us-east-2";

// Set bucket name
const bucketName = "nodejs-sdk-test1234";

// Create name for uploaded object key
const keyName = "hello_world.txt";
const objectParams = { Bucket: bucketName, Key: keyName, Body: "Hello World!" };

// Create an S3 client service object
const s3 = new AWS.S3({ apiVersion: "2006-03-01"});

const run = async () => {
    // Get List of Buckets
    // await s3.listBuckets({}, (err, data) => {
    //     console.log(data);
    // });

    // Create a Bucket
    // const bucketParams = { Bucket: bucketName, CreateBucketConfiguration: { LocationConstraint: "us-east-2" } };
    // s3.createBucket(bucketParams, (err, data) => {
    //     if (err) console.log(err);
    //     else console.log(data);
    // });

    // Send object to the bucket
    s3.upload(objectParams, (err, data) => {
        console.log(err, data);
    });
    
};

// Run the upload
run();
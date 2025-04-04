import { S3Client } from "@aws-sdk/client-s3";
import uniqid from 'uniqid';
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function POST(req){
    const formData = await req.formData();

    if(formData.has('file')){
        const file = formData.get('file');

        const s3Client = new S3Client({
            region:'ap-south-1',
            credentials:{
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
            }
        })

        const randomId = uniqid();
        const ext = file.name.split('.').pop();
        const newFileName = randomId + '.' + ext;
        const bucketName = process.env.BUCKET_NAME

        const chunks = [];
        for await (const chunk of file.stream()){
            chunks.push(chunk);
        }
        await s3Client.send(new PutObjectCommand({
            Bucket: bucketName,
            Key: newFileName,
            ACL:'public-read',
            Body:Buffer.concat(chunks),
            ContentType: file.type
        }))

        const link = `https://${bucketName}.s3.ap-south-1.amazonaws.com/${newFileName}`

        return Response.json(link)
    }
}
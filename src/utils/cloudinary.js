import {v2 as cloudinary} from "cloudinary"
import fs from "fs" // file system library for handling file operations. This jelps us unlinkt the file
//  after uploading it to cloudinary, this technique of uploading a file and then deleting it from 
// the server is common to save storage space and maintain security. Used in a lot of production level code

cloudinary.config({
    cloud_ame:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const uploadOnCloudinary = async(localFilePath) =>{
    try{
        if(!localFilePath) return null // File does not exist in the local path
        //Upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilepath,{resource_type:"auto"})
      //FIle has been uploaded successfully
      console.log("File is uploaded on cloudinary successfully",response.url);
      return response;

    }
    catch(error){
        fs.unlinkSync(localFilePath)// remove the locally saved temporary file as the upload operation got failed
        return null


    }
}
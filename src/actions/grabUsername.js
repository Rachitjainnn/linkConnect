'use server'
import { Page } from "@/models/Page";
import mongoose from "mongoose";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

async function connectDB() {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    
    return mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  
  export default async function grabUsername(formData) {
    
    await connectDB();
    
    const username = formData.get('username');
    
    try {
      const existingPageDoc = await Page.findOne({ uri: username });
      
      if (existingPageDoc) {
        return false;
      } else {
        const session = await getServerSession(authOptions);
        
        if (!session?.user?.email) {
          throw new Error("User not authenticated");
        }
        
        const doc = await Page.create({
          uri: username,
          owner: session.user.email
        });
        
        return JSON.parse(JSON.stringify(doc));
      }
    } catch (error) {
      console.error("Error in grabUsername:", error);
      throw new Error("Failed to process username");
    }
  }
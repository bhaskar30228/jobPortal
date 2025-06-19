import {WebHook} from 'svix'
import User from '../models/user.js'

// API controller to manage clerk functions with database

export const clerkWebHook = async (req, res) => { 
    try{
        const whook=new WebHook(process.env.CLERK_WEBHOOK_SECRET)
        await whook.verify(JSON.stringify(req.body),{
            "swix-id": req.headers['svix-id'],
            "svix-timestamp": req.headers['svix-timestamp'],
            "svix-signature": req.headers['svix-signature']
        } )
        const {data,type} = req.body;

        // switch case to handle different types of events
        switch (type) {
            case 'user.created':
                // Handle user created event
                const newUser = {
                    _id: data.id,
                    name: data.firstName + ' ' + data.lastName,
                    email: data.emailAddresses[0].emailAddress,
                    image: data.imageUrl
                };
                await newUser.create(newUser);
                res.JSON({})
                break;
            case 'user.updated':
                // Handle user updated event
                 const userData = {
                   
                    name: data.firstName + ' ' + data.lastName,
                    email: data.emailAddresses[0].emailAddress,
                    image: data.imageUrl
                };
                await User.findByIdAndUpdate(data.id, userData);
                res.JSON({})
                break;
            case 'user.deleted':
                // Handle user deleted event
                await User.findByIdAndDelete(data.id);
                res.JSON({})
                break;
            default:
               break;
        }
    }catch (error) {
        console.log(error.message);
        res.JSON({success:false, message:"Webhooks error"})
        
    }

}



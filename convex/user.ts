import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
    args : {
        name: v.string(),
        email : v.string(),
        imageUrl : v.string(),
    },
    handler: async(ctx , args) => {
        // Check if user already exists
        const user = await ctx.db.query('UserTable')
        .filter((q)=>q.eq(q.field('email'),args.email))
        .collect();

        if(user?.length==0){
            const UserData = {
                name: args.name,
                email : args.email,
                imageUrl : args.imageUrl,
            };

            // If not then create new user
            const result = await ctx.db.insert('UserTable', UserData)
            return UserData;
        }
        // If yes then return user
        return user[0]; 
    }
}) 
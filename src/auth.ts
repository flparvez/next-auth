import NextAuth, { AuthError, CredentialsSignin } from "next-auth"
 import GoogleProvider from 'next-auth/providers/google'
 import CredentialsProvider from 'next-auth/providers/credentials'
import { User } from "./models/User.models";
import {compare} from 'bcryptjs'
import { connectDb } from "./lib/DbConnect";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
    CredentialsProvider({
        name:"Credentials",
        credentials:{
            email:{
                label:"Email",
                type:"email", 
            },
            password:{
                label:"Password",
                type:"password"
            },
        },
        authorize: async (credentials)=>{
            const email = credentials.email as string  | undefined;
            const password = credentials.password as string | undefined;

            if (!email || !password)    throw new CredentialsSignin("Please enter email and password");
               // connection with db
              await  connectDb();
const user = await User.findOne({email}).select("+password");
         
if (!user) throw new CredentialsSignin({cause:"Invalid email or password"});


if (!user.password) throw new CredentialsSignin({cause:"Invalid  password"});

const isMatch =await compare(password,user.password)
if (!isMatch) throw new CredentialsSignin({cause:"wrong password"});

return { name: user.name, email: user.email ,id:user._id };
// return user;

        }
    })
  ],
  pages:{
    signIn: "/login",
  },
  callbacks:{
    signIn: async({user,account}) =>{
      
        if (account?.provider === 'google') {
          try {
            const {email,name,image,id} =user;

             await connectDb();
             const alreadyUser = await User.findOne({email});
             if(!alreadyUser) await User.create({email,name,image,googleId:id})

              return true;

          } catch (err) {
            throw new AuthError("Error while creating user",)
          }
        }
        return false;
    
      
    },
  }
})
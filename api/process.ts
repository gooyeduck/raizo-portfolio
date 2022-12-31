import * as dotenv from 'dotenv'
dotenv.config()

export interface Auth{
username:string,
password:string,
}

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEYS:string = process.env.API_KEY as string;
export const API_SECRETS:string = process.env.API_SECRET as string;

export const auth:Auth = {
  username : API_KEYS,
  password : API_SECRETS, 
};
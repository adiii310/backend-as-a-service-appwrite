import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  Account;

  constructor() {
    this.Client = this.Client.setEndpoint(config.appWriteUrl).setProject(
      config.appWriteUrl
    );
    this.Account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.Account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({email,password})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login(){
    try {
        return await this.Account.createEmailSession({ email,password })     
    } catch (error) {
        throw error;
    }
  }

  async getCurrentUser(){
    try {
       return await this.Account.get();
    } catch (error) {
        throw error;
    }
    return null;
  }

  async logout(){
    try {
       return await this.Account.deleteSessions();
    } catch (error) {
        
    }
  }

}

const authService = new AuthService();

export default authService;

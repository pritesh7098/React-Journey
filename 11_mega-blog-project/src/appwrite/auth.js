// this is an appwrite auth snippet for this project
// and you can use it for another appwite projects as u know it is neceesary to have auth system in all projects so yeah it is useful
// do smart work rather than repeating things
// also this is a future proof code as you can switch between diff BASS like firebase, supabase, own backend services etc with minimal changes

import config from "./../conf/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  acount;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectID); // in this we directly import cred from config file rather than path directories.

    this.acount = new Account(this.client);
  }

  // you can use promise or async await

  async createAccount({ email, password, name }) {
    // acount creation can be fail sometimes so we have to give msg for the same with try and catch

    try {
      const userAccount = await this.acount.create(
        ID.unique(),
        email,
        password,
        name
      );

      // conditionals to check the user has account or not ?

      if (userAccount) {
        // call another method

        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // for login
  async login(email, password) {
    try {
      await this.acount.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // for current user

  async getCurrentUser() {
    try {
      return await this.acount.get();
    } catch (error) {
      throw error;
    }

    return null;
  }

  // for logout session

  async logout() {
    try {
      await this.acount.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;

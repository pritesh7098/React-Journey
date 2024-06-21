import config from "./../conf/config";

import { Client, Account, Databases, Storage, Query, ID } from "appwrite";

export class Service {
  Client = new Client();
  databases;
  bucket;

  // constructor to initialize the appwrite client and collections/databases
  constructor() {
    this.Client.setEndpoint(config.appwriteUrl).setProject(
      config.appwriteProjectID
    );
    // for db
    this.databases = new Databases(this.Client);
    // for storage/bucket
    this.bucket = new Storage(this.Client);
  }

  // creating a new post in the appwrite database collection
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // updating a post in the appwrite database collection

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // deleting a post in the appwrite database collection

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );

      return true;
    } catch (error) {
      throw error;

      return false;
    }
  }

  // getting a post by slug from the appwrite database collection

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );

      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  // getting all posts from the appwrite database collection

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  // uploading a file to the appwrite storage bucket

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  // deleting a file from the appwrite storage bucket

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(config.appwriteBucketID, fileId);
    } catch (error) {
      throw error;
      return false;
    }
  }

  // preview a file from the appwrite storage bucket

  getfilePreview(fileId) {
    this.bucket.getFilePreview(config.appwriteBucketID, fileId);
  }
}

const service = new Service();

export default service;

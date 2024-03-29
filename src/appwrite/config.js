import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  bucket;
  database;
  constructor() {
    this.client
      .setEndpoint(conf.appwrite_Url)
      .setProject(conf.appwrite_ProjectId);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
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
      console.log("Creating Post Error: ", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Updating Post Error: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Delete Post Error: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        slug
      );
    } catch (error) {
      console.log("Get post Error: ", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwrite_databaseId,
        conf.appwrite_collectionId,
        queries
      );
    } catch (error) {
      console.log("Get Posts Error: ", error);
      return false;
    }
  }

  //File Upload Services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwrite_bucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Upload File Error :", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      return await this.bucket.deleteFile(conf.appwrite_bucketId, fileId);
    } catch (error) {
      console.log("Delete File Error: ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwrite_bucketId, fileId);
  }
}

const service = new Service();
export default service;

import config from "../config/config";
import {Client,ID, Databases ,Storage, Query} from "appwrite";

export class Service{
    Client = new Client();
    databases;
    storage;

    constructor() {
        this.Client = this.Client.setEndpoint(config.appWriteUrl).setProject(config.appWriteProjectId)
        this.databases = new Databases(this.Client);
        this.storage = new Storage(this.Client);

    }
    
    async createPost({title,content,featuredImage,status,userId,slug}){
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async updatePost (slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error;
        }
    }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("APPWRITE ERROR OCCOUSE IN:: deletePost");
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseId,
                config.appWriteCollectionId,
                slug
            )
        } catch (error) {
            throw error;
        }
    }

    async getPosts(queries = [Query.equal("status",["active"])]){
        config.appWriteDatabaseId,
        config.appWriteCollectionId,
        queries
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                config.appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("error coccured in appwrite:: deleteFile ",error)
            return false
        }
    }

    async previewFile(fileId){
        try {
            return await this.storage.getFilePreview(
                config.appWriteBucketId,
                fileId
            )
        } catch (error) {
            throw error;
        }
    }
}

const service = new Service();

export default service;
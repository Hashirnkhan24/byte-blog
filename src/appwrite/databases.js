import { Client, Databases, Query, Storage } from "appwrite";
import conf from "../config/conf";

export class DatabaseService {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, {title, content, status, featuredImage}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
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

    async deletePost(slug) {
        // eslint-disable-next-line no-useless-catch
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            throw error;
            // eslint-disable-next-line no-unreachable
            return false
        }
    }

    async getPost(slug) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            throw error;
            // eslint-disable-next-line no-unreachable
            return false;
        }
    }

    async getActivePosts(queries = [Query.equal("status", "active")]) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            throw error;
        }
    }
}

const service = new DatabaseService();
export default service;
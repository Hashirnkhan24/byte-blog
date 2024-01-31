import { Client, ID, Storage } from "appwrite";
import conf from "../config/conf";

export class BucketService {
    client = new Client();
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.bucket = new Storage(this.client)
    }

    async fileUpload(file) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
            // eslint-disable-next-line no-unreachable
            return false;
        }
    }

    async deleteFile(fileId) {
        // eslint-disable-next-line no-useless-catch
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            throw error;
            // eslint-disable-next-line no-unreachable
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const bucketService = new BucketService();
export default bucketService;
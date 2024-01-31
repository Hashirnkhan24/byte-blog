import { Client, Account, ID } from 'appwrite'
import conf from '../config/conf.js'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService
import { request } from '@playwright/test';
import { ENV } from '../config/env';
import tokenManager from '../utils/tokenManager';


class APIClient {

    static async get(endpoint) {

        const apiContext = await request.newContext();

        // First API Call
        let response = await apiContext.get(
            `${ENV.baseURL}${endpoint}`,
            {
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                }
            }
        );

        // Handle 401
        if (response.status() === 401) {

            console.log("401 Received - Regenerating Token");

            // Generate New Token
            const newToken = await tokenManager.getToken()

            // Update ENV Token
            process.env.TOKEN = newToken;

            // Retry API
            response = await apiContext.get(
                `${ENV.baseURL}${endpoint}`,
                {
                    headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                }
                }
            );
        }

        return response;
    }

    //POST Method Call
    static async post(endpoint, body) {

        const apiContext = await request.newContext();

       
        let response = await apiContext.post(
            `${ENV.baseURL}${endpoint}`,
            {
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                },
                data: body
            }
        );

        
if (response.status() === 401) {

            console.log("401 Received - Regenerating Token");
            const newToken = await tokenManager.getToken()
            process.env.TOKEN = newToken;


            response = await apiContext.post(
                `${ENV.baseURL}${endpoint}`,
                {
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                },
                data: body
            }
            );
        }

        return response;
    }

    static async put(endpoint, body) {

        const apiContext = await request.newContext();

        const requestHeaders = {
            ...headers,
            Authorization: `Bearer ${process.env.TOKEN}`
        };

        let response = await apiContext.put(
            `${ENV.baseURL}${endpoint}`,
            {
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                },
                data: body
            }
        );

        if (response.status() === 401) {

            console.log("401 Received - Regenerating Token");
            const newToken = await tokenManager.getToken()
            process.env.TOKEN = newToken;


            response = await apiContext.put(
                `${ENV.baseURL}${endpoint}`,
                {
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                },
                data: body
            }
            );
        }

        return response;
    }

    
    //Delete Method Call
    static async delete(endpoint) {

        const apiContext = await request.newContext();

        let response = await apiContext.delete(
            `${ENV.baseURL}${endpoint}`,
            {
               headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                }
            }
        );

        if (response.status() === 401) {

            console.log("401 Received - Regenerating Token");

             const newToken = await tokenManager.getToken()

            process.env.TOKEN = newToken;

            response = await apiContext.delete(
                `${ENV.baseURL}${endpoint}`,
                {
                   headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${process.env.TOKEN}`
                }
                }
            );
        }

        return response;
    }
}

export { APIClient };
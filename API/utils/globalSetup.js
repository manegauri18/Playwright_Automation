import { request } from '@playwright/test';
import { ENV } from '../config/env';
import { ENDPOINTS } from '../config/endpoints';

console.log("GLOBAL SETUP FILE EXECUTING");

async function globalSetup() {

    const apiContext = await request.newContext();

    const response = await apiContext.post(
        `${ENV.baseURL}${ENDPOINTS.LOGIN}`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                email: "student@example.com",
                password: "secret123"
            }
        }
    );

    const responseBody = await response.json();
   
    // Store token globally
    process.env.TOKEN = responseBody.token;

    //process.env.TOKEN = 'dsdsds';
    console.log("Global Token:", process.env.TOKEN);
}

export default globalSetup;
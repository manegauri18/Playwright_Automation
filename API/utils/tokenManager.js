import { request } from '@playwright/test';
import { ENV } from '../config/env';
import { ENDPOINTS } from '../config/endpoints';
import { TOKEN_CREDENTIALS } from '../payloads/loginCredentials';

async function getToken() {

    const apiContext = await request.newContext();

    const response = await apiContext.post(
         `${ENV.baseURL}${ENDPOINTS.LOGIN}`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: TOKEN_CREDENTIALS
        }
    );

    const responseBody = await response.json();

    return responseBody.token;
}

export default { getToken };
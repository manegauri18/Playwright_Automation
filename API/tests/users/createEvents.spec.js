import { test, expect } from '@playwright/test';
import { APIClient } from '../../utils/apiClient';
import { createEvents } from '../../payloads/createEvents';
import { ENDPOINTS } from '../../config/endpoints';

test('Create Product API', async () => {

    
    const response = await APIClient.post(
        ENDPOINTS.CREATE_PRODUCT,
        createEvents
    );

  
    const responseBody = await response.json();
    
    console.log(responseBody); 

    //Status Code 
   expect(response.status()).toBe(201);
   
   //Verify Keys Exist
   expect(responseBody.data).toHaveProperty('id');
   expect(responseBody.data).toHaveProperty('title');


   //Verify Data Types
   expect(typeof responseBody.data.id).toBe('number');
   expect(typeof responseBody.data.title).toBe('string');
 

  
});
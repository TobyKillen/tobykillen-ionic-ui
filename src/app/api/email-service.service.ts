import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor() { }


  async sendEmail(sender_email: string, message: string) {
    const emailData = {
      sender_email: sender_email,
      message: message
    };
    
    const response = await fetch('https://66hqzqmb46.execute-api.eu-west-1.amazonaws.com/production/api/v1/email/sendemail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    return response.json();
  }

 
  
}

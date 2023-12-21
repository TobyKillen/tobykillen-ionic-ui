import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { EmailServiceService } from 'src/app/api/email-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public ToastController: ToastController, public EmailServiceService: EmailServiceService, public Router: Router) { }

  contactForm: any;

  ngOnInit() {
    // Create a new FormGroup instance
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      contact: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
    
  }

  onSubmit() {
    
    const message_payload = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      contact: this.contactForm.value.contact,
      message: this.contactForm.value.message
    };

    this.contactForm.reset();

    this.EmailServiceService.sendEmail(this.contactForm.value.email, JSON.stringify(message_payload)).then((response) => {
      if (response.success) {
        this.ToastController.create({
          message: 'Message sent successfully.',
          duration: 2000,
          color: 'success',
          position: 'top'
        }).then((toast) => {
          toast.present();
          this.Router.navigateByUrl('/thank-you');

        });
      } else {
        this.ToastController.create({
          message: 'Message failed to send.',
          duration: 2000,
          color: 'danger',
          position: 'top'
        }).then((toast) => {
          toast.present();
        });
      }
    });


 
    
    
  
  }

}

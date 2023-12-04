import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(public ToastController: ToastController) { }

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
    console.log(this.contactForm.value);
    this.ToastController.create({
      message: 'Your message has been sent!',
      duration: 2000,
      color: 'success',
      position: 'top',
    }).then((toast) => {
      toast.present();
      this.contactForm.reset();

    });
  }

}

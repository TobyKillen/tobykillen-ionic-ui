import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

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
  }

}

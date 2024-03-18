import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '@services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm!: FormGroup;

  constructor(private contactService: ContactService) { 
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.contactForm.value);
    
    // this.contactService.sendEmail({
    //   name: 'John Doe', // 'John Doe' is a placeholder, replace it with 'form.value.name'
    //   email: 'john@test.com', // 
    //   subject: 'Contact Form Submission',
    //   message: 'This is a test message' // 'This is a test message' is a placeholder, replace it with 'form.value.message'
    // }).subscribe(response => {
    //   console.log(response);
    // });`
    // let sound = new Audio();
    // sound.src = "assets/sounds/sent.ogg";
    // sound.load();
    // sound.play();
  }

  getControl(name: string) : FormControl{
    return this.contactForm.get(name) as FormControl;
  }
}

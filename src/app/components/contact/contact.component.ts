import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToasterComponent } from '@components/toaster/toaster.component';
import { ContactService } from '@services/contact.service';
import { ToasterService } from '@services/toaster.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  mailSentSoundEffect = new Audio();
  contactForm!: FormGroup;
  sending: boolean = false;

  constructor(private contactService: ContactService, private toasterService: ToasterService) { 
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required])
    })

    this.mailSentSoundEffect.src = "assets/sounds/sent.ogg";
    this.mailSentSoundEffect.load();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sending = true;
    setTimeout(() => {
    }, 1000);
    this.contactService.sendEmail(this.contactForm.value).subscribe(response => {
      this.sending = false;
      this.mailSentSoundEffect.play();
      this.contactForm.reset();
      this.toasterService.show('Message sent successfully!', 'success');
    });
  }

  getControl(name: string) : FormControl{
    return this.contactForm.get(name) as FormControl;
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: Router) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      address: ['',Validators.required],
      phone: ['',Validators.required]
    });
  }

  onSubmit() {
      this.http.post("http://localhost:8090/contact/create",this.myForm.value).subscribe((res: any)=>{
        console.log(res);
      });
      alert("Our team will get back to you!");
      this.route.navigate(["Home"]);
  }
}

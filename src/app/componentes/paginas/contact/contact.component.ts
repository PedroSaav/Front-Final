import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(){}
 
   formulario = new FormGroup({
    name : new FormControl('', Validators.required),
    email: new FormControl('', Validators.email)

   });

   ngOnInit(): void {
   
  }
}
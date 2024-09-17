import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {

resaForm: FormGroup; //NB: formGroup require ReactiveFormsModule in app.module.ts
message : string ="";

constructor(private _formBuilder: FormBuilder) {
  this.resaForm = this._formBuilder.group({
    firstName: ['prenom', Validators.required],
    lastName: ['Nom', [Validators.required,Validators.pattern('[A-Z].+')]],
    telephone: ['0605040302', [Validators.required , Validators.minLength(10)]],
    email: ['prenom.Nom@xyz.com', [Validators.required, Validators.email]],
    dateTime: [ /*'2024-09-01T14:30' */ ((new Date()).toISOString()).substring(0,16), [Validators.required , Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}.*')]]
    });
}

onReservation(){
  this.message="résa effectuée=" + JSON.stringify(this.resaForm.value);
}


}

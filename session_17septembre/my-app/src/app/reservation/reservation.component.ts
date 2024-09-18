import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {

  myForm!: FormGroup;
  message="";

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      firstName: ['',[ Validators.required , Validators.minLength(2)]],
      lastName: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dateEtHeure: ['', [Validators.required]]
    });
  }

  onReservation(){
    this.message="donnees saisies=" + JSON.stringify(this.myForm.value);
  }
}

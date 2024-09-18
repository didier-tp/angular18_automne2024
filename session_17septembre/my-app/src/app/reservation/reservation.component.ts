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
      telephone: ['', [Validators.required , Validators.pattern('^[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      dateEtHeure:  [ /*'2024-09-01T14:30' */ ((new Date()).toISOString()).substring(0,16), 
        [Validators.required , 
          Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}.*')]
        ]
    });
  }

  onReservation(){
    this.message="donnees saisies=" + JSON.stringify(this.myForm.value);
  }
}

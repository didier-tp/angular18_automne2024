import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Reservation } from '../common/data/reservation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent implements OnInit {

  myForm!: FormGroup;
  reservation = new Reservation();
  message="";

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      firstName: ['jean',[ Validators.required , Validators.minLength(2)]],
      lastName: ['Bon', Validators.required],
      telephone: ['0102030405', [Validators.required , Validators.pattern('^[0-9]{10}')]],
      email: ['jean.Bon@ici.fr', [Validators.required, Validators.email]],
      dateEtHeure:  [ /*'2024-09-01T14:30' */ ((new Date()).toISOString()).substring(0,16), 
        [Validators.required , 
          Validators.pattern('[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}.*')]
        ]
    });
  }

  onReservation(){
    this.reservation=JSON.parse(JSON.stringify(this.myForm.value))
    this.message="donnees saisies=" + JSON.stringify(this.reservation);
  }
}

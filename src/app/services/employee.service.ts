import { Employee } from './../interfaces/employee';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private db: AngularFirestore
  ) { }
  saveEmployeeHours(employee: Employee): any {
    this.db.collection('employee-hours').add(employee);
}
}

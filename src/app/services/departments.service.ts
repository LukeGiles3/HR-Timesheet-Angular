import { Department } from './../interfaces/department';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departments: Department[] = [
    {id: '1', name: 'Customer Success'},
    {id: '2', name: 'Sales'},
    {id: '3', name: 'Finance'},
  ];

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hr-timesheet';
  constructor(public db: AngularFirestore) {

  }
  ngOnInit(): void {
    this.db.doc('companies/x1lSKDj8zKgg2HovwZhi').valueChanges();
  }
}

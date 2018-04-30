import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

// import {FlashComponent } from '../flash/flash.component'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
    // items: Observable<any[]>;
    items: any; selectedItem:any;
    company: string;
    email: string;
    firstname : string;
    lastname: string;

    constructor(public location: Location, private db: AngularFirestore) {
    //  this.items = db.collection('people').valueChanges();
     this.items = db.collection('people').snapshotChanges()
        .map(actions=>{
          return actions.map(a=> {
            const data = a.payload.doc.data(); 
            const id = a.payload.doc.id;
            return {id, data}
          })
        })
     
     ;
    } 

    addPerson(){
      console.log('adding');
      this.db.collection('people').add({
          'company': this.company,
          'email':this.email,
          'firstname': this.firstname,
          'lastname': this.email
      })
    }

    getPost(postId){
       this.selectedItem = this.db.doc('people/'+postId).valueChanges();
       console.log(this.selectedItem)
       console.log(postId)
    }

      deletePost(postId){
        this.db.doc('people/'+postId).delete();
      }
  ngOnInit() {
  }

}

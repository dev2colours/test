import { Component, OnInit } from '@angular/core';
import { DataService  } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  nbaTeams:any[];
  players:any[];
  constructor(private tt:DataService) { 
    this.nbaTeams=tt.getTeams();
    this.players=tt.getPlayers();
  }
  
  run(team){
    console.log(team)
  }
  ngOnInit() {
  }

}

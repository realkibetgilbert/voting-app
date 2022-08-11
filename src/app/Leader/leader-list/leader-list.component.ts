import { Component, OnInit } from '@angular/core';
import { LeaderObj } from 'src/app/interfaces/leaders';

@Component({
  selector: 'app-leader-list',
  templateUrl: './leader-list.component.html',
  styles: [],
})
export class LeaderListComponent implements OnInit {
  leaderList: LeaderObj[] = [];

  constructor() {}

  ngOnInit(): void {
    const records = localStorage.getItem('leaderList');
    if (records !== null) {
      this.leaderList = JSON.parse(records);
    }
  }
  deleteLeader(id: any) {
    const oldRecords = localStorage.getItem('leaderList');
    if (oldRecords != null) {
      const leaderList = JSON.parse(oldRecords);
      leaderList.splice(
        leaderList.findIndex((a: any) => a.leaderId == id),
        1
      );
      // leaderList.push(this.leaderObject);

      localStorage.setItem('leaderList', JSON.stringify(leaderList));
    }
    const records = localStorage.getItem('leaderList');
    if (records !== null) {
      this.leaderList = JSON.parse(records);
    }
  }
}

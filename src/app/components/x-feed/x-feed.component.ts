import { Component, OnInit } from '@angular/core';
import { X } from '../../models/x';
import { XService } from '../../services/x.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-x-feed',
  templateUrl: './x-feed.component.html',
  styleUrls: ['./x-feed.component.css']
})
export class XFeedComponent implements OnInit {

  xList: X[] = [];
  newX: X = new X();

  constructor(private xService: XService, private router: Router) { }

  ngOnInit(): void {
    this.xService.getAllX().subscribe(x => {
      this.xList = x;
    });
  }

  createX() {
    const now = new Date();
  
    const estOffset = +4 * 60; 
    const pstOffset = +8 * 60; 
    const offsetDifference = estOffset - pstOffset;
    const estDate = new Date(now.getTime() + offsetDifference * 60 * 1000);
  
    this.newX.date = estDate;
        this.xService.createX(this.newX).subscribe(() => {
      window.alert("Created X Successfully");
      this.router.navigate(['x']);
    }, error => {
      console.log('Error: ', error)
      if (error.status === 401 || error.status === 403) {
        this.router.navigate(['signin']);
      }
    });
  }

  deleteX(xId: string | undefined) {
    if (xId) {
      this.xService.deleteX(xId).subscribe(
        () => {
          this.xList = this.xList.filter(x => x.xId !== xId);        },
        err => {
          if (err.status === 401) {
            this.router.navigate(['/signin']);
          } else {
            console.error(err);
          }
        }
      );
    } else {
      console.error('X ID is undefined');
    }
  }
}
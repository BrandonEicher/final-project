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
    this.newX.date = new Date();
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
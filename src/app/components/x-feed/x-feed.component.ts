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

  constructor(private xService: XService, private router: Router) { }

  ngOnInit(): void {
    this.xService.getAllX().subscribe(x => {
      this.xList = x;
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
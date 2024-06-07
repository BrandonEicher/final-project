import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { XService } from '../../services/x.service';
import { X } from '../../models/x';

@Component({
  selector: 'app-x-edit',
  templateUrl: './x-edit.component.html',
  styleUrls: ['./x-edit.component.css']
})
export class XEditComponent implements OnInit {
  x: X = new X();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private xService: XService
  ) {}

  ngOnInit(): void {
    const xId = this.route.snapshot.paramMap.get('id');
    if (xId) {
      this.xService.getX(xId).subscribe(
        x => this.x = x,
        err => {
          if (err.status === 401) {
            this.router.navigate(['/signin']);
          } else {
            console.error(err);
          }
        }
      );
    }
  }

  updateX() {
    if (this.x.xId) {
      this.xService.updateX(this.x).subscribe(
        () => {
          alert('X updated successfully');
          this.router.navigate(['/x']);
        },
        err => {
          if (err.status === 401) {
            this.router.navigate(['/signin']);
          } else {
            console.error(err);
          }
        }
      );
    }
  }
}

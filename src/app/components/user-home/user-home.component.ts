import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { XService } from '../../services/x.service';
import { X } from '../../models/x';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  xList: X[] = [];
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  city: string = '';
  state: string = '';

  constructor(private xService: XService, private userService: UserService, private router: Router, private route: ActivatedRoute,  @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.username = localStorage.getItem('username') || '';
      this.route.paramMap.subscribe(params => {
        this.username = params.get('username') || this.username;
        this.xService.getUserPosts(this.username).subscribe(x => {
          this.xList = x;
        }, error => {
          console.error('Failed to load user posts:', error);
          if (error.status === 404) {
            console.error('Endpoint not found');
          }
        });
      });
    }
  }

  deleteX(xId: string | undefined) {
    if (xId) {
      this.xService.deleteX(xId).subscribe(
        () => {
          this.xList = this.xList.filter(x => x.xId !== xId);
        },
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

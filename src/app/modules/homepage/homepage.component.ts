import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MyserviceService} from "../../myservice.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private router: Router, private myservice: MyserviceService) {
  }
  navigateToDatabasePage(){
    this.router.navigate(['/database']);
  }
}

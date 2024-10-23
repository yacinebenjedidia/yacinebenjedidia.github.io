import { Component } from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-siderbar',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss']
})
export class SiderbarComponent {

}

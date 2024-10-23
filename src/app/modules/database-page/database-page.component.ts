import { Component, OnInit } from '@angular/core';
import { MyserviceService } from "../../myservice.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.scss']
})
export class DatabasePageComponent implements OnInit {
  dataFromApi: any;

  constructor(private router: Router, private myService: MyserviceService) { }
  navigateToAddDataPage(){
    this.router.navigate(['/adddata']);
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.myService.getData().subscribe(data => {
      this.dataFromApi = data;
    });
  }

  deleteItem(id: number): void {
    this.myService.deleteData(id).subscribe(() => {
      // After successful deletion, reload the data
      this.loadData();
    });
  }
}


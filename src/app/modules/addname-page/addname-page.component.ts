import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MyserviceService } from "../../myservice.service";

@Component({
  selector: 'app-addname-page',
  templateUrl: './addname-page.component.html',
  styleUrls: ['./addname-page.component.scss']
})
export class AddnamePageComponent {
  formData: any = {};

  constructor(
    private myService: MyserviceService,
    private snackBar: MatSnackBar
  ) { }

  onSubmit(): void {
    this.myService.AddData(this.formData).subscribe(
      response => {
        console.log('Data added successfully:', response);
        this.openSnackBar('User added successfully!');
        this.resetForm();
      },
      error => {
        console.error('Error adding data:', error);
        this.openSnackBar('Failed to add user. Please try again.');
      }
    );
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000 // Adjust duration as needed
    });
  }

  resetForm(): void {
    this.formData = {};
  }
}


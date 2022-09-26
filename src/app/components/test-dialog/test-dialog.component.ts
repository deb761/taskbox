import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  title: string;
  description: string;
}

@Component({
  selector: 'app-test-dialog',
  template: `
  <h1>{{data.title}}</h1>
  <p>{{data.description}}</p>
  <button mat-raised-button color="primary" > Confirm </button>
  `,
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
  }

}
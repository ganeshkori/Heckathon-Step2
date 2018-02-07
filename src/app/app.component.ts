import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  rowLoopData = [];
  rowCount = 5;
  rowNumber = 1;
  addRowCount = 0;

  columnLoopData = [];
  columnCount = 5
  columnNumber = 1
  addColumnCount = 0;
  command = false;


  indicatorMsg = '';

  ngOnInit() { }


  addRowColumn() {
    for (this.rowNumber = 1; this.rowCount >= this.rowNumber; this.rowNumber++) {
      //console.log(this.rowNumber);
      this.rowLoopData.push(this.rowNumber);

    }

    for (this.columnNumber = 1; this.columnCount >= this.columnNumber; this.columnNumber++) {
      //console.log(this.columnNumber);
      this.columnLoopData.push(this.columnNumber);

    }
  }

  rowColumnForm(formData: NgForm){
    this.columnLoopData = [];
    this.rowLoopData = [];
    this.rowCount = formData.value.row;
    this.columnCount = formData.value.column;
    this.addRowColumn();
    this.command = true;
  }
}

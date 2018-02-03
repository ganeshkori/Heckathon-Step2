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
      console.log(this.rowNumber);
      this.rowLoopData.push(this.rowNumber);

    }

    for (this.columnNumber = 1; this.columnCount >= this.columnNumber; this.columnNumber++) {
      console.log(this.columnNumber);
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

  numberOfElementsToRemove = 0;
  rowColumnCommandForm(formData: NgForm){
    //direction
    //indicator
    //index

    var startIndex = 0;
    this.numberOfElementsToRemove = 0;

    if (formData.value.indicator === 1) {
      // for column
      if (formData.value.direction > 0){
        this.numberOfElementsToRemove = this.columnCount - formData.value.direction;
      }
      if (formData.value.direction < 0){
        var numberOfElementsToRemove0 = this.columnCount + formData.value.direction;
        this.numberOfElementsToRemove = this.columnCount - numberOfElementsToRemove0;
      }
      var removedData = this.columnLoopData.splice(startIndex, this.numberOfElementsToRemove);
      for (let getData of removedData) {
        this.columnLoopData.push(getData);
      }
      this.indicatorMsg = '';

    } else if (formData.value.indicator === 0) {
      // for row
      if(formData.value.direction > 0){
        this.numberOfElementsToRemove = this.rowCount - formData.value.direction;
      }
      if(formData.value.direction < 0){
        var numberOfElementsToRemove0 = this.rowCount + formData.value.direction;
        this.numberOfElementsToRemove = this.rowCount - numberOfElementsToRemove0;
        console.log("< 0");
      }
      var removedData = this.rowLoopData.splice(startIndex, this.numberOfElementsToRemove);
      for(let getData of removedData) {
        this.rowLoopData.push(getData);
      }
      this.indicatorMsg = "";
    }else{
      this.indicatorMsg = "Please enter valid number (1 for col, 0 for row)";
    }
  }

}

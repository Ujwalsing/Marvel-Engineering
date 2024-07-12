import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = "Logistic Site"
  content = "Logisitc Content"
  footer = "info"
  constructor() { }

  ngOnInit(): void {
  }

}

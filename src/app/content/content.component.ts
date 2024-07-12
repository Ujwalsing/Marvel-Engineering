import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  image: string = "./assets/3.png";
  image5: string = "./assets/5.png"
  constructor() { }

  ngOnInit(): void {
  }

}

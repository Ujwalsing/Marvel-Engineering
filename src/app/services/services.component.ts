import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services = [
    {
      title: 'Consulting',
      description: 'We provide expert consulting services to help your business grow.',
      image: '/assets/6.png'
    },
    {
      title: 'Project Management',
      description: 'Our project management services ensure your projects are completed on time and within budget.',
      image: '/assets/7.png'
    },
    {
      title: 'Engineering Solutions',
      description: 'We offer innovative engineering solutions tailored to your needs.',
      image: '/assets/1.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

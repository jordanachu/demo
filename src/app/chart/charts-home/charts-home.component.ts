import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-home',
  templateUrl: './charts-home.component.html',
  styleUrls: ['./charts-home.component.css']
})
export class ChartsHomeComponent implements OnInit {

  chartData = [
    {
      data: [200, 300],
      label: 'Account A'
    },
  ];

  chartLabels = [
    'January',
    'February',
    'March',
    'April'
  ];

  chartOptions = {
    responsive: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}

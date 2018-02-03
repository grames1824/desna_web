import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TravelPlanService } from '../../services/travel-plan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  agencyId: string = '5a6c2e7eec0d4328949331e5';
  plans: any[] = [];

  constructor(public http: Http, public travelPlans: TravelPlanService) { }

  ngOnInit() {
    this.travelPlans.getTravelPlans(this.agencyId).subscribe(data => {
      console.log('Travel plans acquired!');
      this.plans.push(data);
      console.log(this.plans);
    }, err => {
      console.log(err);
      console.log('Oops, something went wrong.');
    });
  }

}

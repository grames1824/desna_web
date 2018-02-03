import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TravelPlanService {

  constructor(public http: Http) { }

  getTravelPlans(agencyId){
    return this.http.get('http://localhost:8080/plans/client/agency/'+agencyId).map(res => res.json());
  }

}

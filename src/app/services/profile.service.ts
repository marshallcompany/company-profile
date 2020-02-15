import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiRoutesProvider } from './api-routes.services';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private apiRoutes: ApiRoutesProvider
  ) { }

  public getProfile() {
    return this.http.get<any>(this.apiRoutes.PROFILE);
  }

  public updateProfile(data) {
    return this.http.patch<any>(this.apiRoutes.PROFILE, data);
  }

}

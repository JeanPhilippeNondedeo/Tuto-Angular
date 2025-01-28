import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCoursService {
  public variableDuService: string = 'Je suis la variable du service'
  private apiUrl = '/api/users'; // URL correspondant aux routes Mirage.js

  constructor(private http: HttpClient) { }

  // Récupérer tous les utilisateurs (GET /api/users)
  public getUsers(): Observable<any> {
    return this.http.get<{ users: any[] }>(this.apiUrl).pipe(
        map(response => response.users) // 👈 On extrait directement le tableau
    );
  }
}

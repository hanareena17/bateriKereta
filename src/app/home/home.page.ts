import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, ],
})
export class HomePage implements OnInit {
  user: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    console.log('Token in home:', token);

     // Token null ➜ redirect to login
  // if (!token) {
  //   alert('Please login first!');
  //   window.location.href = '/login'; // fallback if navCtrl tak pakai
  //   return;
  // }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    this.http.get<any>('http://127.0.0.1:8000/api/user', { headers }).subscribe({
      next: res => {
        this.user = res.data ?? res.data ?? res; // fallback structure;
        console.log('Authenticated user:', this.user);
      },
      error: err => {
        console.error('Failed to fetch user:', err);
        if (err.status === 401) {
          alert('Session expired. Please login again.');
          localStorage.removeItem('token');
          window.location.href = '/login';
      }
    }
      
    });
  }
}


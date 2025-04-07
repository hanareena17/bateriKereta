import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },

  
    {
      path: 'splash',
      loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage),
    },
    {
      path: '',
      redirectTo: 'splash',
      pathMatch: 'full',
    },
    
{
  path : 'profile',
  loadComponent: () => import('./profile/profile.page').then((m) => m.ProfilePage)
},
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  }
  
];

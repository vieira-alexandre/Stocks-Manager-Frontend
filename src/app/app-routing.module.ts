import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { CompositionComponent } from './views/composition/composition.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { QuotationsComponent } from './views/quotations/quotations.component';
import { TradeComponent } from './views/trade/trade.component'

import { LogInComponent } from './components/user/log-in/log-in.component';
import { RegisterComponent } from './components/user/register/register.component';
import { TradeCreateComponent } from './components/trade/trade-create/trade-create.component';
import { UserComponent } from './components/user/user.component';



const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LogInComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'home', component: HomeComponent, canActivate : [AuthGuard]},
  { path: 'trade', component: TradeComponent, canActivate : [AuthGuard]},
  { path: 'portfolio', component: PortfolioComponent, canActivate : [AuthGuard]},
  { path: 'composition', component: CompositionComponent, canActivate : [AuthGuard]},
  { path: 'trade/create', component: TradeCreateComponent, canActivate : [AuthGuard]},
  { path: 'quotations', component: QuotationsComponent, canActivate : [AuthGuard]}, 
  { path: '', pathMatch: 'full', redirectTo: 'user/login' },
  { path: '**', pathMatch: 'full', redirectTo: 'user/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

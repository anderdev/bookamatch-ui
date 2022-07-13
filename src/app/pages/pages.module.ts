import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PagesRoutingModule } from './pages-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ComponentsModule} from '../components/components.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [DashboardComponent, ChangePasswordComponent, ProfileComponent, NotFoundComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatTreeModule,
    MatBadgeModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCardModule,
    MatCheckboxModule,
  ],
})
export class PagesModule {}

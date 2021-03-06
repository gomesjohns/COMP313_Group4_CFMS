import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { RegisterComponent } from "../components/register/register.component";
import { DashboardCustomerComponent } from "../components/customer/dashboard-customer/dashboard-customer.component";
import { NewFeedbackComponent } from "../components/customer/feedback/new-feedback/new-feedback.component";
import { ListFeedbackComponent } from "../components/customer/feedback/list-feedback/list-feedback.component";
import { DetailsFeedbackComponent} from "../components/customer/feedback/details-feedback/details-feedback.component";
import { DashboardAdminComponent } from "../components/admin/dashboard-admin/dashboard-admin.component";
import { AddUserComponent } from "../components/admin/add-user/add-user.component";
import { ListUserComponent } from "../components/admin/list-user/list-user.component";
import { UserDetailsComponent } from "../components/admin/user-details/user-details.component";
import { ListAdminFeedbackComponent } from "../components/admin/list-feedback/list-feedback.component";
import { FeedbackDetailsComponent } from "../components/admin/feedback-details/feedback-details.component";
import { CompaniesComponent} from "../components/admin/companies/companies.component";

const appRoutes: Routes =
[
    { path: 'home', component: HomeComponent},
    { path: 'register', component: RegisterComponent},

    { path: 'customer-dashboard', component: DashboardCustomerComponent},
    { path: 'new-feedback', component: NewFeedbackComponent},
    { path: 'list-feedback', component: ListFeedbackComponent},
    { path: 'feedback-details', component: DetailsFeedbackComponent},

    { path: 'admin-dashboard', component: DashboardAdminComponent},
    { path: 'add-user', component: AddUserComponent},
    { path: 'list-user', component: ListUserComponent},
    { path: 'user-details', component: UserDetailsComponent},
    { path: 'list-feedback-admin', component: ListAdminFeedbackComponent},
    { path: 'feedback-details-admin', component: FeedbackDetailsComponent},
    { path: 'companies', component: CompaniesComponent},

    { path: '**', component: HomeComponent},
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class RoutingModule{}

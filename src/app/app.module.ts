import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ListTransactionsComponent } from './pages/list-transactions/list-transactions.component';
import { ListFriendsComponent } from './pages/list-friends/list-friends.component';
import { AddFriendComponent } from './pages/add-friend/add-friend.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepositAmountComponent } from './pages/deposit-amount/deposit-amount.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { ProfileDtoComponent } from './pages/profile-dto/profile-dto.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminComponent,
    ListTransactionsComponent,
    ListFriendsComponent,
    AddFriendComponent,
    DepositAmountComponent,
    LogoutComponent,
    ProfileDtoComponent
  ],
  entryComponents: [AddFriendComponent],

  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

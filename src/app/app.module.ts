import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewserviceService } from './newservice.service';

import { MypipePipe } from './mypipe.pipe';
import { TempConverterPipe } from './temp-converter.pipe';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';





@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    TempConverterPipe,
    HomeComponent,
    AboutComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

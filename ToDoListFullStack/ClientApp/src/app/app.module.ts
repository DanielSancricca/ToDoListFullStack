import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CreateToDoComponent } from './create-to-do/create-to-do.component';
import { DeleteToDoComponent } from './delete-to-do/delete-to-do.component';
import { UpdateToDoComponent } from './update-to-do/update-to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ToDoComponent,
    CreateToDoComponent,
    DeleteToDoComponent,
    UpdateToDoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      {path: 'to-do', component: ToDoComponent},
      {path: 'create-to-do', component: CreateToDoComponent},
      {path: 'delete-to-do', component: DeleteToDoComponent},
      {path: 'update-to-do', component: UpdateToDoComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

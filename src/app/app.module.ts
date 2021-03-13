import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { CompeticaoComponent } from './pages/competicao/competicao.component';
import { TimeComponent } from './pages/time/time.component';
import { H2hComponent } from './pages/h2h/h2h.component';
import { AnaliseRodadaComponent } from './pages/analise-rodada/analise-rodada.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    CompeticaoComponent,
    TimeComponent,
    H2hComponent,
    AnaliseRodadaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

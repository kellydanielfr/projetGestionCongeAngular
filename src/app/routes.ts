import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { InscriptionComponent } from "./component/inscription/inscription.component";
import { LoginComponent } from "./component/login/login.component";
import { EditSalarieComponent } from "./component/salarie/edit-salarie/edit-salarie.component";
import { SalarieListComponent } from "./component/salarie/salarie-list/salarie-list.component";

export const routes: Routes = [
  { path: 'salarie/list', component: SalarieListComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'salarie/edit/:id', component: EditSalarieComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
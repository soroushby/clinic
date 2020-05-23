import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactmeComponent } from "./contactme/contactme.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "aboutme", component: AboutmeComponent },
  { path: "contactme", component: ContactmeComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

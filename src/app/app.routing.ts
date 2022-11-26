import { Routes, RouterModule } from
    "@angular/router";
import { AuthentificationFormComponent } from "./cvModule/components/authentification-form/authentification-form.component";
import { CvComponent } from "./cvModule/components/cv/cv.component";
import { DetailComponent } from "./cvModule/components/detail/detail.component";
import { WordComponent } from "./miniWordModule/components/word/word.component";
import { FirstComponent } from "./tp1Module/components/first/first.component";
import { Page1Component } from "./tp3/components/page1/page1.component";
import { Page2Component } from "./tp3/components/page2/page2.component";
import { RouterSimulatorComponent } from "./tp3/components/router-simulator/router-simulator.component";


export const APP_ROUTES: Routes = [
    { path: '', component: CvComponent },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component },
    { path: 'word', component: WordComponent },
    { path: 'tp1', component: FirstComponent },
    { path: 'details/:id', component: DetailComponent },
    { path: 'auth', component: AuthentificationFormComponent },






];
export const ROUTING =
    RouterModule.forRoot(APP_ROUTES);
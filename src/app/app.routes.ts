import { Routes } from '@angular/router';
import { GamePageComponent } from './Pages/game-page/game-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EndComponent } from './end/end.component';


const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'gamepage', component: GamePageComponent },
  { path: 'homePage', component: HomepageComponent },
  { path: 'end', component: EndComponent }

];

export { ROUTES };
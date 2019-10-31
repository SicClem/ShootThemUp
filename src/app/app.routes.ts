import { Routes } from '@angular/router';
import { GamePageComponent } from './Pages/game-page/game-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const ROUTES: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'gamepage', component: GamePageComponent },
];

export { ROUTES };
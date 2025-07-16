import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { CommentsComponent } from './comments/comments.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { ErrorsComponent } from './errors/errors.component';
import { ColorsComponent } from './colors/colors.component';
import { TablesComponent } from './tables/tables.component';
import { ListsComponent } from './lists/lists.component';
import { FloatComponent } from './float/float.component';
import { PositionComponent } from './position/position.component';
import { DispalyComponent } from './dispaly/dispaly.component';
import { CsshomeComponent } from './csshome/csshome.component';

const routes: Routes = [{ path: '', component: CssComponent, title:'CSS',
  children :[
    {path: '', component: CsshomeComponent},
    {path: 'introduction', component: IntroductionComponent},
    {path: 'selectors', component: SelectorsComponent},
    {path: 'comments', component: CommentsComponent},
    {path: 'boxmodel', component: BoxModelComponent},
    {path: 'errors', component: ErrorsComponent},
    {path: 'colors', component: ColorsComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'lists', component: ListsComponent},
    {path: 'float', component: FloatComponent},
    {path: 'position', component: PositionComponent},
    {path: 'display', component: DispalyComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }

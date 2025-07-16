import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssRoutingModule } from './css-routing.module';
import { CssComponent } from './css.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SelectorsComponent } from './selectors/selectors.component';
import { CommentsComponent } from './comments/comments.component';
import { ErrorsComponent } from './errors/errors.component';
import { ColorsComponent } from './colors/colors.component';
import { BoxModelComponent } from './box-model/box-model.component';
import { TablesComponent } from './tables/tables.component';
import { LeftMenuModule } from '../left-menu/left-menu.module';
import { ListsComponent } from './lists/lists.component';
import { PositionComponent } from './position/position.component';
import { DispalyComponent } from './dispaly/dispaly.component';
import { FloatComponent } from './float/float.component';
import { CsshomeComponent } from './csshome/csshome.component';


@NgModule({
  declarations: [
    CssComponent,
    IntroductionComponent,
    SelectorsComponent,
    CommentsComponent,
    ErrorsComponent,
    ColorsComponent,
    BoxModelComponent,
    TablesComponent,
    ListsComponent,
    PositionComponent,
    DispalyComponent,
    FloatComponent,
    CsshomeComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule,
    LeftMenuModule
  ]
})
export class CssModule { }

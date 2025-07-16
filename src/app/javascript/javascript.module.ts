import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptComponent } from './javascript.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LeftMenuModule } from '../left-menu/left-menu.module';
import { StatementsComponent } from './statements/statements.component';
import { SyntaxComponent } from './syntax/syntax.component';
import { CommentsComponent } from './comments/comments.component';
import { VariablesComponent } from './variables/variables.component';
import { OperatorsComponent } from './operators/operators.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { FunctionsComponent } from './functions/functions.component';
import { ObjectsComponent } from './objects/objects.component';
import { LoopsComponent } from './loops/loops.component';
import { JavascripthomeComponent } from './javascripthome/javascripthome.component';


@NgModule({
  declarations: [
    JavascriptComponent,
    IntroductionComponent,
    StatementsComponent,
    SyntaxComponent,
    CommentsComponent,
    VariablesComponent,
    OperatorsComponent,
    DataTypesComponent,
    FunctionsComponent,
    ObjectsComponent,
    LoopsComponent,
    JavascripthomeComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    LeftMenuModule
  ]
})
export class JavascriptModule { }

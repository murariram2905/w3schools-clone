import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';
import { IntroductionComponent } from './introduction/introduction.component';
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

const routes: Routes = [{ path: '', component: JavascriptComponent, title: 'JavaScript',
  children : [
    {path: '', component: JavascripthomeComponent},
     {path: 'introduction', component: IntroductionComponent},
     {path: 'statements', component: StatementsComponent},
     {path: 'syntax', component: SyntaxComponent},
     {path: 'comments', component: CommentsComponent},
     {path: 'variables', component: VariablesComponent},
     {path: 'operators', component: OperatorsComponent},
     {path: 'datatypes', component: DataTypesComponent},
     {path: 'functions', component: FunctionsComponent},
     {path: 'objects', component: ObjectsComponent},
     {path: 'loops', component: LoopsComponent},

  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }

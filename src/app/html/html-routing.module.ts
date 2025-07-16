import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html.component';
import { HtmlIntroductionComponent } from './html-introduction/html-introduction.component';
import { HtmlBasicsComponent } from './html-basics/html-basics.component';
import { ElementsComponent } from './elements/elements.component';
import { AttributesComponent } from './attributes/attributes.component';
import { HeadingsComponent } from './headings/headings.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { CommentsComponent } from './comments/comments.component';
import { ColorsComponent } from './colors/colors.component';
import { LinksComponent } from './links/links.component';
import { BloclInlineComponent } from './blocl-inline/blocl-inline.component';
import { DivComponent } from './div/div.component';
import { HtmlhomeComponent } from './htmlhome/htmlhome.component';

const routes: Routes = [
          {path: '', component: HtmlComponent, title: 'HTML',
            children: [
                { path: '', component: HtmlhomeComponent},
                { path: 'introduction', component: HtmlIntroductionComponent },
                { path: 'basics', component: HtmlBasicsComponent, title: 'HTML Basics' },
                { path: 'elements', component: ElementsComponent, title: 'HTML Elements'},
                { path: 'attributes', component: AttributesComponent, title: 'HTML Attributes'},
                { path: 'headings', component: HeadingsComponent, title: 'HTML Headings'},
                { path: 'paragraphs', component: ParagraphsComponent, title: 'HTML Paragraphs'},
                { path: 'comments', component: CommentsComponent, title: 'HTML Comments'},
                { path: 'colors', component: ColorsComponent, title: 'HTML Colors'},
                { path: 'links', component: LinksComponent, title: 'HTML Links'},
                { path: 'blocl-inline', component: BloclInlineComponent, title: 'HTML Block&Inline'},
                { path: 'div', component: DivComponent, title: 'HTML Div'},  
            ]
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }

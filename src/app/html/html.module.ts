import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
import { HtmlComponent } from './html.component';
import { LeftMenuModule } from '../left-menu/left-menu.module';
import { HtmlIntroductionComponent } from './html-introduction/html-introduction.component';
import { HtmlBasicsComponent } from './html-basics/html-basics.component';
import { ElementsComponent } from './elements/elements.component';
import { AttributesComponent } from './attributes/attributes.component';
import { HeadingsComponent } from './headings/headings.component';
import { ParagraphsComponent } from './paragraphs/paragraphs.component';
import { CommentsComponent } from './comments/comments.component';
import { ColorsComponent } from './colors/colors.component';
import { LinksComponent } from './links/links.component';
import { DivComponent } from './div/div.component';
import { BloclInlineComponent } from './blocl-inline/blocl-inline.component';
import { HtmlhomeComponent } from './htmlhome/htmlhome.component';


@NgModule({
  declarations: [
    HtmlComponent,
    HtmlIntroductionComponent,
    HtmlBasicsComponent,
    ElementsComponent,
    AttributesComponent,
    HeadingsComponent,
    ParagraphsComponent,
    CommentsComponent,
    ColorsComponent,
    LinksComponent,
    DivComponent,
    BloclInlineComponent,
    HtmlhomeComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    LeftMenuModule
  ]
})
export class HtmlModule { }

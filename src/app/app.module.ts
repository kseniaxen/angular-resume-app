import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    KnowledgeComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

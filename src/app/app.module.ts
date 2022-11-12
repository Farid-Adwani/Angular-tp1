import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteVisiteComponent } from './tp1Module/components/carte-visite/carte-visite.component';
import { HighlightDirective } from './cvModule/directives/highlight/highlight.directive';
import { WordComponent } from './miniWordModule/components/word/word.component';
import { ArcEnCielDirective } from './cvModule/directives/arc_en_ciel/arc-en-ciel.directive';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstComponent } from './tp1Module/components/first/first.component';
import { CvComponent } from './cvModule/components/cv/cv.component';
import { ListeComponent } from './cvModule/components/liste/liste.component';
import { ItemComponent } from './cvModule/components/item/item.component';
import { EmbaucheListComponent } from './cvModule/components/embauche-list/embauche-list.component';
import { DefaultImagePipePipe } from './cvModule/pipes/defaultImagePipe/default-image-pipe.pipe';
import { DetailComponent } from './cvModule/components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    CarteVisiteComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    HighlightDirective,
    WordComponent,
    ArcEnCielDirective,
    DefaultImagePipePipe,
    EmbaucheListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

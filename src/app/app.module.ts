import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailComponent } from './detail/detail.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { WordComponent } from './word/word.component';
import { ArcEnCielDirective } from './directives/arc_en_ciel/arc-en-ciel.directive';
import { DefaultImagePipePipe } from './pipes/defaultImagePipe/default-image-pipe.pipe';
import { EmbaucheListComponent } from './embauche-list/embauche-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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

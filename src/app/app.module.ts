import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { SliderComponent } from './home/slider/slider.component';
import { CountdownComponent } from './home/countdown/countdown.component';
import { ContentComponent } from './home/content/content.component';
import { StoriesComponent } from './home/stories/stories.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { PhotoInHomeComponent } from './home/photo-in-home/photo-in-home.component';
import { PreweddingComponent } from './home/prewedding/prewedding.component';
import { OurmemoryComponent } from './home/ourmemory/ourmemory.component';
import { GallerysChildComponent } from './home/gallerys-child/gallerys-child.component';
import { TheEndComponent } from './home/the-end/the-end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SliderComponent,
    CountdownComponent,
    ContentComponent,
    StoriesComponent,
    TimelineComponent,
    PhotoInHomeComponent,
    PreweddingComponent,
    OurmemoryComponent,
    GallerysChildComponent,
    TheEndComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

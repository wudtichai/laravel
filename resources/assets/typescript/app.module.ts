import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderAppComponent } from './header-app.component';
import { ImageSliderComponent } from './image-slider.component';
import { LoginComponent } from './login.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    HeaderAppComponent, 
    ImageSliderComponent, 
    LoginComponent, 
    AppComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
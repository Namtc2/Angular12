import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SidebarRightComponent } from './components/partials/sidebar-right/sidebar-right.component';
import { CardContentComponent } from './components/partials/card-content/card-content.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PostPageComponent } from './components/pages/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarRightComponent,
    CardContentComponent,
    TagsComponent,
    LoginComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

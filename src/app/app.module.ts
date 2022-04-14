import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { VneckComponent } from './vneck/vneck.component';
import { RoundneckComponent } from './roundneck/roundneck.component';
import { WithcollarComponent } from './withcollar/withcollar.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { MobilecaseComponent } from './mobilecase/mobilecase.component';

import { SofttoysComponent } from './softtoys/softtoys.component';
import { TeddyComponent } from './teddy/teddy.component';
import { BlobbyComponent } from './blobby/blobby.component';
import { CharacterComponent } from './character/character.component';
import { AnimalsComponent } from './animals/animals.component';
import { CustomgiftComponent } from './customgift/customgift.component';
import { PillowComponent } from './pillow/pillow.component';
import { ArtComponent } from './art/art.component';
import { MugComponent } from './mug/mug.component';
import { MirrorComponent } from './mirror/mirror.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    SupportComponent,
    VneckComponent,
    RoundneckComponent,
    WithcollarComponent,
    TshirtComponent,
    MobilecaseComponent,
    SofttoysComponent,
    TeddyComponent,
    BlobbyComponent,
    CharacterComponent,
    AnimalsComponent,
    CustomgiftComponent,
    PillowComponent,
    ArtComponent,
    MugComponent,
    MirrorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

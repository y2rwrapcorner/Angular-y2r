import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
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
import { PillowComponent } from './pillow/pillow.component';
import { MugComponent } from './mug/mug.component';
import { MirrorComponent } from './mirror/mirror.component';
import { ArtComponent } from './art/art.component';
import { CustomgiftComponent } from './customgift/customgift.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support', component: SupportComponent },
  { path: 'vneck', component: VneckComponent },
  { path: 'roundneck', component: RoundneckComponent },
  { path: 'withcollar', component: WithcollarComponent },
  { path: 'tshirt', component: TshirtComponent },
  { path: 'mobilecase', component: MobilecaseComponent },
  { path: 'softtoys', component: SofttoysComponent },
  { path: 'teddy', component: TeddyComponent },
  { path: 'blobby', component: BlobbyComponent },
  { path: 'character', component: CharacterComponent },
  { path: 'animals', component: AnimalsComponent },
  { path: 'pillow', component: PillowComponent },
  { path: 'mug', component: MugComponent },
  { path: 'mirror', component: MirrorComponent },
  { path: 'art', component: ArtComponent },
  { path: 'customgift', component: CustomgiftComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

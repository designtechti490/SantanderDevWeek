import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/app-routing.module';
import { SvgComponentsModule } from './modules/svg-components.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		CardBoxComponent,
		AmountBoxComponent,
		CarouselItemsComponent,
	],
	imports: [
		BrowserModule,
		SvgComponentsModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

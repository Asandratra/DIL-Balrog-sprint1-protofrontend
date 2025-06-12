import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BannerComponent } from "../banner/banner.component";
import { ArticleListComponent } from "../article-list/article-list.component";
import { FeaturesComponent } from "../features/features.component";
import { BestSellingsComponent } from "../best-sellings/best-sellings.component";
import { NewslettersComponent } from "../newsletters/newsletters.component";
import { FooterComponent } from "../footer/footer.component";
import { CopyrightComponent } from "../copyright/copyright.component";
import { PersonalBannerComponent } from "../personal-banner/personal-banner.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, BannerComponent, ArticleListComponent, FeaturesComponent, BestSellingsComponent, NewslettersComponent, FooterComponent, CopyrightComponent, PersonalBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

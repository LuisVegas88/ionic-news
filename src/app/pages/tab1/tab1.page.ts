import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from '../../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  articles : Article[] = []

  constructor(
    private noticiasService:NoticiasService
  ) { }

  ngOnInit() {
    this.noticiasService.getTopHeadLines()
      .subscribe( articles=>{
        this.articles.push(...articles);
      } )
  }

}

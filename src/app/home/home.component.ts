import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle(`It's my home page`);

    meta.updateTag({name: 'author', content: 'Gabriel Ferreira'});
    meta.updateTag({name: 'keywords', content: 'Universal, Demo'});
    meta.updateTag({
      name: 'description',
      content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI'
    });
  }

  ngOnInit() {
  }

}

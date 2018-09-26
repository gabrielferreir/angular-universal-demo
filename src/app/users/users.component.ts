import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle(`It's my user page`);

    meta.updateTag({name: 'author', content: 'Gabriel Ferreira'});
    meta.updateTag({name: 'keywords', content: 'Universal, Demo, User page'});
    meta.updateTag({
      name: 'description',
      content: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI da user page'
    });
  }

  ngOnInit() {
  }

}

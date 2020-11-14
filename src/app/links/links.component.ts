import { Component } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent {
  links = [{
      title: 'Github',
      link: 'https://github.com/kseniaxen'
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/ksenia.xen/'
    },
    {
      title: 'Science work',
      link: 'http://ceur-ws.org/Vol-2608/paper9.pdf'
    }
  ]

}

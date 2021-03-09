import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started-footer',
  templateUrl: './get-started-footer.component.html',
  styleUrls: ['./get-started-footer.component.scss']
})
export class GetStartedFooterComponent implements OnInit {

  users = [ 
    {
      quote: `"It surpassed our expectations"`,
      description: `"Filed has completely surpassed our expectations. I will refer everyone I know. Filed is worth much more than I paid."`,
      name: 'Tania Y. ',
      photo: 'assets/img/pexels-andrea-piacquadio-3763188.jpg',
      jobTitle: 'Flexi Content @Hello'
    },

    {
      quote: `“The essential marketing tool”`,
      description: `“Filed is the most valuable business resource we have EVER purchased. I was amazed at the quality of filed. We were treated like royalty.”`,
      name: 'Jack Francis',
      photo: 'assets/img/pexels-andrew-dick-697509.jpg',
      jobTitle: `Manager @ Accidents Direct`
    },
    {
      quote: `“Your company is truly upstanding”`,
      description: `“The service was excellent. After using filed my business skyrocketed! It really saves me time and effort.”`,
      name: 'Dawna N.',
      photo: 'assets/img/pexels-pixabay-220453.jpg',
      jobTitle: 'Editor @ Museum of Typography'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

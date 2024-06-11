import { Component, OnInit } from '@angular/core';
import { faClipboardList, faHome, faBorderAll, faClock, faAngleUp, faAngleDown, faHeart, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {
  
  faClipboardList = faClipboardList;
  faHome = faHome;
  faBorderAll = faBorderAll;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faUsers = faUsers;
  faGear = faGear;
  
  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'subItem 1.1'
        },
        {
          label: 'subItem 1.2'
        }
      ]
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'subItem 2.1'
        },
        {
          label: 'subItem 2.2'
        }
      ]
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'subItem 3.1'
        },
        {
          label: 'subItem 3.2'
        }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }




}

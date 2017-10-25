import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartoon',
  templateUrl: './cartoon.component.html',
  styleUrls: ['./cartoon.component.css']
})
export class CartoonComponent implements OnInit {
  private cartoonList:{
    name: String,
    url: String

  }[];
  private creatorText: String;
  constructor() { }

  ngOnInit() {
    this.cartoonList = [
      { name: "To Aru Kagaku no Railgun",
        url : "http://1.bp.blogspot.com/-Bht8OUchgl0/VWKLQcw511I/AAAAAAAABE8/MLAPrEq50bk/s640/To%2BAru%2BKagaku%2BNo%2BRailgun%2BS.jpg"
      } , {
        name : "To Aru Majutsu No Index",
        url : "http://upic.me/i/n2/project-index2_1.jpg"
        }
    ]
    this.creatorText = "Created by Narut Promsuparoj 57102010274";
  }
}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogItems = [
    {
      uid: "uid",
      title: "Title of the blog",
      subtitle: "subtitle of the blog",
      image: "image url",
      post: "post is awesome",
      category: "category",
      createdBy: "Md Robin",
      createdAt: "04/30/3033"
    },
    {
      uid: "uid",
      title: "Title of the blog",
      subtitle: "subtitle of the blog",
      image: "image url",
      post: "post is awesome",
      category: "category",
      createdBy: "Md Robin",
      createdAt: "04/30/3033"
    },
    {
      uid: "uid",
      title: "Title of the blog",
      subtitle: "subtitle of the blog",
      image: "image url",
      post: "post is awesome",
      category: "category",
      createdBy: "Md Robin",
      createdAt: "04/30/3033"
    }
  ]
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}

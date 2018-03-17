import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: [ './profile.component.css' ]
})

export class ProfileComponent {

  /*adds education code-by-color #140956*/
  schools = [
    {
      name: 'John F.Kennedy Schue',
      major: 'Wirtschaftsgymnasium',
      start: new Date('2010-09-01'),
      end: new Date('2014-07-22'),
    },
    {
      name: 'Hochschule Esslingen',
      major: 'Wirtschaftsinformatik (Bachelor of Engineering)',
      start: new Date('2015-03-01'),
      end: new Date(),
    }
  ];


  /*adds jobs code-by-color #140956*/
  works = [
    {
      name: 'Rennstall Esslingen',
      role: 'Formula Student',
      start: new Date('2015-03-16'),
      end: new Date('2016-01-30'),
    },
    {
      name: 'Hochschule Esslingen',
      role: 'Semestersprecherin',
      start: new Date('2015-03-15'),
      end: new Date('2017-08-31'),
    },
    {
      name: 'Daimler AG',
      role: 'Flexipool-Mitarbeiter in Powertrain Tool Management',
      start: new Date('2017-10-27'),
      end: new Date(),
    }
  ];


  /*adds skills code-by-color #1BA3FF*/
  skills = [
    {
      name: 'Problem Solving',
      score: 99,
    },
    {
      name: 'Luck',
      score: 7,
    },
    {
      name: 'Wisdom',
      score: 42,
    },
    {
      name: 'Bluemix',
      score: 4,
    },
    {
      name: 'Teamwork',
      score: 1+2,
    },
    {
      name: 'Power',
      score: 9000+1,
    },
    {
      name: 'Jokes',
      score: -1,
    },
  ]


}

A small project I wanted to work on.

A native desktop application that allows the user to view course dependencies for Computer Science at York University.

Written using Electron as well as the following libraries:
- [anime.js](https://github.com/juliangarnier/anime) (For animations and to make it look cool)
- [vis.js](https://github.com/almende/vis) (For data visualization)

#### Planned release features:
- Allow user to save their grades earned in a particular course, calculating GPA avg. etc
- Courses included are for Bachelors of Computer Science (Honours incl.) as well as the specialized fields

#### Other features I plan on working on:
- Scrapes the YorkU course website for updated courses (Might be moved to an AWS server instead)

#### Deployment

~~~~
npm run electron-build
~~~~

Currently tested on Windows 10. No plans for Mac or Linux yet.

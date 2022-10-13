import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

fetch("https://api.github.com/users/joannaMakarewicz/repos")
.then (resp => resp.json())
.then (resp => {
  for (let repo of resp){
    const {name, description, html_url} = repo;
    const myList = document.querySelector('.frame--js');
  
    const myTemplate = `        <article class="frame__main">
    <h3 class="frame__header">
      <img class="frame__dots" src="../assets/icons/circles_top.png" />
    </h3>
    <div class="frame__content">
      <img class="frame__icon" src="../assets/icons/GithubBlack.png" />
      <ul class="frame__list">
        <li class="frame__item">project:</li>
        <li class="frame__item frame__item--2">description:</li>
        <li class="frame__item">demo:</li>
        <li class="frame__item">github:</li>
      </ul>
      <ul class="frame__list frame__list--2">
      <li class="frame__project">${name}</li>
      <li class="frame__description">${description}</li>
      <li class="frame__demo"><a href="">see here</a></li>
      <li class="frame__git"><a href="${html_url}">source code</a></li>
      </ul>
    </div>
  </article>`;
    
   
    myList.innerHTML+=myTemplate;
  }
})
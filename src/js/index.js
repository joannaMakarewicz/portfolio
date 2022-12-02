import '../scss/main.scss';


fetch("https://api.github.com/users/joannaMakarewicz/repos")
.then (resp => resp.json())
.then (resp => {
  for (let repo of resp){
    const {name, description, html_url, homepage} = repo;
    const myList = document.querySelector('.frame--js');
  
    const myTemplate = `        <article class="frame__main">
    <h3 class="frame__header">
      <img class="frame__dots" src="img/circles_top.png" />
    </h3>
    <div class="frame__content">
      <img class="frame__icon" src="img/GithubBlack.png" />
      <ul class="frame__list">
        <li class="frame__item">project:</li>
        <li class="frame__project frame__list--2">${name}</li>
        <li class="frame__item frame__item--2">description:</li>
        <li class="frame__description frame__list--2">${description}</li>
        <li class="frame__item">demo:</li>
        <li class="frame__demo frame__list--2"><a href="${homepage}" target="demo version of project">see here</a></li>
        <li class="frame__item">github:</li>
        <li class="frame__git frame__list--2"><a href="${html_url}" target="code used for project">source code</a></li>
      </ul>
    </div>
  </article>`;
    
   
    myList.innerHTML+=myTemplate;
  }
})
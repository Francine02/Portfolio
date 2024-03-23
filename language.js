const dropdown = document.querySelector('.dropdown');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const proje = document.querySelector('#proj');
const h1 = document.querySelector('#h1');

function english () {
  about.textContent = 'About';
  skills.textContent = 'Skills';
  proje.textContent = 'Projects';

  h1.innerHTML = `<h1 class="display-5">Hello, my name is<br><span>Francine Cruz</span></h1>
  <p>--developer Front-End.</p>`

  dropdown.innerHTML = `
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="./img/icons8-grã-bretanha-circular-48.png" alt="bandeira-inglesa" style="width: 1.5rem;"> EN
  </a>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" onclick="pt()" href="#"><img src="./img/icons8-brasil-48.png" alt="bandeira-Brasil" style="width: 1.6rem;"> PT</a>
  </div> 
  `
}

function pt () {
  about.textContent = 'Sobre';
  skills.textContent = 'Habilidades';
  proje.textContent = 'Projetos';

  h1.innerHTML = `<h1 class="display-5">Olá, meu nome é <br><span>Francine Cruz</span></h1>
  <p>--Desenvolvedora Front-End.</p>`

  dropdown.innerHTML = `
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" activate><img src="./img/icons8-brasil-48.png" alt="bandeira-Brasil" style="width: 1.6rem;"> PT
  </a>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" onclick="english()" href="#"><img src="./img/icons8-grã-bretanha-circular-48.png" alt="bandeira-inglesa" style="width: 1.5rem;"> EN</a>
  </div>
    `
}

pt();
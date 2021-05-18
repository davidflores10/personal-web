<template>
  <body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand js-scroll-trigger" href="#">
      <span class="d-block d-lg-none">David Flores</span>
      <span class="d-none d-lg-block">
<!--        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://avatars2.githubusercontent.com/u/28624293?s=400&u=4813ed204ff84342a5407f5172854d3e6022c141&v=4" alt="">-->
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../../assets/profile.jpg" alt="">
      </span>
    </a>
<!--    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"-->
<!--            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">-->
<!--      <span class="navbar-toggler-icon"></span>-->
<!--    </button>-->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('about')">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('experience')">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('education')">Education</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('skills')">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('interest')">Interests</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('awards')">Awards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger" @click="changeListActive('projects')">Projects</a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="container-fluid p-0">

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about" v-if="bounce.about">
        <div class="w-100">
          <h1 class="mb-0">David
            <span class="text-primary">Flores</span>
          </h1>
          <div class="subheading mb-5">Salamanca ·
            <a href="mailto:davidflores10.df@gmail.com">davidflores10.df@gmail.com</a>
          </div>
          <p class="lead mb-5">I have a degree in Computer Engineering from the University of Salamanca.</p>
          <p class="lead mb-5">Currently I work professionally in the development of all types of systems, especially in
            the development of applications with front-end technologies such as Angular and Vue, as well as in the
            development of the back-end with Symfony as the main framework. I also know the development of mobile
            applications, especially Android natively since I have worked with it first hand.
          </p>
          <p class="lead mb-5">I'm a great advocate of teamwork using agile methodologies.</p>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/david-flores-barbero">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/davidflores10">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://stackoverflow.com/users/10363238/david">
              <i class="fab fa-stack-overflow"></i>
            </a>
          </div>
        </div>
      </section>
    </transition>

    <hr class="m-0">

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="experience" v-if="bounce.experience">
        <div class="w-100">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Full Stack Web Developer</h3>
              <div class="subheading mb-3">Undanet</div>
              <p>In charge to build the moderns websites of the future working overall in performance and
                flexibility trying to bring the best user expirence.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">November 2018 - Present</span>
            </div>
          </div>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">Researcher, Mobile & Web Developer</h3>
              <div class="subheading mb-3">Bisite Researcher Group</div>
              <p>Working with a lot of platforms, giving importance to the data and playing a vital role in sourcing
                and extracting valuable market information to benefit the team.</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">July 2017 - November 2018</span>
            </div>
          </div>
        </div>
      </section>
    </transition>

    <hr class="m-0">

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education" v-if="bounce.education">
        <div class="w-100">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div class="resume-content">
              <h3 class="mb-0">University of Salamanca</h3>
              <div class="subheading mb-3">Computer Engineering</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">September 2014 - May 2018</span>
            </div>
          </div>

        </div>
      </section>
    </transition>

    <hr class="m-0">

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills" v-if="bounce.skills">

        <div class="w-100">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline dev-icons">
            <li class="list-inline-item">
              <i class="fab fa-html5"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-css3"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-angular"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-vuejs"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-node-js"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-sass"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-symfony"></i>
            </li>

            <li class="list-inline-item">
              <i class="fab fa-android"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-java"></i>
            </li>
            <li class="list-inline-item">
              <i class="fab fa-npm"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-check"></i>
              Front-end Development, Responsive Design
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Back-end Development
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>
    </transition>

    <hr class="m-0">

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests" v-if="bounce.interest">
        <div class="w-100">
          <h2 class="mb-5">Interests</h2>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I like to
            practise some sports like playing in a football team, do bicycling or climbing</p>
          <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and
            television shows, I like to solve rubik cubes, and I spend a large amount of my free time exploring
            the latest technology advancements in the front-end web development world.</p>
        </div>
      </section>
    </transition>

    <hr class="m-0">

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards" v-if="bounce.awards">
        <div class="w-100">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              TCUE (Knowledge Transfer University Company) award 2018
            </li>

            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              B2 English Cambridge Certification in 2017
            </li>

          </ul>
        </div>
      </section>
    </transition>

    <transition name="bounce">
      <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects" v-if="bounce.projects">
        <div class="w-100">
          <h2 class="mb-5">Projects</h2>
          <div class="row">
            <div class="col-4">
              <a href="https://davidflores-landing.netlify.app/">
              <div class="card card-projects" >
                <img class="card-img-top card-image"  src="../../assets/landing-page.png" alt="Card image cap">
                <div class="card-body">
                  <h5  class="card-title">Landing Page</h5>
                </div>
              </div>
              </a>
            </div>
            <div class="col-4">
              <a href="https://spotifyclone-davidflores.netlify.app/">
                <div class="card card-projects" >
                  <img class="card-img-top card-image"  src="../../assets/spotify-clone.png" alt="Card image cap">
                  <div class="card-body">
                    <h5  class="card-title">Spotify Clone</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </transition>

  </div>
  </body>

</template>

<script>
export default {
  name: 'Home',
  // props: {},
  data() {
    return {
      bounce: {
        about: true,
        experience: false,
        education: false,
        skills: false,
        interest: false,
        awards: false,
        projects: false
      }
    }
  },

  mounted(){
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.onResize()
  },
  methods: {
    changeListActive(prop) {
      this.bounce.about = false;
      this.bounce.experience = false;
      this.bounce.education = false;
      this.bounce.skills = false;
      this.bounce.interest = false;
      this.bounce.awards = false;
      this.bounce.projects = false;
      this.bounce[prop] = true;
    },
    onResize(){
      if (window.innerWidth<992){
        this.showAllSections();
      }else{
        this.hideAllSections();
      }
    },
    showAllSections(){
      this.bounce.about = true;
      this.bounce.experience = true;
      this.bounce.education = true;
      this.bounce.skills = true;
      this.bounce.interest = true;
      this.bounce.awards = true;
      this.bounce.projects = true;
    },
    hideAllSections(){
      this.bounce.about = true;
      this.bounce.experience = false;
      this.bounce.education = false;
      this.bounce.skills = false;
      this.bounce.interest = false;
      this.bounce.awards = false;
      this.bounce.projects = false;
    }
  }
}
</script>
<style scoped>
body {
  font-family: 'Muli', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  padding-top: 54px;
  color: #868e96;
}

@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2rem;
}

p.lead {
  font-size: 1.15rem;
  font-weight: 400;
}

.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Saira Extra Condensed', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1.5rem;
}

.social-icons a {
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: #495057;
  color: #fff !important;
  border-radius: 100%;
  text-align: center;
  font-size: 1.5rem;
  line-height: 3.5rem;
  margin-right: 1rem;
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: #BD5D38;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item i:hover {
  color: #BD5D38;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

#sideNav .navbar-toggler:focus {
  outline-color: #d48a6e;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }

  #sideNav .navbar-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }

  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }

  #sideNav .navbar-brand .img-profile:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-animation: '';
    -moz-animation: none;
    -ms-animation: '';
    -o-animation: '';
    animation: '';
    transition: 0.5s;
  }

  #sideNav .navbar-collapse {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }

  #sideNav .navbar-collapse .navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }


  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
    cursor: pointer;
  }

  #sideNav .navbar-collapse .navbar-nav .nav-item:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
    -webkit-animation: '';
    -moz-animation: none;
    -ms-animation: '';
    -o-animation: '';
    animation: '';
    transition: 0.5s;
  }


  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
  max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }

  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

.bg-primary {
  background-color: #BD5D38 !important;
}

.text-primary {
  color: #BD5D38 !important;
}

a {
  color: #BD5D38;
}

a:hover, a:focus, a:active {
  color: #824027;
}

.bounce-enter-active {
  animation: bounce-in 1s;
}

/*.bounce-leave-active {*/
/*  animation: bounce-in 1s reverse;*/
/*}*/

@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.card-projects{
  height: 206px;
}

.card-image{
  min-height: 131px;
}

</style>

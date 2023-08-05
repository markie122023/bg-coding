<script lang="ts">
	import AboutBgc from '$lib/Components/Landing/AboutBGC.svelte';
import Education from '$lib/Components/Landing/Education.svelte';
import NavHeader from '$lib/Components/Landing/NavHeader.svelte';
  import PopularCourses from '$lib/Components/Landing/PopularCourses.svelte';
  import { onMount } from 'svelte';
  
  onMount(()=>{
    if (localStorage.getItem("theme-color") === "dark" || (!("theme-color" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
          document.documentElement.classList.add("is_dark");
        } 
        if (localStorage.getItem("theme-color") === "light") {
          document.documentElement.classList.remove("is_dark");
        } 
  })
</script>
<svelte:head>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/animate.min.css">
  <link rel="stylesheet" href="css/aos.min.css">
  <link rel="stylesheet" href="css/magnific-popup.css">
  <link rel="stylesheet" href="css/icofont.min.css">
  <link rel="stylesheet" href="css/slick.css">
  <link rel="stylesheet" href="css/swiper-bundle.min.css">
  <link rel="stylesheet" href="css/landing-style.css">

  <script defer src="js/modernizr-3.5.0.min.js"></script>
  <script defer src="js/jquery-3.6.0.min.js"></script>
  <script defer src="js/popper.min.js"></script>
  <script defer src="js/bootstrap.min.js"></script>
  <script defer src="js/isotope.pkgd.min.js"></script>
  <script defer src="js/slick.min.js"></script>
  <script defer src="js/jquery.meanmenu.min.js"></script>
  <script defer src="js/ajax-form.js"></script>
  <script defer src="js/wow.min.js"></script>
  <script defer src="js/jquery.scrollUp.min.js"></script>
  <script defer src="js/imagesloaded.pkgd.min.js"></script>
  <script defer src="js/jquery.magnific-popup.min.js"></script>
  <script defer src="js/waypoints.min.js"></script>
  <script defer src="js/jquery.counterup.min.js"></script>
  <script defer src="js/plugins.js"></script>
  <script defer src="js/swiper-bundle.min.js"></script>
  <script defer src="js/main.js"></script>
</svelte:head>

<main class="main_wrapper">

  <!-- header section start -->
 <NavHeader></NavHeader>
  <!-- header section end -->

  <!-- Mobile Menu Start Here -->
 
  <!-- Mobile Menu end Here -->

  <!-- theme fixed shadow -->
  <div>
      <div class="theme__shadow__circle"></div>
      <div class="theme__shadow__circle shadow__right"></div>
  </div>
  <!-- theme fixed shadow -->

  <!-- education__section__start -->
 

  <!-- education__section__end-->

<Education></Education>
  <!-- training__section__start -->
  <div class="trainingarea sp_bottom_20" data-aos="fade-up">
      <div class="container">
          <div class="row">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div class="trainingarea__wraper">
                      <div class="trainingarea__icon">
                          <i class="icofont-video-alt"></i>
                          <div class="trainingarea__content">
                              <h6><a href="#">Video Training</a></h6>
                              <p>With unlimited courses</p>
                          </div>
                      </div>

                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div class="trainingarea__wraper trainingarea__wraper__2">
                      <div class="trainingarea__icon">
                          <i class="icofont-business-man-alt-1"></i>
                          <div class="trainingarea__content">
                              <h6><a href="#">Expert Teaceher</a></h6>
                              <p>With unlimited courses</p>
                          </div>
                      </div>

                  </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                  <div class="trainingarea__wraper trainingarea__wraper__3">
                      <div class="trainingarea__icon">
                          <i class="icofont-book-alt"></i>
                          <div class="trainingarea__content">
                              <h6><a href="#">Versatile Course</a></h6>
                              <p>With unlimited courses</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- traning__section__end-->


  <!-- about__section__start -->
  <AboutBgc></AboutBgc>
  <!-- about__section__start -->

  <!-- populer__section__start -->
 <PopularCourses></PopularCourses>
  <!-- populer__section__end -->


  <!-- grid__section__start -->
  <div class="gridarea">
      <div class="container">
          <div class="row">
              <div class="section__title text-center" data-aos="fade-up">
                  <div class="section__title__button">
                      <div class="default__small__button">Course List</div>
                  </div>
                  <div class="section__title__heading heading__underline">
                      <h2>Perfect Online <span>Course</span>
                          <br> For Your Carrer</h2>
                  </div>
              </div>
          </div>


          <div class="row" data-aos="fade-up">
              <div class="col-xl-12">
                  <div class="gridfilter_nav grid__filter gridFilter">
                      <button class="active" data-filter="*">All</button>
                      <button data-filter=".filter1" >Computer Science</button>
                      <button data-filter=".filter2">Data science</button>
                      <button data-filter=".filter3">  Engineering </button>
                      <button data-filter=".filter4">Web Development</button>
                      <button data-filter=".filter5"> Architecture</button>
                  </div>
              </div>
          </div>



          <div class="row grid" data-aos="fade-up">
              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
                  <div class="gridarea__wraper">
                      <div class="gridarea__img">
                          <a href="course-details.html"><img src="images/grid_1.png" alt="grid"></a>
                          <div class="gridarea__small__button">
                              <div class="grid__badge">Data & Tech</div>
                          </div>
                          <div class="gridarea__small__icon">
                              <a href="#"><i class="icofont-heart-alt"></i></a>
                          </div>

                      </div>
                      <div class="gridarea__content">
                          <div class="gridarea__list">
                              <ul>
                                  <li>
                                      <i class="icofont-book-alt"></i> 23 Lesson
                                  </li>
                                  <li>
                                      <i class="icofont-clock-time"></i> 1 hr 30 min
                                  </li>
                              </ul>
                          </div>
                          <div class="gridarea__heading">
                              <h3><a href="course-details.html">Foundation course to under stand
                                  about softwere</a></h3>
                          </div>
                          <div class="gridarea__price">
                              $32.00 <del>/ $67.00</del>
                              <span> <del class="del__2">Free</del></span>

                          </div>
                          <div class="gridarea__bottom">

                              <a href="instructor-details.html">
                                  <div class="gridarea__small__img">
                                      <img src="images/grid_small_1.jpg" alt="grid">
                                      <div class="gridarea__small__content">
                                          <h6>Micle Jhon</h6>
                                      </div>
                                  </div>
                              </a>

                              <div class="gridarea__star">
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <span>(44)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter2 filter3">
                  <div class="gridarea__wraper">
                      <div class="gridarea__img">
                          <img src="images/grid_2.png" alt="grid">
                          <div class="gridarea__small__button">
                              <div class="grid__badge blue__color">Mechanical</div>
                          </div>
                          <div class="gridarea__small__icon">
                              <a href="#"><i class="icofont-heart-alt"></i></a>
                          </div>

                      </div>
                      <div class="gridarea__content">
                          <div class="gridarea__list">
                              <ul>
                                  <li>
                                      <i class="icofont-book-alt"></i> 29 Lesson
                                  </li>
                                  <li>
                                      <i class="icofont-clock-time"></i> 2 hr 10 min
                                  </li>
                              </ul>
                          </div>
                          <div class="gridarea__heading">
                              <h3><a href="#">Nidnies course to under stand
                                  about softwere</a></h3>
                          </div>
                          <div class="gridarea__price green__color">
                              $32.00<del>/$67.00</del>
                              <span>.Free</span>

                          </div>
                          <div class="gridarea__bottom">
                              <a href="instructor-details.html">
                                  <div class="gridarea__small__img">
                                      <img src="images/grid_small_2.jpg" alt="grid">
                                      <div class="gridarea__small__content">
                                          <h6>Rinis Jhon</h6>
                                      </div>
                                  </div>
                              </a>
                              <div class="gridarea__star">
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <span>(44)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter4 filter5">
                  <div class="gridarea__wraper">
                      <div class="gridarea__img">
                          <a href="course-details.html"><img src="images/grid_3.png" alt="grid"></a>
                          <div class="gridarea__small__button">
                              <div class="grid__badge pink__color">Development</div>
                          </div>
                          <div class="gridarea__small__icon">
                              <a href="#"><i class="icofont-heart-alt"></i></a>
                          </div>

                      </div>
                      <div class="gridarea__content">
                          <div class="gridarea__list">
                              <ul>
                                  <li>
                                      <i class="icofont-book-alt"></i> 25 Lesson
                                  </li>
                                  <li>
                                      <i class="icofont-clock-time"></i> 1 hr 40 min
                                  </li>
                              </ul>
                          </div>
                          <div class="gridarea__heading">
                              <h3><a href="course-details.html">Minws course to under stand
                                  about solution</a></h3>
                          </div>
                          <div class="gridarea__price">
                              $40.00 <del>/ $67.00</del>
                              <span> <del class="del__2">Free</del></span>

                          </div>
                          <div class="gridarea__bottom">

                              <a href="instructor-details.html">
                                  <div class="gridarea__small__img">
                                      <img src="images/grid_small_3.jpg" alt="grid">
                                      <div class="gridarea__small__content">
                                          <h6>Micle Jhon</h6>
                                      </div>
                                  </div>
                              </a>

                              <div class="gridarea__star">
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <span>(44)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter4">
                  <div class="gridarea__wraper">
                      <div class="gridarea__img">
                          <a href="course-details.html"><img src="images/grid_4.png" alt="grid"></a>
                          <div class="gridarea__small__button">
                              <div class="grid__badge green__color">Ui & UX Design</div>
                          </div>
                          <div class="gridarea__small__icon">
                              <a href="#"><i class="icofont-heart-alt"></i></a>
                          </div>

                      </div>
                      <div class="gridarea__content">
                          <div class="gridarea__list">
                              <ul>
                                  <li>
                                      <i class="icofont-book-alt"></i> 36 Lesson
                                  </li>
                                  <li>
                                      <i class="icofont-clock-time"></i> 3 hr 40 min
                                  </li>
                              </ul>
                          </div>
                          <div class="gridarea__heading">
                              <h3><a href="course-details.html">Design course to under stand
                                  about solution</a></h3>
                          </div>
                          <div class="gridarea__price">
                              $40.00 <del>/ $67.00</del>
                              <span> <del class="del__2">Free</del></span>

                          </div>
                          <div class="gridarea__bottom">

                              <a href="instructor-details.html">
                                  <div class="gridarea__small__img">
                                      <img src="images/grid_small_4.jpg" alt="grid">
                                      <div class="gridarea__small__content">
                                          <h6>Micle Robin</h6>
                                      </div>
                                  </div>
                              </a>

                              <div class="gridarea__star">
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <span>(44)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
                  <div class="gridarea__wraper">
                      <div class="gridarea__img">
                          <a href="course-details.html"><img src="images/grid_5.png" alt="grid"></a>
                          <div class="gridarea__small__button">
                              <div class="grid__badge orange__color">Data & Tech</div>
                          </div>
                          <div class="gridarea__small__icon">
                              <a href="#"><i class="icofont-heart-alt"></i></a>
                          </div>

                      </div>
                      <div class="gridarea__content">
                          <div class="gridarea__list">
                              <ul>
                                  <li>
                                      <i class="icofont-book-alt"></i> 36 Lesson
                                  </li>
                                  <li>
                                      <i class="icofont-clock-time"></i> 3 hr 40 min
                                  </li>
                              </ul>
                          </div>
                          <div class="gridarea__heading">
                              <h3><a href="course-details.html">Data course to under stand
                                  about solution</a></h3>
                          </div>
                          <div class="gridarea__price">
                              $40.00 <del>/ $67.00</del>
                              <span> <del class="del__2">Free</del></span>

                          </div>
                          <div class="gridarea__bottom">

                              <a href="instructor-details.html">
                                  <div class="gridarea__small__img">
                                      <img src="images/grid_small_5.jpg" alt="grid">
                                      <div class="gridarea__small__content">
                                          <h6>Micle Robin</h6>
                                      </div>
                                  </div>
                              </a>

                              <div class="gridarea__star">
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <span>(44)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter5 filter2">
                  <div class="gridarea__wraper">
                      <div class="gridarea__img">
                          <a href="course-details.html"><img src="images/grid_6.png" alt="grid"></a>
                          <div class="gridarea__small__button">
                              <div class="grid__badge yellow__color">Big Data</div>
                          </div>
                          <div class="gridarea__small__icon">
                              <a href="#"><i class="icofont-heart-alt"></i></a>
                          </div>

                      </div>
                      <div class="gridarea__content">
                          <div class="gridarea__list">
                              <ul>
                                  <li>
                                      <i class="icofont-book-alt"></i> 30 Lesson
                                  </li>
                                  <li>
                                      <i class="icofont-clock-time"></i> 3 hr 40 min
                                  </li>
                              </ul>
                          </div>
                          <div class="gridarea__heading">
                              <h3><a href="course-details.html">Big data to under stand
                                  about solution pacage</a></h3>
                          </div>
                          <div class="gridarea__price">
                              $40.00 <del>/ $67.00</del>
                              <span> <del class="del__2">Free</del></span>

                          </div>
                          <div class="gridarea__bottom">

                              <a href="instructor-details.html">
                                  <div class="gridarea__small__img">
                                      <img src="images/grid_small_5.jpg" alt="grid">
                                      <div class="gridarea__small__content">
                                          <h6>Micle Robin</h6>
                                      </div>
                                  </div>
                              </a>

                              <div class="gridarea__star">
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <i class="icofont-star"></i>
                                  <span>(44)</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  </div>

  <!-- grid__section__end -->

  <!-- register__section__start-->
  <div class="registerarea sp_top_90">
      <div class="container">
          <div class="row">
              <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                  <div class="registerarea__wraper">
                      <div class="section__title registerarea__section__title">
                          <div class="section__title__button">
                              <div class="default__small__button">Course List</div>
                          </div>
                          <div class="section__title__heading heading__underline">
                              <h2>Register Your <span>Account </span>Get free access to <small>60000</small> online course
                              </h2>
                          </div>
                      </div>
                      <div class="registerarea__content">
                          <div class="registerarea__video">
                              <div class="video__pop__btn">
                                  <a class="video-btn" href="https://www.youtube.com/watch?v=vHdclsdkp28"> <img src="images/video.png" alt="test"></a>
                              </div>
                              <div class="registerarea__para">
                                  <p>Learn Something new & Build Your Career From Anywhere In The World</p>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>


              <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-up">
                  <div class="registerarea__form">
                      <div class="registerarea__form__heading">
                          <h4>Fill Your Registration</h4>
                      </div>
                      <form action="#">
                          <input class="register__input" type="text" placeholder="Your Name">
                          <div class="row">
                              <div class="col-xl-6">
                                  <input class="register__input" type="text" placeholder="Email Address">
                              </div>
                              <div class="col-xl-6">
                                  <input class="register__input" type="text" placeholder="Phone">
                              </div>
                          </div>
                          <input class="register__input" type="text" placeholder="Address">
                          <textarea class="register__input textarea" name="#" id="#" cols="30" rows="10">Comment</textarea>
                          <div class="registerarea__button">
                              <a class="default__button" href="#">Sign Up
                                  <i class="icofont-long-arrow-right"></i>
                              </a>
                          </div>
                      </form>
                  </div>
              </div>

          </div>
      </div>
      <div class="registerarea__img">
          <img class="register__1" src="images/register__1.png" alt="register">
          <img class="register__2" src="images/register__2.png" alt="register">
          <img class="register__3" src="images/register__3.png" alt="register">
      </div>
  </div>
  <!-- register__section__start-->


  <!-- eventlistarea__section__start  -->
  <div class="eventlistarea sp_top_50 sp_bottom_100">

      <div class="container">
          <div class="eventlistarea__bg">
              <svg width="938" height="919" viewBox="0 0 938 919" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M926.588 668.954C845.79 881.299 578.082 976.498 328.645 881.587C79.2083 786.675 -57.5003 537.594 23.2975 325.25C104.095 112.905 842.659 -201.917 722.687 181.03C612.239 533.576 1007.39 456.609 926.588 668.954Z" fill="url(#paint0_linear_141_3)"/>
                  <defs>
                  <lineargradient id="paint0_linear_141_3" x1="621.24" y1="112.617" x2="328.645" y2="881.586" gradientUnits="userSpaceOnUse">
                  <stop offset="0.9999" stop-color="#FBAED8" stop-opacity="0.08"/>
                  <stop offset="1" stop-color="#B64AA4" stop-opacity="0"/>
                  </lineargradient>
                  </defs>
                  </svg>
          </div>
          <div class="row eventarea__wraper" data-aos="fade-up">
              <div class="col-xl-7 col-lg-7 col-md-7">
                  <div class="section__title eventarea__section__title">
                      <div class="section__title__button">
                          <div class="default__small__button">Event List</div>
                      </div>
                      <div class="section__title__heading heading__underline">
                          <h2>We Arrange <span>learning</span> Event for student</h2>
                      </div>
                  </div>
              </div>
              <div class="col-xl-5 col-lg-5 col-md-5">
                  <div class="eventarea__content">
                      <p>Forging relationships between multi to national governments and global NGOs begins.</p>
                  </div>
              </div>
          </div>

          <div class="row" data-aos="fade-up">
              <div class="col-xl-12">
                  <ul class="nav  tab__button__wrap" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                          <button class="single__tab__link active" data-bs-toggle="tab" data-bs-target="#projects__one" type="button">Monday</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__two" type="button">Tuesday</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__three" type="button">Wednesday</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__four" type="button">Thursday</button>
                      </li>
                      <li class="nav-item" role="presentation">
                          <button class="single__tab__link" data-bs-toggle="tab" data-bs-target="#projects__five" type="button">Friday</button>
                      </li>

                  </ul>

              </div>
          </div>

          <div class="tab-content tab__content__wrapper" id="myTabContent">
              <div class="tab-pane fade active show" id="projects__one" role="tabpanel" aria-labelledby="projects__one">
                  <div class="social__wrapper">
                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__1.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>


                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__2.png" alt="event">
                          </div>
                      </div>


                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__3.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>


                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__4.png" alt="event">
                          </div>
                      </div>


                  </div>
              </div>

              <div class="tab-pane fade" id="projects__two" role="tabpanel" aria-labelledby="projects__two">
                  <div class="social__wrapper">


                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__4.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__2.png" alt="event">
                          </div>
                      </div>

                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__3.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__1.png" alt="event">
                          </div>
                      </div>


                  </div>

              </div>

              <div class="tab-pane fade" id="projects__three" role="tabpanel" aria-labelledby="projects__three">
                  <div class="social__wrapper">


                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__4.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__2.png" alt="event">
                          </div>
                      </div>

                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__3.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__1.png" alt="event">
                          </div>
                      </div>


                  </div>
              </div>

              <div class="tab-pane fade" id="projects__four" role="tabpanel" aria-labelledby="projects__four">
                  <div class="social__wrapper">


                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__4.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__2.png" alt="event">
                          </div>
                      </div>

                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__3.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__1.png" alt="event">
                          </div>
                      </div>


                  </div>
              </div>

              <div class="tab-pane fade" id="projects__five" role="tabpanel" aria-labelledby="projects__five">
                  <div class="social__wrapper">


                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__4.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__2.png" alt="event">
                          </div>
                      </div>

                      <div class="single__event__wraper" data-aos="fade-up">
                          <div class="eventarea__img">
                              <img src="images/event__3.png" alt="event">
                          </div>
                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                      </div>

                      <div class="single__event__wraper single__event__wraper__2" data-aos="fade-up">

                          <div class="eventarea__content__wraper">
                              <div class="eventarea__list">
                                  <ul>
                                      <li>
                                          <i class="icofont-clock-time"></i> 10.00Am - 11.00 am
                                      </li>
                                      <li>
                                          <a href="instructor-details.html">Mirnsdo .H</a> - Event Speaker
                                      </li>
                                  </ul>
                              </div>
                              <div class="single__event__heading">
                                  <h4><a href="event-details.html">Forging relationships between multi to national governments and global.</a></h4>
                              </div>
                              <div class="single__event__button">
                                  <a href="event-details.html">Read More <i class="icofont-simple-right"></i></a>
                              </div>
                          </div>
                          <div class="eventarea__img">
                              <img src="images/event__1.png" alt="event">
                          </div>
                      </div>


                  </div>
              </div>

          </div>


      </div>
  </div>
  <!-- eventlistarea__section__end  -->


  <!-- testmonialarea__section__atart -->
  <div class="testmonialarea sp_top_100 sp_bottom_110">
      <div class="container">
          <div class="row" data-aos="fade-up">
              <div class="section__title text-center">
                  <div class="section__title__button">
                      <div class="default__small__button">Course List</div>
                  </div>
                  <div class="section__title__heading heading__underline">
                      <h2>Client <span>Testimonial</span></h2>
                  </div>
              </div>
          </div>
          <div class="row row__custom__class testimonial__slider__active default__arrow" data-aos="fade-up">
              <div class="col-xl-6 column__custom__class">
                  <div class="single__testimonial__wraper">
                      <div class="single__testimonial__inner">
                          <div class="testimonial__img">
                              <img src="images/testi_1.png" alt="testi">
                              <div class="testimonial__name">
                                  <h6>Mirnsdo Jons</h6>
                                  <span>Ui/Ux Designer</span>
                              </div>
                          </div>
                          <div class="testimonial__icon">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star dark__color"></i>
                          </div>
                      </div>

                      <div class="testimonial__content">
                          <p>The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas ure of the moment. Lorem </p>
                      </div>


                  </div>
              </div>
              <div class="col-xl-6 column__custom__class">
                  <div class="single__testimonial__wraper">
                      <div class="single__testimonial__inner">
                          <div class="testimonial__img">
                              <img src="images/testi_1.png" alt="testi">
                              <div class="testimonial__name">
                                  <h6>Mirnsdo Jons</h6>
                                  <span>Ui/Ux Designer</span>
                              </div>
                          </div>
                          <div class="testimonial__icon">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star dark__color"></i>
                          </div>
                      </div>

                      <div class="testimonial__content">
                          <p>The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas ure of the moment. Lorem </p>
                      </div>


                  </div>
              </div>
              <div class="col-xl-6 column__custom__class">
                  <div class="single__testimonial__wraper">
                      <div class="single__testimonial__inner">
                          <div class="testimonial__img">
                              <img src="images/testi_1.png" alt="testi">
                              <div class="testimonial__name">
                                  <h6>Mirnsdo Jons</h6>
                                  <span>Ui/Ux Designer</span>
                              </div>
                          </div>
                          <div class="testimonial__icon">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star dark__color"></i>
                          </div>
                      </div>

                      <div class="testimonial__content">
                          <p>The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas ure of the moment. Lorem </p>
                      </div>


                  </div>
              </div>
              <div class="col-xl-6 column__custom__class">
                  <div class="single__testimonial__wraper">
                      <div class="single__testimonial__inner">
                          <div class="testimonial__img">
                              <img src="images/testi_1.png" alt="testi">
                              <div class="testimonial__name">
                                  <h6>Mirnsdo Jons</h6>
                                  <span>Ui/Ux Designer</span>
                              </div>
                          </div>
                          <div class="testimonial__icon">
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star"></i>
                              <i class="icofont-star dark__color"></i>
                          </div>
                      </div>

                      <div class="testimonial__content">
                          <p>The other hand we denounce with righteou indg ation men who are so beguiled and demoraliz ed by the of the mo ment.Dislike men who are so beguiled and dems ed by the charms of pleas ure of the moment. Lorem </p>
                      </div>


                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- testmonialarea__section__end-->

  <!-- brand__section__start -->
  <div class="brandarea sp_bottom_60">
      <div class="container">
          <div class="row" data-aos="fade-up">
              <div class="col-xl-12">
                  <div class="section__title text-center">

                      <div class="section__title__heading heading__underline">
                          <h2>Relied on marketers trusted by engineers and Beloved by <span>Executives</span></h2>
                      </div>
                  </div>
              </div>

          </div>
          <div class="row">
              <div class="brandarea__wraper" data-aos="fade-up">
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_1.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_2.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_3.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_4.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_5.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_6.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_7.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_8.png" alt="brand"></a>
                  </div>
                  <div class="brandarea__img">
                      <a href="#"><img src="images/brand_9.png" alt="brand"></a>
                  </div>
              </div>
          </div>

      </div>
  </div>
  <!-- brand__section__end -->

  <!-- footer__section__start -->
  <div class="footerarea">
      <div class="container">
          <div class="footerarea__newsletter__wraper">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                      <div class="footerarea__logo">
                          <a href="#"><img src="images/logo_2.png" alt="logophoto"></a>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" data-aos="fade-up">
                      <div class="footerarea__newsletter">
                          <div class="footerarea__newsletter__input">
                              <form action="#">
                                  <input type="text" placeholder="Enter your email here">
                                  <div class="footerarea__newsletter__button">
                                      <a href="#">SUBSCRIBE NOW</a>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="footerarea__wrapper">
              <div class="row">
                  <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 " data-aos="fade-up">
                      <div class="footerarea__inner footerarea__about__us">
                          <div class="footerarea__heading">
                              <h3>About us</h3>
                          </div>
                          <div class="footerarea__content">
                              <p>orporate clients and leisure travelers has been relying on Groundlink for dependable safe, and professional chauffeured car end service in major cities across World.</p>
                          </div>
                          <div class="footerarea__icon">
                              <ul>
                                  <li><a href="//facebook.com"><i class="icofont-facebook"></i></a></li>
                                  <li><a href="//twitter.com"><i class="icofont-twitter"></i></a></li>
                                  <li><a href="//vimeo.com"><i class="icofont-vimeo"></i></a></li>
                                  <li><a href="//linkedin.com"><i class="icofont-linkedin"></i></a></li>
                                  <li><a href="//skype.com"><i class="icofont-skype"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 " data-aos="fade-up">
                      <div class="footerarea__inner">
                          <div class="footerarea__heading">
                              <h3>Usefull Links</h3>
                          </div>
                          <div class="footerarea__list">
                              <ul>
                                  <li>
                                      <a href="#">About Us</a>
                                  </li>
                                  <li>
                                      <a href="#">Teachers</a>
                                  </li>
                                  <li>
                                      <a href="#">Partner</a>
                                  </li>
                                  <li>
                                      <a href="#">Room-Details</a>
                                  </li>
                                  <li>
                                      <a href="#">Gallery</a>
                                  </li>
                              </ul>
                          </div>


                      </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 " data-aos="fade-up">
                      <div class="footerarea__inner footerarea__padding__left">
                          <div class="footerarea__heading">
                              <h3>Course</h3>
                          </div>
                          <div class="footerarea__list">
                              <ul>
                                  <li>
                                      <a href="#">Ui Ux Design</a>
                                  </li>
                                  <li>
                                      <a href="#">Web Development</a>
                                  </li>
                                  <li>
                                      <a href="#">Business Strategy</a>
                                  </li>
                                  <li>
                                      <a href="#">Softwere Development</a>
                                  </li>
                                  <li>
                                      <a href="#">Business English</a>
                                  </li>
                              </ul>
                          </div>


                      </div>
                  </div>

                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" data-aos="fade-up">
                      <div class="footerarea__right__wraper footerarea__inner">
                          <div class="footerarea__heading">
                              <h3>Recent Post</h3>
                          </div>
                          <div class="footerarea__right__list">
                              <ul>
                                  <li>
                                      <a href="#">
                                          <div class="footerarea__right__img">
                                              <img src="images/footer__1.png" alt="footerphoto">
                                          </div>
                                          <div class="footerarea__right__content">
                                              <span>02 Apr 2023 </span>
                                              <h6>Best Your Business</h6>
                                          </div>
                                      </a>
                                  </li>

                                  <li>
                                      <a href="#">
                                          <div class="footerarea__right__img">
                                              <img src="images/footer__2.png" alt="footerphoto">
                                          </div>
                                          <div class="footerarea__right__content">
                                              <span>02 Apr 2023 </span>
                                              <h6>Keep Your Business</h6>
                                          </div>
                                      </a>
                                  </li>

                                  <li>
                                      <a href="#">
                                          <div class="footerarea__right__img">
                                              <img src="images/footer__3.png" alt="footerphoto">
                                          </div>
                                          <div class="footerarea__right__content">
                                              <span>02 Apr 2023 </span>
                                              <h6>Nice Your Business</h6>
                                          </div>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="footerarea__copyright__wrapper">
              <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                      <div class="footerarea__copyright__content">
                          <p>© 2023 Powered by <a href="#">Edurock</a>. All Rights Reserved.</p>
                      </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" data-aos="fade-up">
                      <div class="footerarea__copyright__list">
                          <ul>
                              <li><a href="#">Terms of Use</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

      </div>
  </div>
  <!-- footer__section__end -->

</main>
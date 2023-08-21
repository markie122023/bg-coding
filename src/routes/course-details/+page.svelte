<script lang="ts">

  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import bgImg from "$lib/assets/images/course/page-banner.jpeg";
  import shape7 from "$lib/assets/images/course/shape-7.png";
  import authorPics from "$lib/assets/images/course/author-5.jpeg";
  import videoImg from "$lib/assets/images/course/sidebar-video.jpeg";
  import shape1 from "$lib/assets/images/course/shape-1.png";
  import { onMount } from "svelte";
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import { BASE_URL } from "$lib/env";
  import { goto } from "$app/navigation";
  let loading = true;
  let user: any = {};
  let course : any= {};
  let author: any ={};
  let token = "";
  const addCourse =()=>{
    sessionStorage.setItem("activeCourse", JSON.stringify(course));
    goto('/classroom');
  }
  onMount(async () => {
    if (sessionStorage.getItem("coding-user")) {
      user = JSON.parse(sessionStorage.getItem("coding-user") as string);
      token = sessionStorage.getItem("token") as string;
      course = JSON.parse(sessionStorage.getItem("activeCourse") as string);
      try {
        const resp = await HttpHelpher.get(
          `${BASE_URL}users/user-detail?id=${course.authorId}`
        );
        author = resp;
        console.log("author is", author);
        loading = false;
      } catch (error) {
        loading = false;
        console.log(error);
      }
    }
  });

</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/course/main.css">
</svelte:head>
<div class="container-scroller">
    <Nav profile="{user.profile_pics}"/>
    <div class="container-fluid page-body-wrapper">
        <Sidebar/>
        <div class="main-panel">
           {#if loading}
           <div class="text-center" style="margin-top:48vh">
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
          </div>
           {:else}
           <div class="content-wrapper">
            <div class="section page-banner-section" style="background-image: url({bgImg});">
                <div class="shape-1">
                    <img src="{shape7}" alt="shape7">
                </div>
                <div class="shape-2">
                    <img src="{shape1}" alt="shape1">
                </div>
                <div class="shape-3"></div>
                <div class="container">
                    <div class="course-details-banner-content">
            
                        <h2 class="title">{course.courseName} </h2>
            
                        <p class="text">{course.shortDescription}</p>
            
                        <div class="course-details-meta">
                            <div class="meta-action">
                                <div class="meta-author">
                                    <img src="{authorPics}" alt="Author">
                                </div>
                                <div class="meta-name">
                                    <p class="name">{author.first_name + " " + author.last_name}</p>
                                </div>
                            </div>
            
                            <div class="meta-action">
                                <h5 class="date">Last Update: <span>2/12/2023</span></h5>
                            </div>
                            <div class="meta-action">
                                <div class="rating">
                                    <div class="rating-star">
                                        <div class="rating-active" style="width: 100%;"></div>
                                    </div>
                                    <span>(4.5)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Course Details Banner Content End -->
                </div>
            </div>
            <!-- Page Banner End -->
            
            <!-- Course Details Start -->
            <div class="section section-padding">
                <div class="container">
            
                    <div class="row justify-content-between">
                        <div class="col-xl-7 col-lg-8">
            
                            <!-- Course Details Wrapper Start -->
                            <div class="course-details-wrapper">
            
                                <!-- Course Overview Start -->
                                <div class="course-overview">
                                    <h3 class="title">Course Overview</h3>
                                    <p>{course.description}</p>
                                </div>
                                <!-- Course Overview End -->
            
                                <!-- Course Learn List Start -->
                                <div class="course-learn-list card card-body">
                                    <h3 class="title">What you will learn</h3>
                                    <ul>
                                       
                                        {#each course.whatYouWillLearn as item}
                                        <li>{item}</li>
                                        {/each}
                                    </ul>
                                </div>
                                <!-- Course Learn List End -->
            
                                <!-- Course Lessons Start -->
                                <div class="course-lessons card card-body">
            
                                    <div class="lessons-top">
                                        <h3 class="title">Course Content</h3>
                                        <div class="lessons-time">
                                            <span>10 Lessons</span>
                                            <span>6h 40m</span>
                                        </div>
                                    </div>
            
                                    <!-- Course Accordion Start -->
                                    <div class="course-accordion accordion" id="accordionCourse">
                                        <div class="accordion-item">
                                            <button data-bs-toggle="collapse" data-bs-target="#collapseOne">Introduction </button>
                                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionCourse">
                                                <div class="accordion-body">
                                                    <ul class="lessons-list">
                                                        <!-- svelte-ignore a11y-invalid-attribute -->
                                                        <li><a href="#"><i class="fa fa-play-circle"></i> Greetings and Introductions <span>5:00</span></a></li>
                                                        <!-- svelte-ignore a11y-invalid-attribute -->
                                                        <li><a href="#"><i class="fa fa-play-circle"></i> 5 Business English Phrasal Verbs <span>3:17</span></a></li>
                                                        <!-- svelte-ignore a11y-invalid-attribute -->
                                                        <li><a href="#"><i class="fa fa-question-circle"></i> Quizz 1 : How to start?</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="accordion-item">
                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">Analysis</button>
                                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionCourse">
                                                <div class="accordion-body">
                                                    <ul class="lessons-list">
                                                        <li><a href=""><i class="fa fa-play-circle"></i> Greetings and Introductions <span>5:00</span></a></li>
                                                        <li><a href=""><i class="fa fa-play-circle"></i> 5 Business English Phrasal Verbs <span>3:17</span></a></li>
                                                        <li><a href=""><i class="fa fa-question-circle"></i> Quizz 1 : How to start?</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
            
                                        <div class="accordion-item">
                                            <button class="collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">Practical</button>
                                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionCourse">
                                                <div class="accordion-body">
                                                    <ul class="lessons-list">
                                                        <li><a href=""><i class="fa fa-play-circle"></i> Greetings and Introductions <span>5:00</span></a></li>
                                                        <li><a href=""><i class="fa fa-play-circle"></i> 5 Business English Phrasal Verbs <span>3:17</span></a></li>
                                                        <li><a href=""><i class="fa fa-question-circle"></i> Quizz 1 : How to start?</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Course Accordion End -->
            
                                </div>
                                <!-- Course Lessons End -->
            
                                <!-- Course Instructor Start -->
                                <div class="course-instructor">
                                    <h3 class="title">Course Instructor</h3>
            
                                    <div class="instructor-profile">
                                        <div class="profile-images">
                                            <img src="{authorPics}" alt="author">
                                        </div>
                                        <div class="profile-content">
                                            <h5 class="name">Alena Hedge</h5>
            
                                            <div class="profile-meta">
                                                <div class="rating">
                                                    <div class="rating-star">
                                                        <div class="rating-active" style="width: 100%;"></div>
                                                    </div>
                                                    <span>(4.6)</span>
                                                </div>
                                                <span class="meta-action"><i class="fa fa-play-circle"></i> 10 Tutorials</span>
                                                <span class="meta-action"><i class="far fa-user"></i> 134 Students</span>
                                            </div>
            
                                            <p>World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities </p>
            
                                        </div>
                                    </div>
                                </div>
                                <!-- Course Instructor End -->
            
                                <!-- Course Review Start -->
                                <div class="course-review">
                                    <h3 class="title">Review</h3>
            
                                    <!-- Review Rating Start -->
                                    <div class="review-rating">
            
                                        <div class="rating-box">
                                            <span class="count">5.0</span>
                                            <div class="rating-star">
                                                <div class="rating-active" style="width: 100%;"></div>
                                            </div>
                                            <p>Total 2 Ratings</p>
                                        </div>
                                        <div class="rating-percentage">
            
                                            <!-- Course Review Start -->
                                            <div class="single-rating-percentage">
                                                <span class="label">5 Stars</span>
                                                <div class="rating-line">
                                                    <div class="line-bar" style="width: 90%;"></div>
                                                </div>
                                                <span class="label">90%</span>
                                            </div>
                                            <!-- Course Review End -->
            
                                            <!-- Course Review Start -->
                                            <div class="single-rating-percentage">
                                                <span class="label">4 Stars</span>
                                                <div class="rating-line">
                                                    <div class="line-bar" style="width: 40%;"></div>
                                                </div>
                                                <span class="label">40%</span>
                                            </div>
                                            <!-- Course Review End -->
            
                                            <!-- Course Review Start -->
                                            <div class="single-rating-percentage">
                                                <span class="label">3 Stars</span>
                                                <div class="rating-line">
                                                    <div class="line-bar" style="width: 20%;"></div>
                                                </div>
                                                <span class="label">20%</span>
                                            </div>
                                            <!-- Course Review End -->
            
                                            <!-- Course Review Start -->
                                            <div class="single-rating-percentage">
                                                <span class="label">2 Stars</span>
                                                <div class="rating-line">
                                                    <div class="line-bar" style="width: 0%;"></div>
                                                </div>
                                                <span class="label">15%</span>
                                            </div>
                                            <!-- Course Review End -->
            
                                            <!-- Course Review Start -->
                                            <div class="single-rating-percentage">
                                                <span class="label">1 Stars</span>
                                                <div class="rating-line">
                                                    <div class="line-bar" style="width: 0%;"></div>
                                                </div>
                                                <span class="label">10%</span>
                                            </div>
                                            <!-- Course Review End -->
            
                                        </div>
            
                                    </div>
                                    <!-- Review Rating End -->
            
                                    <!-- Review Items Start -->
                                    <div class="review-items">
                                        <ul>
                                            <li>
                                                <!-- Single Review Start -->
                                                <div class="single-review card card-body">
                                                    <div class="review-author">
                                                        <img src="{authorPics}" alt="Author">
                                                    </div>
                                                    <div class="review-content">
                                                        <div class="review-top">
                                                            <h4 class="name">David Gea</h4>
                                                            <div class="rating-star">
                                                                <div class="rating-active" style="width: 100%;"></div>
                                                            </div>
                                                            <span class="date">5 Months Ago</span>
                                                        </div>
                                                        <p>World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class.</p>
                                                    </div>
                                                </div>
                                                <!-- Single Review End -->
                                            </li>
                                            <li>
                                                <!-- Single Review Start -->
                                                <div class="single-review card card-body">
                                                    <div class="review-author">
                                                        <img src="{authorPics}" alt="Author">
                                                    </div>
                                                    <div class="review-content">
                                                        <div class="review-top">
                                                            <h4 class="name">Andrew paker</h4>
                                                            <div class="rating-star">
                                                                <div class="rating-active" style="width: 80%;"></div>
                                                            </div>
                                                            <span class="date">4 Months Ago</span>
                                                        </div>
                                                        <p>World-class training and development programs developed by top teachers.
                                                            Build skills with courses, certificates, and degrees online from world-class.</p>
                                                    </div>
                                                </div>
                                                <!-- Single Review End -->
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- Review Items End -->
            
                                </div>
                                <!-- Course Review End -->
            
                            </div>
                            <!-- Course Details Wrapper End -->
            
                        </div>
            
                        <div class="col-lg-4">
                            <!-- Sidebar Wrapper Start -->
                            <div class="sidebar-details-wrap">
            
                                <!-- Sidebar Details Video Description Start -->
                                <div class="sidebar-details-video-description">
                                    <div class="sidebar-video">
                                        <img src="{course.image}" alt="video">
                                        <a href="https://www.youtube-nocookie.com/embed/Ga6RYejo6Hk" class="popup-video play"><i class="fa fa-play"></i></a>
                                    </div>
                                    <div class="sidebar-description">
                                        <div class="price-wrap">
                                            <span class="label">Price  :</span>
                                            <div class="price">
                                                <span class="sale-price">$49.99</span>
                                                <span class="regular-price">$102</span>
                                            </div>
                                        </div>
                                        <ul class="description-list">
                                            <li><i class="flaticon-wall-clock"></i> Duration <span>52 mins</span></li>
                                            <li><i class="fas fa-sliders-h"></i> Level <span>Expert</span></li>
                                            <li><i class="far fa-file-alt"></i> Lectures <span>4 Lectures</span></li>
                                            <li><i class="fas fa-language"></i> Language <span>English</span></li>
                                            <li><i class="far fa-user"></i> Enrolled <span>4 Enrolled</span></li>
                                        </ul>
                                        <button class="btn w-100" on:click={addCourse}>Start Course</button>
                                        <div class="share-link">
                                            <div class="link-icon">
                                                <i class="fas fa-share-alt"></i>
                                            </div>
                                            <a class="share-btn" href="#"> Share This Course</a>
                                            <div class="social-share-wrapper">
                                                <ul>
                                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Sidebar Details Video Description End -->
            
            
                            </div>
                            <!-- Sidebar Wrapper End -->
                        </div>
                    </div>
            
            
                </div>
            </div>
        </div>
           {/if}
        </div>

    </div>
</div>

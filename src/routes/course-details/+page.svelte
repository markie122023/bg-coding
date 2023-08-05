<script>
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
</script>

<div class="container-scroller">
  <Nav />
  <div class="container-fluid page-body-wrapper">
    <Sidebar />

    <div class="main-panel">
      <div class="content-wrapper">
        <header class="header">
          <div class="container">
            <h1>Introduction to Javascript</h1>
          </div>
        </header>
        <section class="course-details">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img
                  src="images/courses/girl.jpeg"
                  alt="Course 1"
                  class="course-image"
                />
              </div>
              <div class="col-md-6">
                <h2>Course 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  feugiat convallis urna ut varius. Integer ut sollicitudin
                  nisl. Quisque dignissim convallis sapien eu tempor. Phasellus
                  id suscipit nunc.
                </p>
                <p>
                  Quisque eleifend rutrum nisl, vel aliquet massa molestie et.
                  Vivamus mattis tellus eu libero fringilla rhoncus. Nam
                  ullamcorper lorem sed mauris fringilla, eu molestie lectus
                  volutpat. Nunc efficitur lorem non lacus efficitur fermentum.
                  Duis tincidunt libero dolor, vel laoreet lacus auctor vitae.
                </p>
                <a href="#" class="btn btn-primary">Enroll Now</a>
              </div>
            </div>
          </div>
        </section>
        <section class="reviews">
          <div class="container">
            <h3>Course Reviews</h3>
            <div class="review">
              <p class="author">John Doe</p>
              <p class="date">September 1, 2023</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                vel libero eget enim venenatis semper sed id elit. Quisque at
                mauris sed nisi interdum aliquet.
              </p>
            </div>
            <div class="review">
              <p class="author">Jane Smith</p>
              <p class="date">August 28, 2023</p>
              <p>
                Ut ac placerat massa. Maecenas ut lectus semper, tempus lectus
                vitae, aliquam nunc. Quisque sollicitudin lectus vel venenatis
                fermentum.
              </p>
            </div>
          </div>
        </section>
        <section class="related-courses">
            <div class="container">
              <h3>Related Courses</h3>
              <div class="row">
                <div class="col-md-4 mt-3">
                  <div class="card course-card">
                    <img src="images/courses/basic.jpeg" alt="Course 2" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">Course 2</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mt-3">
                  <div class="card course-card">
                    <img src="images/courses/girl.jpeg" alt="Course 3" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">Course 3</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 mt-3">
                  <div class="card course-card">
                    <img src="images/courses/js.jpeg" alt="Course 4" class="card-img-top">
                    <div class="card-body">
                      <h5 class="card-title">Course 4</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
</div>

<style>
      .header {
      background-color: #f8f9fa;
      padding: 20px;
    }

    .header h1 {
      color: #333;
    }

    /* Course details styles */
    .course-details {
      margin-top: 50px;
      animation: fade-in 0.5s ease-out;
    }

    .course-details .course-image {
      max-width: 100%;
      margin-bottom: 20px;
    }

    .course-details h2 {
      color: #333;
    }

    .course-details p {
      color: #666;
    }

    /* Reviews styles */
    .reviews {
      margin-top: 50px;
      animation: slide-up 0.5s ease-out;
    }

    .reviews h3 {
      color: #333;
    }

    .reviews .review {
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }

    .reviews .review .author {
      font-weight: bold;
    }

    .reviews .review .date {
      color: #999;
      font-size: 12px;
    }

    /* Related courses styles */
    .related-courses {
      margin-top: 50px;
      animation: slide-up 0.5s ease-out;
    }

    .related-courses h3 {
      color: #333;
    }

    .related-courses .course-card {
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .related-courses .course-card:hover {
      transform: translateY(-5px);
    }

    /* Footer styles */
    .footer {
      background-color: #333;
      color: #fff;
      padding: 20px;
    }

    /* Animations */
    @keyframes fade-in {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes slide-up {
      0% {
        transform: translateY(20px);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
</style>

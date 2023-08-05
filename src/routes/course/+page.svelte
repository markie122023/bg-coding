<script>
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";

</script>
<div class="container-scroller">
    <Nav/>
    <div class="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>

      <div class="main-panel">
        <div class="content-wrapper">
            <header class="header">
                <div class="container">
                  <h1>Courses List</h1>
                </div>
              </header>
        <div class="row">
            <div class="col-md-4">
              <div class="card course-card">
                <img src="images/courses/js.jpeg" class="card-img-top" alt="Course 1">
                <div class="card-body">
                  <h5 class="card-title">Course 1</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" class="btn btn-primary">Enroll Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card course-card">
                <img src="images/courses/basic.jpeg" class="card-img-top" alt="Course 2">
                <div class="card-body">
                  <h5 class="card-title">Course 2</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" class="btn btn-primary">Enroll Now</a>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card course-card">
                <img src="images/courses/girl.jpeg" class="card-img-top" alt="Course 3">
                <div class="card-body">
                  <h5 class="card-title">Course 3</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" class="btn btn-primary">Enroll Now</a>
                </div>
              </div>
            </div>
          </div>
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

    /* Course card styles */
    .course-card {
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .course-card:hover {
      transform: translateY(-5px);
    }
</style>
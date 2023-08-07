<script lang="ts">
  import Video from "$lib/Components/Classroom/Video.svelte";
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import codingImg from "$lib/assets/images/logo/coding.png";
</script>

<div class="container-scroller">
  <Nav />
  <div class="container-fluid page-body-wrapper">
    <Sidebar />
    <div class="main-panel">
      <div class="content-wrapper">
        <header class="header">
          <div class="container">
            <h1>E-Learning Platform</h1>
          </div>
        </header>

        <section class="course-content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 card">
                <h2>Course Title</h2>
                <Video />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  feugiat convallis urna ut aliquam. Suspendisse dapibus
                  faucibus mauris at pellentesque.
                </p>
              </div>
              <div class="col-md-4">
                <ul class="list-group">
                  <li class="list-group-item">
                    <span class="ti ti-video-camera" />
                    <span class="ml-2">An item</span>
                    <span class="ti ti-check float-right" />
                  </li>
                  <li class="list-group-item active">
                    <span class="ti ti-video-camera" />
                    <span class="ml-2">An item</span>
                  </li>
                  <li class="list-group-item">
                    <span class="ti ti-notepad" />
                    <span class="ml-2">An item</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section class="mt-3">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Course Tools</h4>
                <div class="row">
                  <div class="col-md-10 mx-auto">
                    <ul
                      class="nav nav-pills nav-pills-custom"
                      id="pills-tab-custom"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="pills-home-tab-custom"
                          data-bs-toggle="pill"
                          href="#pills-health"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Comment
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-profile-tab-custom"
                          data-bs-toggle="pill"
                          href="#pills-career"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Complain
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-contact-tab-custom"
                          data-bs-toggle="pill"
                          href="#pills-music"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Ask the Instructor
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-vibes-tab-custom"
                          data-bs-toggle="pill"
                          href="#pills-vibes"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Vibes
                        </a>
                      </li>
                    </ul>
                    <div
                      class="tab-content tab-content-custom-pill"
                      id="pills-tabContent-custom"
                    >
                      <div
                        class="tab-pane fade show active"
                        id="pills-health"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab-custom"
                      >
                        <div class="d-flex mb-4">
                          <img
                            src="{codingImg}"
                            class="w-25 h-100 rounded"
                            alt="sample image"
                          />
                          <img
                            src="{codingImg}"
                            class="w-25 h-100 ms-4 rounded"
                            alt="sample image"
                          />
                          <img
                            src="{codingImg}"
                            class="w-25 h-100 ms-4 rounded"
                            alt="sample image"
                          />
                        </div>
                        <p>
                          I'm not the monster he wants me to be. So I'm neither
                          man nor beast. I'm something new entirely. With my own
                          set of rules. I'm Dexter. Boo. Only you could make
                          those words cute. I'm thinking two circus clowns
                          dancing. You?
                        </p>
                        <p>
                          Under normal circumstances, I'd take that as a
                          compliment. Tell him time is of the essence. I'm
                          really more an apartment person. Finding a needle in a
                          haystack isn't hard when every straw is computerized.
                        </p>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-career"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab-custom"
                      >
                        <div class="media">
                          <img
                            class="me-3 w-25 rounded"
                            src="{codingImg}"
                            alt="sample image"
                          />
                          <div class="media-body">
                            <p>
                              I'm thinking two circus clowns dancing. You?
                              Finding a needle in a haystack isn't hard when
                              every straw is computerized. Tell him time is of
                              the essence. Somehow, I doubt that. You have a
                              good heart, Dexter.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-music"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab-custom"
                      >
                        <div class="media">
                          <img
                            class="me-3 w-25 rounded"
                            src="{codingImg}"
                            alt="sample image"
                          />
                          <div class="media-body">
                            <p>
                              I'm really more an apartment person. This man is a
                              knight in shining armor. Oh I beg to differ, I
                              think we have a lot to discuss. After all, you are
                              a client. You all right, Dexter?
                            </p>
                            <p>
                              I'm generally confused most of the time. Cops,
                              another community I'm not part of. You're a
                              killer. I catch killers. Hello, Dexter Morgan.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-vibes"
                        role="tabpanel"
                        aria-labelledby="pills-vibes-tab-custom"
                      >
                        <div class="media">
                          <img
                            class="me-3 w-25 rounded"
                            src="{codingImg}"
                            alt="sample image"
                          />
                          <div class="media-body">
                            <p>
                              This man is a knight in shining armor. I feel like
                              a jigsaw puzzle missing a piece. And I'm not even
                              sure what the picture should be. Somehow, I doubt
                              that. You have a good heart, Dexter. Keep your
                              mind limber.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
  /* Custom CSS styles */

  /* Header styles */
  .header {
    background-color: #f8f9fa;
    padding: 20px;
  }

  .header h1 {
    color: #333;
  }

  /* Course content styles */
  .course-content {
    margin-top: 50px;
  }

  .course-content h2 {
    color: #333;
  }

  .course-content p {
    color: #666;
  }

  .course-content .video {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .course-content .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .ti-video-camera {
    color: red;
  }
  .ti-notepad {
    color: yellow;
  }
  .ti-check {
    color: green;
  }
  .ti {
    font-size: 17px;
    font-weight: 500;
  }
</style>

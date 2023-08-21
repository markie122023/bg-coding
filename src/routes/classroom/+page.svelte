<script lang="ts">
  import Video from "$lib/Components/Classroom/Video.svelte";
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import codingImg from "$lib/assets/images/logo/coding.png";
  import faces from "$lib/assets/images/faces/face1.jpg";
  import { BASE_URL } from "$lib/env";
  import { onMount } from "svelte";
  let user: any = {};
  let token = '';
  let course: any = {};
  let author: any = {};
  let loading = true;
  let activeCategory = 1;
  let activeItem = 0;
  let courseItems: any[] = [];
  onMount(async () => {
    if (sessionStorage.getItem("coding-user")) {
      user = JSON.parse(sessionStorage.getItem("coding-user") as string);
      token = sessionStorage.getItem("token") as string;
      course = JSON.parse(sessionStorage.getItem("activeCourse") as string);
      console.log("the course ", course);
      activeCategory = 1;
      try {
        courseItems = await HttpHelpher.get(`${BASE_URL}coding/course-items?id=${course._id}`);
        console.log("course Items:", courseItems);
        loading = false;
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
  <title>Inntroduction to HTML</title>
</svelte:head>
<div class="container-scroller">
  <Nav profile="{user.profile_pics}"/>
  <div class="container-fluid page-body-wrapper">
    <Sidebar />
    <div class="main-panel">
     {#if loading}
       <!-- content here -->
     {:else}
     <div class="content-wrapper">

      <section class="course-content mt-n4">
        <div class="container">
          <div class="row">
            <div class="col-md-8 card">
              <h3>What is HTML</h3>
              <Video src="{courseItems[activeCategory].items[activeItem].courseItemContent}"/>
              
            </div>
            <div class="col-md-4">
              <div class="accordion" id="accordionExample">
                {#each courseItems as category}
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#{category._id}" aria-expanded="false" aria-controls="collapseOne">
                      {category.categoryName}
                    </button>
                  </h2>
                  <div id="{category._id}" class="accordion-collapse collapse " data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <ul style="margin-left:-15px; margin-right:-15px" class="list-group">
                       {#each category.items as courseItem}
                       <li class="list-group-item">
                        {#if courseItem.courseItemType == 'video'}
                        <span class="ti ti-video-camera" />
                        {:else if courseItem.courseItemType == 'text'}
                        <span class="ti ti-video-camera" />
                           {:else}
                           <span class="ti ti-video-camera" />
                        {/if}
                        <span class="ml-2">{courseItem.courseItemName}</span>
                        <span class="ti ti-check float-right" />
                      </li>
                       {/each}
                        
                      </ul>
                    </div>
                  </div>
                </div>
                {/each}
                <!-- End of accordian -->
              </div>
             
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
                        href="#pills-forum"
                        role="tab"
                        aria-controls="pills-forum"
                        aria-selected="false"
                      >
                        Forum
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
                      id="pills-forum"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab-custom"
                    >
                      <div class="row">
                        <div class="col-12 card">
                          <div class="card-body">
                            <div class="chat-box">
                              <div class="message">
                                <img style="width:20px; border-radius:50%" src="{faces}" alt="User 1" class="avatar">
                                <div class="message-content">
                                  <span class="user">User1:</span>
                                  <span class="text">Hey, how's it going?</span>
                                </div>
                              </div>
                             
                              <!-- More messages go here -->
                            </div>
                          </div>
                          <div class="card-footer">
                            <div class="input-group">
                              <input type="text" class="form-control" placeholder="Type your message...">
                              <button class="btn btn-primary">Send</button>
                            </div>
                          </div>
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
     {/if}
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

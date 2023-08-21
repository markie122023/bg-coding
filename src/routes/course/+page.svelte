<script lang="ts">
  import { goto } from "$app/navigation";
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import { BASE_URL } from "$lib/env";
  import { onMount } from "svelte";
  let loading = true;
  let user: any = {};
  let token = "";
  let courses: any[] = [];
  const gotoDetails =(course: any)=>{
    sessionStorage.setItem("activeCourse",JSON.stringify(course))
    goto("/course-details");
  }
  onMount(async () => {
    
    if (sessionStorage.getItem("coding-user")) {
      user = JSON.parse(sessionStorage.getItem("coding-user") as string);
      token = sessionStorage.getItem("token") as string;
      try {
        let query = location.search;
        let ary = query.split("=");
        query = ary[ary.length - 1];
        const resp = await HttpHelpher.get(
          `${BASE_URL}coding/courses?id=${query}`
        );
        courses = resp;
        loading = false;
      } catch (error) {
        loading = false;
        console.log(error);
      }
    }
  });
</script>

<div class="container-scroller">
  <Nav profile="{user.profile_pics}"/>
  <div class="container-fluid page-body-wrapper">
    <Sidebar />

    <div class="main-panel">
      <div class="content-wrapper">
        <header class="header">
          <div class="container">
            <h1>Courses List</h1>
          </div>
        </header>
       {#if loading}
       <div class="text-center" style="margin-top:48vh">
        <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
      </div>
       {:else}
       <div class="row">
        {#each courses as course}
          <div class="col-md-4 col-sm-6 col-12">
            <div class="card course-card">
              <img
                src={course.image}
                class="card-img-top"
                alt={course.courseName}
              />
              <div class="card-body">
                <h5 class="card-title">{course.courseName}</h5>
                <p class="card-text">{course.description}</p>
                <button on:click={()=>{gotoDetails(course)}} class="btn btn-primary"
                  >Enroll Now</button
                >
              </div>
            </div>
          </div>
        {/each}
      </div>
       {/if}
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

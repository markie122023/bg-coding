<script lang="ts">
    import Footer from "$lib/Components/Navigations/Footer.svelte";
    import Nav from "$lib/Components/Navigations/Nav.svelte";
    import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
    import { onMount } from "svelte";
    import { NotificationHelpher } from "$lib/Helphers/notifications.helpher";
    import Loader from "$lib/Components/Utils/Loader.svelte";
  import QuickActions from "$lib/Components/Home/QuickActions.svelte";
  import StudyTime from "$lib/Components/Graphs/StudyTime.svelte";
  import Slider from "$lib/Components/Home/Slider.svelte";
    let loader = false;
    let user: any = {};
    let token = '';
  
    onMount(() => {
      if(sessionStorage.getItem('coding-user')){
        user = JSON.parse(sessionStorage.getItem('coding-user') as string);
        token = sessionStorage.getItem("token") as string;
      }
      
    });
  </script>
  <svelte:head>
    <title>Braingainspa Coding App :: Dashboard</title>
  </svelte:head>

{#if loader}
<Loader></Loader>
{:else}
<div class="container-scroller">
    <Nav profile="{user.profile_pics}"/>
    <div class="container-fluid page-body-wrapper">
      <Sidebar />

      <div class="main-panel">
        <div class="content-wrapper">

          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Welcome {user.user_name}</h3>
                  <h6 class="font-weight-normal mb-0">
                    All systems are running smoothly! You have <span
                      class="text-primary">3 unread alerts!</span
                    >
                  </h6>
                </div>
                <div class="col-12 col-xl-4">
                  <div class="justify-content-end d-flex">
                    <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                      <button
                        class="btn btn-sm btn-light bg-white dropdown-toggle"
                        type="button"
                        id="dropdownMenuDate2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        <i class="mdi mdi-calendar" /> Today (10 Jan 2021)
                      </button>
                      <div
                        class="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuDate2"
                      >
                        <a class="dropdown-item" href="#">January - March</a>
                        <a class="dropdown-item" href="#">March - June</a>
                        <a class="dropdown-item" href="#">June - August</a>
                        <a class="dropdown-item" href="#">August - November</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <Slider></Slider>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-7">
            <QuickActions></QuickActions>
            </div>
            <div class="col-sm-5" >
                <div>
                    <StudyTime></StudyTime>
                </div>

            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->

        <Footer />
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>

{/if}
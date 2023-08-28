<script lang="ts">
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import { SessionHelpher } from "$lib/Helphers/session.helpher";
  import onlineCourse from "$lib/assets/images/illustrator/online_learning.svg";
  import { BASE_URL } from "$lib/env";
  import { onMount } from "svelte";

  let loading = true;
  let user: any = {};
  let token = "";
      onMount(async () => {
    if (SessionHelpher.getUserDetails()) {
      user = SessionHelpher.getUserDetails() ;
      token = SessionHelpher.getToken() as string;
      const resp = await HttpHelpher.get(
          `${BASE_URL}coding/user-courses`
        );
      console.log("the resp here", resp);
    }
    else{
      location.href = "/login";
    }
  });
</script>

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
            <div class="container">
                <div class="row card card-body bg-success mt-3" style="background: no-repeat right url('{onlineCourse}');">
                    <div class="col-12">
                        <p><strong>Create something new.</strong></p>
                        <p><small>Programming allows you to create something new, whether it's a small program or a large-scale application.
                             When you see your code come to life, it's a very rewarding feeling.</small></p>
                    </div>
                </div>
            </div>

            {/if}
        </div>

    </div>
</div>


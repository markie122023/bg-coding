<script lang="ts">
  import logo from "$lib/assets/images/logo/logo-mini.svg";
  import angular from "$lib/assets/images/login/angular.jpeg";
  import akara from "$lib/assets/images/course/ankara.jpeg";
  import python from "$lib/assets/images/course/Python.jpeg";
  import svelte from "$lib/assets/images/login/svelte.jpeg";
  import scratch from "$lib/assets/images/login/scratch.png";
  import { NotificationHelpher } from "$lib/Helphers/notifications.helpher";
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import { BASE_URL } from "$lib/env";
  import { onMount } from "svelte";
  let email = "";
  let password = "";
  let bgImg = "";
  const bgImgs = [python, angular, svelte, scratch];
  const index = Math.floor(Math.random() * bgImgs.length);
    bgImg = bgImgs[index];
  let isLoggingIn = false;
  const login = async () => {
    isLoggingIn = true;
    NotificationHelpher.alert("logging in", window, "info", "loading...");
    const resp = await HttpHelpher.post(BASE_URL + "accounts/login", {
      email,
      password,
    });
    if (resp) {
      console.log(resp);
      if (resp.status == "400") {
        NotificationHelpher.alert(resp.message, window, "error", "error");
        isLoggingIn = false;
      } else if (resp.status == "200") {
        console.log('the far away here',resp.data);
        if(resp.data.type == 'student' || resp.data.type == "graduate"){
          NotificationHelpher.alert(resp.message, window, "success", "ok");
        isLoggingIn = false;
        sessionStorage.setItem("coding-user",JSON.stringify(resp.data.user));
        sessionStorage.setItem("token", resp.data.token);
       location.href = "/dashboard";
        }
        else{
          isLoggingIn = false;
          NotificationHelpher.alert("you can only access this with a student account", window, 'error', "error");
        }
        
      } else {
        NotificationHelpher.alert(
          "something went wrong",
          window,
          "success",
          "ok"
        );
        isLoggingIn = false;
      }
    }
  };

  onMount(()=>{
   
  })
</script>

<svelte:head>
  <title>BrainGainspa: Coding Login</title>
</svelte:head>
<div class="container-scroller">
  <div class="container-fluid page-body-wrapper full-page-wrapper"  style="background-image: url({bgImg});background-size: cover;">
    <div
      class="content-wrapper d-flex align-items-center auth px-0"
      style="background-image: url({bgImg});background-size: cover;"
    >
      <div class="row w-100 mx-0">
        <div class="col-lg-4 mx-auto">
          <div class="auth-form-light text-left py-5 px-4 px-sm-5">
            <div class="brand-logo text-center">
              <img src={logo} alt="logo" />
            </div>
            <h4 class="mt-0">Sign In, to continue</h4>
            <form class="pt-3">
              <div class="form-group">
                <input
                  type="email"
                  bind:value={email}
                  required
                  class="form-control
                  form-control-lg"
                  id="exampleInputEmail1"
                  placeholder="email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  bind:value={password}
                  required
                  class="form-control form-control-lg"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="mt-3">
                <button
                  disabled={isLoggingIn}
                  on:click={login}
                  style="background-image: url({akara});font-weight:800"
                  class="btn btn-block btn-primary btn-lg
                    auth-form-btn"
                  >{isLoggingIn ? "SIGNING IN..." : "SIGN IN"}
                </button>
              </div>
              <div
                class="my-2 d-flex justify-content-between align-items-center"
              >
                <div class="form-check">
                  <label class="form-check-label text-muted">
                    <input type="checkbox" class="form-check-input" />
                    Keep me signed in
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- content-wrapper ends -->
  </div>
  <!-- page-body-wrapper ends -->
</div>

<style>
  .btn {
    border: none;
    background-size: cover;
    font-size: larger;
  }
  .page-body-wrapper {
    background-size: cover;
  }
</style>

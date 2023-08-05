<script>
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
</script>
<svelte:head>
    <title>BGCoding:: Specialization page</title>
</svelte:head>
<div class="container-scroller">
  <Nav />
  <div class="container-fluid page-body-wrapper">
    <Sidebar />

    <div class="main-panel">
      <div class="content-wrapper">
        <div class="row">
          <div class="col-12 grid-margin stretch-card panel">
            <div class="card card-body">
                <div class="row">
                  <div class="col">
                    <h3>Whiz-Kid Specilization</h3>
                    <p >Get ready to code amazing projects, games, and interactive stories. <br>
                        Challenge your skills and watch your coding prowess grow!</p>
                  </div>
             
              </div>
            </div>
          </div>
        </div>

        <div class="row">
            <div class="col-12">
                <h3>Whiz-Kid Projects</h3>
            </div>
            <div class="col-3">
                <div class="card">

                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  /* Default styles for desktop */
.panel {
  background-color: purple;
  color: white;
  border-radius: 12px;
}

.panel > .card {
  background-color: purple;
  color: white;
  background-image: url('../images/illustrators/designer.svg');
  background-position: right;
  background-repeat: no-repeat;
}

.panel > .card >  div > div > h3 {
  color: white;
}

/* Media query for mobile devices */
@media (max-width: 767px) {
  .panel > .card {
    background-size: 30%; /* Adjust the background size as per your requirement */
    background-position: center right; /* Align the background image to the center-right */
  }
}

</style>

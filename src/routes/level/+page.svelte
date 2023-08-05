<script>
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
</script>

<svelte:head>
  <title>Braingainspa coding :: Pick a Level</title>
</svelte:head>
<div class="container-scroller">
  <Nav />
  <div class="container-fluid page-body-wrapper">
    <Sidebar />

    <div class="main-panel">
      <div class="content-wrapper" >
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="uk-card uk-card-success uk-hover">
                        <div class="uk-card-header" style="background-image: url('images/logo/green.jpeg');">
                        
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title" style="color:white">Rockie Kid</h3>
                            <p><strong>AGE GROUP: </strong> 5-7 years old</p>
                            <p>This level is for the youngest coding enthusiasts. 
                                Here, you'll explore the magical world of coding through interactive stories,
                                 and colorful puzzles. Learn the basics of coding concepts like sequencing, patterns,
                                 and logical thinking in a playful and exciting environment. </p>
                            <p><button style="color: white" class="uk-button uk-button-default float-right">Pick Package</button></p>
                        </div>
                        
                    </div>
                </div>

                <div class="col-6">
                    <div class="uk-card uk-card-yellow uk-hover">
                        <div class="uk-card-header" style="background-image: url('images/logo/greeny.jpeg');">
                        
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title" style="color:white"> Whizkid </h3>
                            <p><strong>AGE GROUP: </strong> 8-10 years old</p>
                            <p>Congratulations on becoming a Whizkid coder! Here, you'll dive deeper
                                into the world of coding and explore more complex concepts. Get ready to code amazing projects,
                                games, and interactive stories. 
                                Challenge your skills and watch your coding prowess grow! </p>
                            <p><button style="color: white" class="uk-button uk-button-default float-right">Pick Package</button></p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <div class="uk-card uk-card-pink uk-hover">
                        <div class="uk-card-header" style="background-image: url('images/logo/pink.jpeg');">
                        
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title" style="color:white">Inventor</h3>
                            <p><strong>AGE GROUP: </strong> 11-15 years old</p>
                            <p>As an Inventor coder, you are on the path to greatness! Here, you'll 
                                take on more challenging coding projects and unleash your creativity. 
                                Dive into the world of app development,
                                 animations, and more. Your coding skills will reach new heights! </p>
                            <p><button style="color: white" class="uk-button uk-button-default float-right">Pick Package</button></p>
                        </div>
                        
                    </div>
                </div>

                <div class="col-6">
                    <div class="uk-card uk-card-purple uk-hover">
                        <div class="uk-card-header" style="background-image: url('images/logo/purple.jpeg');">
                        
                        </div>
                        <div class="uk-card-body">
                            <h3 class="uk-card-title" style="color:white">Professional</h3>
                            <p><strong>AGE GROUP: </strong> 16+ years old</p>
                            <p>You are now a coding pro, ready to conquer the digital realm! In this advanced level, 
                                you'll tackle sophisticated coding challenges and build real-world applications.
                                 Hone your skills, collaborate on projects, and leave your mark on the coding community! </p>
                            <p><button style="color: white" class="uk-button uk-button-default float-right">Pick Package</button></p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
       
      </div>
    </div>
  </div>
</div>

<style>
    .uk-card-header {
        background-size: cover;
        height: 300px;
    }
    .uk-card-success {
        background-color: green;
        color: white;
    }
    .uk-card-yellow {
        background-color: yellowgreen;
        color: white;
    }
    .uk-card-pink {
        background-color: pink;
        color: white;
    }
    .uk-card-purple {
        background-color: purple;
        color: white;
    }
</style>

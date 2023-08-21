<script lang="ts">
  import { onMount } from "svelte";
let player: any ={};
let win: any ={};
export let src= 'videos/joy.mp4';
onMount(()=>{
    win = window;
    player = new win.Plyr('#player');
})

</script>

<svelte:head>
    
  <link rel="stylesheet" href="https://cdn.plyr.io/3.6.4/plyr.css">

  <script src="https://cdn.plyr.io/3.6.4/plyr.js"></script>

</svelte:head>
<div class="video">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="player" playsinline controls>
    <source {src} type="video/mp4" />
    <!-- Add more video sources as needed -->
  </video>
</div>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
  feugiat convallis urna ut aliquam. Suspendisse dapibus
  faucibus mauris at pellentesque.
</p>
<style>
    #player{
        height: 500px;
    }
</style>

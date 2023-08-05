<script lang="ts">
  import { onMount } from "svelte";
let player: any ={};
let win: any ={};
onMount(()=>{
    win = window;
    player = new win.Plyr('#player');
})

</script>

<svelte:head>
    
  <link rel="stylesheet" href="https://cdn.plyr.io/3.6.4/plyr.css">

  <script defer src="https://cdn.plyr.io/3.6.4/plyr.js"></script>

</svelte:head>
<div class="video">
  <!-- svelte-ignore a11y-media-has-caption -->
  <video id="player" playsinline controls>
    <source src="videos/joy.mp4" type="video/mp4" />
    <source src="videos/joy.mp4" type="video/mp4" />
    <!-- Add more video sources as needed -->
  </video>
</div>

<style>
    #player{
        height: 500px;
    }
</style>

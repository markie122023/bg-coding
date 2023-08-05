<script lang="ts">
  import { onMount } from "svelte";
  let win: any = {};
  let slide: any = {};
  const slides = [{
    image: 'images/faces/background.jpeg'
  }, {
    image: 'images/faces/background.jpeg'
  },
  {
    image: 'images/faces/pink.jpeg'
  },
  {
    image: 'images/faces/background.jpeg'
  },
  {
    image: 'images/faces/background.jpeg'
  }]
  onMount(() => {
    win = window;
    slide = new win.Splide(".splide", {
      type: "loop",
      perPage: 3,
      height: "10rem",
      gap: "3rem",
      breakpoints: {
        768: {
          perPage: 1,
        },
      },
      pagination: true, // Optional: Hide pagination dots
    }).mount();
    console.log("the slide here:", slide);
  });
</script>

<svelte:head>
  <script
    defer
    src="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js
"
  ></script>
  <link
    href="
https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css
"
    rel="stylesheet"
  />
</svelte:head>

<div class="splide mt-2 mb-2 mb-sm-0">
  <div class="splide__track">
    <ul class="splide__list">
     {#each slides as slide}

     <li class="splide__slide">
        <div
          class="row cap"
          style="background-image:url({slide.image});"
        >
          <div class="col mb-4">
            <p>some text here</p>
            <button class="btn btn-primary">a button here</button>
          </div>
        </div>
      </li>
     {/each}
     
   
    </ul>
  </div>
</div>

<style>
  .cap {
    border-radius: 12px;
    height: 100%;
    background-size: cover;
  }
</style>

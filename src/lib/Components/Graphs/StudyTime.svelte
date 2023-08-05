<script lang="ts">
  import { onMount } from "svelte";
  let win: any = {};
  onMount(() => {
    win = window;
    console.log(win);
    const data = {
      labels: ["mon", "tue", "wed", "thu", "fri", 'sat', 'sun'],
      series: [[12, 19, 3, 5, 2, 4,17]],
    };

    const options = {
      axisX: {
        showGrid: false,
      },
      height: "300px",
      width: "100%",
    };

    new win.Chartist.Bar("#chart", data, options);
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
  />
  <script
    src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"
  ></script>
</svelte:head>

<div class="card card-body">
  <h5 class="card-title">Average Study Time</h5>
  <div>
    
  </div>
  <div id="chart" />
</div>

<style>
  .ct-series-a .ct-bar {
    /* Colour of your bars */
    stroke: blue;
    /* The width of your bars */
    stroke-width: 20px;
    /* Yes! Dashed bars! */
    stroke-dasharray: 20px;
    /* Maybe you like round corners on your bars? */
    stroke-linecap: round;
  }
</style>


<script lang="ts">
  import { goto } from "$app/navigation";
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import { BASE_URL } from "$lib/env";
  import { onMount } from "svelte";
  let levels: any[] = [];
let user: any = {};
let token = '';
let loading = true;
  const gotoCourse =(rank: number)=>{
    console.log("the rank here", rank);
    goto("/course?id=" + rank);
  }

onMount(async ()=>{
    if(sessionStorage.getItem('coding-user')){
        user = JSON.parse(sessionStorage.getItem('coding-user') as string);
        token = sessionStorage.getItem("token") as string;
        try {
            const resp = await HttpHelpher.get(`${BASE_URL}coding/levels`);
            console.log(resp, 'this is the response of all courses'); 
            levels = resp;
            loading = false;
        } catch (error) {
            loading = false;
            console.log(error);
        }
    }
})
</script>

<svelte:head>
  <title>Braingainspa coding :: Pick a Level</title>
</svelte:head>
<div class="container-scroller">
  <Nav profile="{user.profile_pics}"/>
  <div class="container-fluid page-body-wrapper">
    <Sidebar />

    <div class="main-panel">
      <div class="content-wrapper" >
       {#if loading}
      <div class="text-center" style="margin-top:45vh">
        <div class="spinner-grow text-success" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
      </div>
       {:else}
       <div class="container">
        <div class="row">
           {#each levels as level}
           <div class="col-sm-6 mt-3 col-12">
            <div class="uk-card {level.card_color} uk-hover">
                <div class="uk-card-header" style="background-image: url({level.image});">
                
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title" style="color:white">{level.level_name}</h3>
                    <p><strong>AGE GROUP: </strong> {level.age_range}</p>
                    <p>{level.level_description} </p>
                    <p><button on:click={()=>{gotoCourse(level.id)}} style="color: white" class="uk-button uk-button-default float-right">Pick Package</button></p>
                </div>
                
            </div>
        </div>
           {/each}

           
        </div>
      
    </div>
       {/if}
       
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

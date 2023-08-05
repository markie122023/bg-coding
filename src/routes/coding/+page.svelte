<script lang="ts">
  import Nav from "$lib/Components/Navigations/Nav.svelte";
  import Sidebar from "$lib/Components/Navigations/Sidebar.svelte";
  import Loader from "$lib/Components/Utils/Loader.svelte";
  import { NotificationHelpher } from "$lib/Helphers/notifications.helpher";
  import { onMount } from "svelte";
  import { HttpHelpher } from '$lib/Helphers/http.helpher.js';

  let loader = true;
  let win: any = {};
  let language = "javascript";
  let codeUrl = "";
  let editor: any = {};
  let themes = ["lucario", "material", "default", "juejin", "abbott", "bespin"];
  let theme = "";
  let codebase = `//follow the instruction as stated below`;
  let consoleElement: any = {};
  async function executeCommand() {
    NotificationHelpher.alert('executing code',window,'info','building');

    try {
    const res = await HttpHelpher.post(codeUrl + `/vm/javascript`,{code: codebase});
    if(res){
        res.isError? NotificationHelpher.alert('seems like you did something wrong', window, 'error','ooops!!') :
        NotificationHelpher.alert('code ran successfully', window, 'success', 'good');
    }
    // build the response again :::
    let result = ``;
    res.console.forEach((e: string)=>{
       result = result +  `<span style='color: white'> ${e}</span> <br>`
    });
    result += res.isError ? `<span style='color: red'> ${res.result}</span> <br>`: `<span style='color: green'> ${res.result}</span> <br>`
      logToConsole(result);
    } catch (error: any) {
      let errorMessage = `<span style='color: red'>Error: ${error.message}</span>`;
      logToConsole(errorMessage);
    }
  }

  function logToConsole(message: string) {
    console.log(message, consoleElement);
    consoleElement.innerHTML += message + "<br/>";
    consoleElement.scrollTop = consoleElement.scrollHeight;
  }

  const updateTheme = () => {
    console.log("the theme is", theme);
    editor.options.theme = theme;
    loadEditor();
  };
  const loadEditor = () => {
    setTimeout(() => {
      try {
        editor.getWrapperElement().remove();
        console.log(editor);
      } catch (error) {
        console.log(error);
      }

      editor = win.CodeMirror(document.getElementById("editor"), {
        value: codebase,
        mode: "javascript",
        theme,
        lineNumbers: true,
        autofocus: true,
      });

      editor.on("change", (instance: any) => {
        codebase = instance.getValue();
        console.log(codebase); // Perform actions with the updated code
      });
      console.log("see editor details", editor);
    }, 500);
  };

  onMount(() => {
    win = window;
    loader = false;
    codeUrl = import.meta.env.VITE_CODE_URL || "";
    console.log(import.meta.env);
    setTimeout(() => {
      consoleElement = document.getElementById("console");

      logToConsole(`<span style='color:blue'>core compile designed by braingainspa core <br> 
    running ${language} code >> </span>
    `);
      console.log("the console element", consoleElement);
    }, 500);
    theme = localStorage.getItem("bg-ce-theme") || "default";
    loadEditor();
  });
</script>

<svelte:head>
  <title>BG-Coding :: Coding environment</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css"
    integrity="sha512-uf06llspW44/LZpHzHT6qBOIVODjWtv4MxCricRxkzvopAlSWnTf6hpZTFxuuZcuNE9CBQhqE0Seu1CoRk84nQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/material.min.css"
    integrity="sha512-jA21084nir3cN96YuzJ1DbtDn30kxhxqQToAzCEGZcuRAswWfYirpUu8HVm8wRNoWDCYtA4iavd2Rb1bQSLv7g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/abbott.min.css"
    integrity="sha512-wmVrx1zhiPOwFCxX7n1aR9vLlXCI3RI0RwizrDSf3/4vEliwboeXwF7HLPZW6k9R6WZt7KCh5fTArAYPyTZ5ag=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/juejin.min.css"
    integrity="sha512-FpFNwHMUkU0AE2bj1ZJ+Spvq40Mb+G23FZyXdWBOnDXXqlixT/aXNBauBvPMao82l98G26LC6HVYo44Pg3pwyg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  <script
    defer
    src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js"
    integrity="sha512-8RnEqURPUc5aqFEN04aQEiPlSAdE0jlFS/9iGgUyNtwFnSKCXhmB6ZTNl7LnDtDWKabJIASzXrzD0K+LYexU9g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/bespin.min.css"
   integrity="sha512-Tzzks8tmCg1sLTCP4Pi6uD6LNoEJeKKYgoOltA4WeWsi7dvTJn2Nw/lqZG8bRn/fOa+DdKK9RC+L2/hwzyV60g==" 
   crossorigin="anonymous" referrerpolicy="no-referrer" />
</svelte:head>

{#if loader}
  <Loader />
{:else}
  <div class="container-scroller">
    <Nav />
    <div class="container-fluid page-body-wrapper">
      <Sidebar />

      <div class="main-panel">
        <div class="content-wrapper">
          <!-- divide the screen into three instruction screen, coding screen and result screen -->
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col-md-8 col-6">
                  <button class="btn btn-sm btn-success" on:click={executeCommand}>run</button>
                </div>
                <div class="col-6 col-md-4">
                  <div class="form-group row">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label id="theme" class="col-sm-3 col-form-label"
                      >Theme</label
                    >
                    <div class="col-sm-9">
                      <select
                        id="theme"
                        bind:value={theme}
                        on:change={updateTheme}
                        class="form-control"
                      >
                        {#each themes as item}
                          <option value={item}>{item}</option>
                        {/each}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div id="editor" />
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-12 col-sm-8">
              <div id="console" />
            </div>
            <div class="col-12 col-sm-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  #console {
    height: 200px;
    background-color: black;
    color: white;
    font-family: monospace;
    padding: 10px;
    overflow-y: scroll;
  }
</style>

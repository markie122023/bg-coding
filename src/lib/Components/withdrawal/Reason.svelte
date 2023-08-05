<script lang="ts">
  import { HttpHelpher } from "$lib/Helphers/http.helpher";
  import { NotificationHelpher } from "$lib/Helphers/notifications.helpher";
  import type { IwithdrawalRequest } from "$lib/Interfaces/request.interface";
  import { BASE_URL } from "$lib/env";
  import { createEventDispatcher } from "svelte";

  export let reason: string = "";
  export let activeRequest: IwithdrawalRequest = { User: {} };
  let text = "";

  const dispatch = createEventDispatcher();
  const upload = async () => {
    const point = reason == "decline" ? 2 : 1;
    const resp = await HttpHelpher.put(
      BASE_URL + "wallet/request?action=" + point,
      activeRequest
    );
    dispatch("childEvent", "close");
    if (resp) {
      console.log(resp);
      reason == 'decline'? NotificationHelpher.alert('this request has been delined successfully',window,'success','ok'): 
      NotificationHelpher.alert('this request has been approved successfully',window,'success','ok')
    }
  };
</script>

<div
  class="modal fade"
  id="reason-modal"
  tabindex="-1"
  aria-labelledby="ModalLabel"
  aria-modal="true"
  role="dialog"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel">
          {#if reason == "decline"}
            <span style="color: red"> Deny Withdrawal Request</span>
          {:else}
            <span style="color: green"> Approval Withdrawal Request</span>
          {/if}
        </h5>
        <button
          type="button"
          class="close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
          <small
            >{#if reason == "decline"}
              enter the reason why this request is being denied
            {:else}
              enter an approval message maybe share the payment reference here
            {/if}</small
          >
        </p>
        <div class="form-group">
          <label for="reason">Reason</label>
          <textarea
            bind:value={text}
            class="form-control"
            id="reason"
            rows="4"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button
          type="button"
          data-bs-dismiss="modal"
          on:click={upload}
          class="btn btn-danger">Submit</button
        >
        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import type { IwithdrawalRequest } from "$lib/Interfaces/request.interface";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let activeRequest: IwithdrawalRequest = { User: {} };
  export let parent: any = {};
  const handleClick = (action: string) => {
    dispatch("childEvent", action);
  };
</script>

<div
  class="modal fade"
  id="request-modal"
  tabindex="-1"
  aria-labelledby="ModalLabel"
  aria-modal="true"
  role="dialog"
>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel">Withdrawal Approval</h5>
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
        <div class="row">
          <div class="col-4">
            <label for="first_name">First Name</label>
            <p id="first_name">{activeRequest.User.first_name}</p>
          </div>
          <div class="col-4">
            <label for="last_name">Last Name</label>
            <p id="last_name">{activeRequest.User.last_name}</p>
          </div>
          <div class="col-4">
            <label for="user_name">Username</label>
            <p id="user_name">{activeRequest.User.user_name}</p>
          </div>
          <div class="col-4">
            <label for="wallet">Wallet Balance</label>
            <p id="wallet">₦{Number(parent.wallet).toFixed(2)}</p>
          </div>
          <div class="col-4">
            <label for="amount"> Amount</label>
            <p id="amount">₦{Number(activeRequest.amount).toFixed(2)}</p>
          </div>
          <div class="col-4">
            <label for="status"> Status</label>
            <p id="status">
              {activeRequest.resolution_type == 0 ? "pending" : "resolved"}
            </p>
          </div>
          <div class="col-12">
            <label for="reason"> Reason</label>
            <p id="reason">{activeRequest.reason}</p>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        {#if activeRequest.resolution_type == 0}
          <button
            type="button"
            on:click={() => {
              handleClick("decline");
            }}
            class="btn btn-danger">Decline</button
          >
          <button
            type="button"
            on:click={() => {
              handleClick("approve");
            }}
            class="btn btn-success">Approve</button
          >
        {/if}
        <button type="button" class="btn btn-light" data-bs-dismiss="modal"
          >Close</button
        >
      </div>
    </div>
  </div>
</div>

<style>
  label {
    font-weight: 700;
  }
</style>

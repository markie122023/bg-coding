<div class="loading-container">
    <div class="loading-animation"></div>
  </div>
  

<style>
  .loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loading-animation {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #333;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>

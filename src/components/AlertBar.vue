<template>
  <div class="alertBar" :style="{ backgroundColor: color }">
    <div class="symbol">!</div>
    <div class="message"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .alertBar {
    padding: 0.4rem 1rem;
    flex: 1;
    display: flex;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 2px 2px rgba(50, 50, 50, 0.6);
  }

  .symbol {
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-radius: 50%;
    color: rgb(50, 50, 50);
    font-size: 0.8rem;
    font-weight: 600;
  }

  .message {
    color: rgb(250, 250, 250);
    font-size: 1.5rem;
  }
</style>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '图片',
  },
})
</script>

<template>
  <img class="icon" :src="url" :alt="alt" />
</template>

<style scoped>
.icon {
  width: 42px;
  height: 42px;
  margin: 5px;
  border-radius: 5px;
  background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
  vertical-align: middle;
  object-fit: contain;
}
</style>
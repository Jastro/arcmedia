<template>
  <div class="element-container">
    <img :src="item.src" />
    <span>{{ item.text }}</span>
  </div>
</template>

<script>
export default {
  name: "navbar-link-icon",
  props: {
    item: { type: Object },
  },
};
</script>

<style lang="scss" scoped>
.element-container {
  display: flex;
  align-items: center;
  padding: 40px;
  cursor: pointer;
}

img {
  max-height: 30px;
  padding: 10px;
  max-width: 100%;
}
@media (max-width: 768px) {
  .element-container {
    img {
      min-height: 30px;
    }
    span {
      display: none !important;
    }
  }
}
</style>

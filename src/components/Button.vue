<template name="button">
  <button class="text">Register</button>
</template>

<style lang="scss" scoped>
@import "../theme/_colors.scss";

button {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 30px;
  border: none;
  flex-basis: 30%;
  background: $black;
  color: $primary;

  &:hover {
    background: $primary;
    color: $black;
  }

  &:active {
    background: $primary_light;
    color: $black;
  }

  &:disabled {
    background: $grey_5;
    color: $grey_50;
  }
}
</style>

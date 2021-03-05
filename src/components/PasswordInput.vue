<template name="password-input">
  <div class="input-container">
    <label :class="errorClass">{{ item.label }}</label>
    <input
      :class="errorClass"
      :type="inputType"
      :placeholder="item.placeholder"
      :required="item.isRequired"
      :id="itemId"
    />
    <div class="icon">
      <i @click="onIconClick" class="fas" :class="iconClass"></i>
    </div>
    <label v-if="item.haveError" :class="errorClass">{{ item.error }}</label>
  </div>
</template>

<script>
export default {
  name: "password-input",
  data: () => ({
    showingPassword: false,
  }),
  props: {
    item: { type: Object },
    itemId: { type: String },
  },
  computed: {
    iconClass() {
      return this.showingPassword ? "fa-eye-slash" : "fa-eye";
    },
    inputType() {
      return this.showingPassword ? "text" : "password";
    },
    errorClass() {
      return this.item.haveError ? "error" : "";
    },
  },
  methods: {
    onIconClick() {
      this.showingPassword = !this.showingPassword;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../theme/_colors.scss";

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
}

.icon {
  position: absolute;
  right: 1%;
  top: 30px;
  color: $grey_5;

  &:hover {
    cursor: pointer;
    color: $primary;
  }
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid $grey_5;
}

input.error {
  border-radius: 5px;
  border: 1px solid $AOS_RED;
}

label.error {
  color: $AOS_RED;
}
</style>

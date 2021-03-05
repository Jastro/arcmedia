<template name="text-input">
  <div class="input-container">
    <label :class="errorClass">{{ item.label }}</label>
    <input
      :class="errorClass"
      :type="inputType"
      :placeholder="item.placeholder"
      :required="item.isRequired"
      :id="itemId"
    />
    <label v-if="item.haveError" :class="errorClass">{{ item.error }}</label>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
    itemId: { type: String },
  },
  computed: {
    inputType() {
      return this.item?.type || "text";
    },
    errorClass() {
      return this.item.haveError ? "error" : "";
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

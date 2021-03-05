<template name="Home">
  <div class="wrapper">
    <div class="left-content">
      <h2 class="title-left">Register</h2>
      <div class="form-container">
        <h3>Account details</h3>
        <form id="register-form" @submit="handleSubmit" novalidate>
          <div class="select-gender">
            <div class="gender-option">
              <input type="radio" id="mr" name="gender" value="mr" />
              <label for="huey">Mr.</label>
            </div>

            <div class="gender-option">
              <input type="radio" id="ms" name="gender" value="ms" />
              <label for="dewey">Ms.</label>
            </div>
          </div>
          <div class="text-inputs">
            <TextInput
              v-for="(item, index) in accountInputs"
              :key="`input_accountInputs_${index}`"
              :item="item"
              :itemId="`input_accountInputs_${index}`"
            />
          </div>
          <h3>Login details</h3>
          <div class="login-inputs">
            <div
              v-for="(item, index) in loginInputs"
              :key="`input_login_${index}`"
            >
              <TextInput
                v-if="item.type !== 'pass'"
                :item="item"
                :itemId="`input_loginInputs_${index}`"
              />
              <PasswordInput
                v-else
                :item="item"
                :itemId="`input_loginInputs_${index}`"
              />
            </div>
          </div>
          <div class="button-container">
            <Button />
          </div>
        </form>
      </div>
    </div>
    <div class="right-content">
      <h2 class="title-right">Your benefits</h2>
      <div class="features">
        <div class="feature">
          <div>
            <img
              src="../assets/benefits/icon_deco_delivery_box.png"
              alt="delivery"
              style="padding: 5px;"
            />
          </div>
          <div class="label-container">
            <h3>Track your order delivery</h3>
          </div>
        </div>
        <div class="feature">
          <div class="image-container">
            <img
              src="../assets/benefits/icon_deco_wishlist.png"
              alt="wishlist"
            />
          </div>
          <div class="label-container">
            <h3>Save items to your wishlist</h3>
          </div>
        </div>
        <div class="feature">
          <div>
            <img
              src="../assets/benefits/icon_deco_trusted_shop.png"
              alt="delivery"
            />
          </div>
          <div class="label-container">
            <h3>Fast and secure checkout</h3>
          </div>
        </div>
        <div class="feature">
          <div>
            <img
              src="../assets/benefits/icon_deco_tracking.png"
              alt="delivery"
            />
          </div>
          <div class="label-container">
            <h3>Access your complete order history</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AccountInputs, LoginInputs } from "../mockup/data";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import Button from "../components/Button";

export default {
  name: "Home",
  components: {
    TextInput,
    PasswordInput,
    Button,
  },
  data: () => ({
    accountInputs: AccountInputs,
    loginInputs: LoginInputs,
  }),
  methods: {
    handleSubmit(ev) {
      ev.preventDefault();
      ev.target.checkValidity()
        ? this.successSubmit()
        : this.errorSubmit(ev.target);
    },
    successSubmit() {
      alert("Enviado");
    },
    reportInput(input) {
      const data = input.id
        .replace("input_", "")
        .replace("_", " ")
        .split(" ");
      this[data[0]][data[1]].haveError = true;
    },
    clearErrors() {
      this.accountInputs.forEach((input) => {
        input.haveError = false;
      });
      this.loginInputs.forEach((input) => {
        input.haveError = false;
      });
    },
    errorSubmit(form) {
      this.clearErrors();
      const inputs = form.querySelectorAll("input");

      inputs.forEach((input) => {
        const isValid = input.validity.valid;
        !isValid && this.reportInput(input);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../theme/_colors.scss";
@import "../theme/_typo.scss";
@import "./home.scss";
</style>

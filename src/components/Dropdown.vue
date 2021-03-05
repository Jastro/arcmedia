<template>
  <li @mouseleave="mouseleave">
    <a @click="handleItemPopup">
      <div>{{ selectedItem[0].text }} <i class="fas fa-chevron-down"></i></div>
    </a>
    <div v-if="showPopup">
      <ul>
        <li v-for="(item, index) in noSelectedItems" :key="`dropdown_${index}`">
          <a @click="setSelected(item.text, index)">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    item: { type: Array },
  },
  data: () => ({
    selected: null,
    options: null,
    showPopup: false,
  }),
  computed: {
    selectedItem: function() {
      return this.options.filter((option) => option.selected);
    },
    noSelectedItems: function() {
      return this.options.filter((option) => !option.selected);
    },
  },
  methods: {
    setSelected(item) {
      this.options.forEach((option) => {
        option.text === item
          ? (option.selected = true)
          : (option.selected = false);
      });
    },
    handleItemPopup() {
      this.showPopup = !this.showPopup;
    },
    mouseleave() {
      this.showPopup = false;
    },
  },
  created() {
    this.options = this.item;
    this.selected = this.item.filter((option) => option.selected);
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    position: relative;
    cursor: pointer;

    a + div {
      position: absolute;
      border-radius: 0 0 2px 2px;
      box-shadow: 0px 1px 5px 5px rgba(0, 0, 0, 0.19);
      font-size: 1rem;
      background: white;
      cursor: pointer;
      z-index: 2;
      text-align: center;
      margin: 0 auto;
      margin-left: calc(50% - 90px);
      margin-top: 18.5px;
    }
  }
  li a + div > ul > li > a {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    padding: 0.25rem 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    min-width: 120px;
  }
  li a + div > ul > li:hover > a {
    background-color: rgba(0, 0, 0, 0.15);
  }
}
</style>

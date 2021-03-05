<template>
  <section>
    <div class="flex-container">
      <nav class="link-menu">
        <ul>
          <li v-for="(item, index) in topItems" :key="`item_${index}`">
            <a>{{ item.text }}</a>
          </li>
          <Dropdown :item="dropdownItems" />
          <Dropdown :item="dropdownLanguageItems" />
        </ul>
      </nav>
      <div class="center-container">
        <div class="logo-container">
          <img src="../assets/AOS-logo@2x.png" />
        </div>
        <div class="search-container">
          <form class="search-form">
            <input
              type="search"
              name="search"
              placeholder="Search this site"
              class="search-input"
            />
            <i class="fas fa-search"></i>
          </form>
        </div>
        <div class="icons-container">
          <NavlinkIcon
            v-for="(item, index) in iconItems"
            :key="`icons_${index}`"
            :item="item"
          />
        </div>
      </div>
      <div class="last-container">
        <nav class="section-menu">
          <ul>
            <li v-for="(item, index) in bottomItems" :key="`bottom_${index}`">
              <a
                ><h3>{{ item.text }}</h3></a
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import {
  topNavbarItems,
  lastNavbarItems,
  icons,
  DropdownLanguageOptions,
  DropdownItem,
} from "../mockup/data";
import NavlinkIcon from "../components/NavLinkIcon";
import Dropdown from "../components/Dropdown";

export default {
  name: "Navbar",
  components: {
    Dropdown,
    NavlinkIcon,
  },
  data: () => ({
    topItems: topNavbarItems,
    bottomItems: lastNavbarItems,
    iconItems: icons,
    dropdownLanguageItems: DropdownLanguageOptions,
    dropdownItems: DropdownItem,
  }),
};
</script>

<style lang="scss" scoped>
@import "../theme/_colors.scss";
@import "../theme/_typo.scss";

.flex-container {
  display: flex;
  flex-wrap: wrap;

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h3 {
    cursor: pointer;
  }

  .link-menu {
    width: 100%;
    display: flex;
    border-bottom: solid rgba(188, 188, 188, 0.5) 1px;

    ul {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-right: 5%;
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  .center-container {
    display: flex;
    justify-content: space-around;
    justify-items: center;
    flex: 0 100%;
    border-bottom: solid rgba(188, 188, 188, 0.5) 1px;
  }

  .logo-container {
    display: flex;
    flex: 0 25%;
    align-items: center;

    img {
      display: flex;
      height: auto;
      margin: 0 auto;
      height: 50%;
    }
  }

  .search-container {
    display: flex;
    align-items: center;
    flex: 0 50%;

    .search-form {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      position: relative;

      i {
        position: absolute;
        right: 13%;
        top: 9px;

        &:hover {
          cursor: pointer;
          color: $primary;
        }
      }
    }

    input[type="search"] {
      box-sizing: border-box;
      background: lightgrey;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0.35em 0.75em;
      border: none;
      font-size: 1.1em;
      text-decoration: none;
      line-height: normal;
      max-height: 3em;
      width: 80%;
      border-radius: 20px;
      margin: 0 auto;
    }

    ::placeholder {
      color: $grey_50; /* Chrome, Firefox, Opera, Safari 10.1+ */
      opacity: 1; /* Firefox */
    }
  }
  .icons-container {
    display: flex;
    flex: 0 25%;
  }

  .last-container {
    display: flex;
    flex: 100%;
  }

  .section-menu {
    display: flex;
    flex: 100%;
    justify-content: center;
    -webkit-box-shadow: 0px 12px 7px -1px rgba(188, 188, 188, 0.5);
    box-shadow: 0px 12px 7px -1px rgba(188, 188, 188, 0.5);

    ul {
      display: flex;

      li {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }

  .navigation-content {
    display: flex;
  }
}
@media (max-width: 768px) {
  .search-container {
    display: none !important;
  }
}
</style>

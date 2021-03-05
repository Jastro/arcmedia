import cartIcon from "../assets/icons/cart@2x.svg";
import myAccountIcon from "../assets/icons/myaccount@2x.svg";

export const topNavbarItems = [
  {
    text: "Stores",
  },
  {
    text: "News",
  },
];

export const icons = [
  {
    text: "Account",
    src: myAccountIcon,
  },
  {
    text: "Card",
    src: cartIcon,
  },
];
export const lastNavbarItems = [
  {
    text: "Women",
  },
  {
    text: "Men",
  },
  {
    isDropdown: true,
    text: "Accesories",
  },
];

export const AccountInputs = [
  {
    placeholder: "First Name *",
    label: "First Name (middle name) *",
    error: "Enter your first name",
    haveError: false,
    isRequired: true,
  },
  {
    placeholder: "Last Name *",
    label: "Last Name *",
    error: "Enter your family name",
    haveError: false,
    isRequired: true,
  },
];

export const LoginInputs = [
  {
    placeholder: "myemail@example.com *",
    label: "Email *",
    error: "Enter your email",
    haveError: false,
    isRequired: true,
    type: "email",
  },
  {
    placeholder: "Choose password *",
    label: "Password *",
    error: "Enter your password",
    haveError: false,
    isRequired: true,
    type: "pass",
  },
  {
    placeholder: "Repeat password *",
    label: "Password *",
    error: "Repeat your password",
    haveError: false,
    isRequired: true,
    type: "pass",
  },
];

export const DropdownItem = [
  {
    text: "CHF",
    selected: true,
  },
  {
    text: "OPTION 2",
    selected: false,
  },
  {
    text: "OPTION 3",
    selected: false,
  },
];

export const DropdownLanguageOptions = [
  {
    text: "Switzerland,EN",
    selected: true,
  },
  {
    text: "Portugal,EN",
    selected: false,
  },
  {
    text: "Thailand,EN",
    selected: false,
  },
  {
    text: "Emirates,EN",
    selected: false,
  },
  {
    text: "Another option",
    selected: false,
  },
];

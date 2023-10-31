import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Index.vue";
import Registration from "../components/login-registration/Registration.vue";
import Login from "../components/login-registration/Login.vue";
import SingleProduct from "../views/product/single-product/Index.vue";
import Cart from "../views/product/cart/Index.vue";
import Wishlist from "../views/product/wishlist/Index.vue";
import Contact from "../views/contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/registration",
    name: "registration",
    component: Registration,
  },
  {
    path: "/single-product",
    name: "singleProduct",
    component: SingleProduct,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: Wishlist,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
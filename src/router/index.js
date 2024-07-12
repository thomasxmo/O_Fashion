import { createRouter, createWebHistory } from "vue-router";
// main view
import HomeView from "../views/main view/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Shop",
    name: "Shop",
    component: () =>
      import("../views/contentView/Shop.vue"),
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: () =>
      import("../views/main view/AboutUs.vue"),
  },
  {
    path: "/Blog",
    name: "blog",
    component: () =>
      import("../views/main view/blog.vue"),
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    component: () =>
      import("../views/main view/ContactUs.vue"),
  },
  {
    path: "/Product/:productId",
    name: "Product",
    component: () =>
      import("@/views/contentView/Product.vue"),
  },
  {
    path: "/Article/:articleId",
    name: "Article",
    component: () =>
      import("@/views/contentView/Article.vue"),
  },
  {
    path: "/Account",
    name: "Account",
    component: () =>
      import("../views/nav view/Account.vue"),
  },
  {
    path: "/Account/register",
    name: "register",
    component: () =>
      import("../views/nav view/register.vue"),
  },
  {
    path: "/CompareItems",
    name: "CompareItems",
    component: () =>
      import("../views/nav view/CompareItems.vue"),
  },
  {
    path: "/Checkout",
    name: "Checkout",
    component: () =>
      import("../views/nav view/Checkout.vue"),
  },
  {
    path: "/Cart",
    name: "Cart",
    component: () =>
      import("../views/nav view/Cart.vue"),
  },
  {
    path: "/Wishlist",
    name: "Wishlist",
    component: () =>
      import("../views/nav view/Wishlist.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () =>
      import("../views/nav view/Profile.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

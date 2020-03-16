import Vue from 'vue';
import Router from 'vue-router';
import TopPage from './components/TopPage.vue';
import About from './components/About.vue';
import Header from './components/Header.vue';
import Skill from './components/Skill.vue';
import Work from './components/Work.vue';
import Post from './components/Post.vue';

Vue.use(Router);

export default new Router({
  routes: [{path: "/", component: TopPage},
   {path: "/about", component: About},
   {path: "/header", component: Header},
   {path: "/skill", component: Skill},
   {path: "/work", component: Work},
   {path: "/post", component: Post},
  ]
});

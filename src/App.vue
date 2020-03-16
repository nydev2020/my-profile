<template>
  <div>
    <Header></Header>
    <TopPage></TopPage>
    <About></About>
    <Skill></Skill>
    <Work></Work>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import TopPage from './components/TopPage.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Work from './components/Work.vue'


export default {
  components: {
    Header,
    TopPage,
    About,
    Skill,
    Work,
  }
}
</script>



<style>
</style>

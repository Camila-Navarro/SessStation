<template>
    <div class="problemabody">
    <Navbar></Navbar>
    <div class="titulo">
    <Titulo></Titulo>
    </div>
    </div>
    
  
</template>

<script>
// @ is an alias to /src

import Navbar from'@/components/Navbar.vue';
import Titulo from'@/components/Titulo.vue';

export default {
  name: 'elproblema',
  components: {
    
    Navbar,
    Titulo,
  },
};
</script>

<style scoped lang="scss">
  .titulo{
    padding-top: 2%;
    margin-top: 0%;
  }
 .problemabody{
   height:900px;
   background-image: url(../assets/bgproblema.png);
   background-position: center;
   background-repeat: no-repeat;
   background-size:auto;
 }
</style>

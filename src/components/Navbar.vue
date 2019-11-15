<template>
<div>
  <b-navbar toggleable="lg" type="light"  class="bg-foobar">
      <b-container>
          <b-navbar-brand :to="{name:'Home'}">
             <img src="../assets/small.png"  class="d-inline-block align-top" alt="logosmall"onmouseout="this.style.opacity=1;this.filters.alpha.opacity='100';" onmouseover="this.style.opacity=0.7;this.filters.alpha.opacity='50';">
          </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name:'Elproblema'}">El Problema</b-nav-item>
        <b-nav-item :to="{name:'Comprar'}">A la hora de comprar</b-nav-item>
        <b-nav-item :to="{name:'Comer'}">A la hora de comer</b-nav-item>
        <b-nav-item :to="{name:'Desechar'}">A la hora de desechar</b-nav-item>
        <b-nav-item :to="{name:'Aportes'}">Mis aportes</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      
        <b-nav-item-dropdown  right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <span>Registro/Inicio</span>
          </template>
          <b-dropdown-item :to="{name:'Signin'}">Registrarse</b-dropdown-item>
          <b-dropdown-item :to="{name:'Login'}">Iniciar Sesion</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </b-container>
  </b-navbar>
</div>
   
</template>


<script>
export default {
    
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');
  .bg-foobar{
    background-color: rgb(255, 92, 66);
    font-family: 'Handlee', cursive;
    font-size: 1.300em;
 
  }
 
 

</style>

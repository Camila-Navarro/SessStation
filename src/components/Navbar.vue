<template>
<div>
  <b-navbar toggleable="lg" type="light" variant="warning">
      <b-container>
          <b-navbar-brand :to="{name:'#'}">
             <img src="../assets/small.png"  class="d-inline-block align-top" alt="logosmall">
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
      
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <span>Registro / inicio</span>
          </template>
          <b-dropdown-item href="#">Registrate!</b-dropdown-item>
          <b-dropdown-item href="#">Incia Sesion!</b-dropdown-item>
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

 
 

</style>

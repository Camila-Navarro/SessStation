<template>

<div class="container">

     <h2> Mis Aportes</h2>

    <model-gltf  src="static/models/gltf/Duck/glTF/tree.glb"></model-gltf>

    <div>
    <b-progress :value="value" :max="max" show-progress animated></b-progress>
      <p>Mi progreso Coaching!</p><b-progress class="mt-2" :max="max" show-value>
      <b-progress-bar :value="value * (6 / 10)" variant="success">Estoy ayudando!</b-progress-bar>
      <b-progress-bar :value="value * (2.5 / 10)" variant="warning">Estoy descuidado...</b-progress-bar>
      <b-progress-bar :value="value * (1.5 / 10)" variant="danger">Estoy contaminando :(</b-progress-bar>
    </b-progress>

    <b-button class="mt-3" @click="randomValue">Añadir mi aporte!</b-button>
  </div>

</div>


</template>

<script>

    import { ModelGltf } from 'vue-3d-model'

    export default {
      data(){
        return{
          value:45,
          max: 100
        }
      },
        components: {
            ModelGltf
        },
        methods: {
           randomValue() {
             this.value = Math.random() * this.max
      },
      
    }
    }
    
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
h2{
  font-size: 5em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  margin-bottom:35px;
  }
  p{
    font-size: 2em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  
  }

</style>



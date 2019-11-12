<template>
<div>
    <div class="container  ">
    <img src="../assets/LOGO PNG.png" class="img-fluid" alt="logo">
   
        <div class="row">
            <div class="col-sm-12 mx-auto">
    <b-form-group
      id="fieldset-1"
      label-for="input-1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
      
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
             </div>
             <div class="col-sm-12 mx-auto">
    <b-form-group
      id="fieldset-1"
      label-for="input-1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
      
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
    <b-form-group
      id="fieldset-1"
      label-for="input-1"
      :invalid-feedback="invalidFeedback"
      :valid-feedback="validFeedback"
      :state="state"
      
    >
      <b-form-input id="input-1" v-model="name" :state="state" trim></b-form-input>
    </b-form-group>
    <div class="boton">
      <b-button variant="light"><sam>Registrarse</sam></b-button>
    </div>
             </div>
             
         </div>
    </div>
 
</div>
</template>

<script>
export default {
    computed: {
      state() {
        return this.name.length >= 4 ? true : false
      },
      invalidFeedback() {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return 'Ingrese al menos 4 caracteres '
        } else {
          return ''
        }
      },
      validFeedback() {
        return this.state === true ? 'Validado' : ''
      }
    },
    data() {
      return {
        name: ''
      }
    }
  }

</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');


  .container{
     font-size: 25px;
     font-family: 'Handlee', cursive;
  }
  .boton{
    padding: 40px;
  }

</style>

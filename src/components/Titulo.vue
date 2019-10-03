<template>
<div>
    <h2>El Problema</h2>
    <b-card no-body class="overflow-hidden fondo container" style="max-width: 80%;">
 <b-row no-gutters>
      <b-col md="8">
            <b-card-body title="Hola">
            
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus vero illum deserunt esse autem asperiores eveniet corrupti aspernatur aliquid excepturi quibusdam exercitationem id, numquam, laborum velit culpa minus! Dicta.
            
            </b-card-body>
      </b-col>
                    <b-col md="4">
                        <b-embed
                            type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                            allowfullscreen
                        ></b-embed>
                    
                    </b-col>
    </b-row>
  </b-card>
</div>

    
</template>

<script>
export default {
    
}

</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
h2{
  font-size: 5em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  }
.fondo{
    background-color:  rgba(20,192,218,0.8);
    border-radius: 80px;
    border-style: none;
}
</style>

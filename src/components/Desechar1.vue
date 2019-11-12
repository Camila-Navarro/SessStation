
<template>
<div>

    <h2>     A la hora de Desechar</h2>
    
    <b-card no-body class="overflow-hidden fondo container" style="max-width: 70%;">
 <b-row no-gutters>
      <b-col md="8"style="text-align:left">
            <b-card-body title="">
            <h3>10 Consejos para reciclar de forma correcta</h3><br>
               <h1> 
              1. Compra productos cuyos envases sean respetuosos con el medio ambiente <br>

2. Haz del reciclaje un juego. Los más pequeños aprenderán a reciclar divirtiéndose <br>

3. Separa los envases adecuadamente <br>

4. Pliega las cajas de cartón para ahorrar espacio y comodidad al transportarlas al contenedor azul y, por supuesto, nunca las dejes fuera del contenedor <br>

5. Tira las botellas de plástico al contenedor amarillo. Con sólo 40 se puede fabricar un forro polar <br>
 

6. Las latas de refrescos y de conservas van al contenedor amarillo también. ¿Sabías que con 80 latas se puede fabricar una llanta de bicicleta? <br>

7. Con solo 6 briks se puede fabricar una caja de zapatos ¡Recuerda, los briks van al contenedor amarillo y no al azul! <br>

8. Reutiliza las bolsas de plástico tantas veces como puedas, y al final como bolsa de basura para llevar los envases al contenedor amarillo <br>

9. Lleva al punto limpio los residuos especiales como aparatos eléctricos y electrónicos, bombillas, baterías, restos de pinturas, radiografías, aceite de cocina, etc. <br>

10. Nunca tires el aceite usado por el fregadero. Solo 1 litro puede contaminar hasta 1.000 litros de agua. Reutilízalo y finalmente llévalo a un punto limpio.
 <br>
            </h1>
          
    
         
            </b-card-body>
      </b-col>
                    <b-col md="4">
 
                                 <div class="d-flex justify-content-center ">
       <div class="xs-row-12 justify-content-center d-xs-none d-none d-lg-block">
          <div class="imagen">
          <img class="img"src="../assets/basura1.png" ><br>
          <h4>¡Aprende a Reciclar!</h4>
          </div>
          </div>
          </div>
                           
                        </b-embed>
                    
                    </b-col>
    </b-row>
  </b-card>
</div>

    
</template>

<script>
  
</script>
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap"');

h2{
  font-size: 5em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  }
.fondo{
    margin-top: 20px;
    margin-bottom: 50px;
    background-color:  rgba(20,192,218,0.8);
    border-radius: 80px;
    border-style: none;
}
h1{
    font-size:1.5em;
   font-family: 'Handlee', cursive;
    color:black;
}
h3{
    font-size:2em;
    font-family: 'Pacifico', cursive; 
    color:black;
}
h4{
  font-size: 2em;
  font-family: 'Pacifico', cursive; 
  color:black; 
  }
 
  .imagen{
  
    display: block;
    margin-left: 0px;
    margin-right: 0px;
    padding-top:250px;
    .img{
        display:block;
        margin-left: auto;
        margin-right: auto;
        width: 70%;   
        transform:scale(1);
        -ms-transform:scale(1); // IE 9 
        -moz-transform:scale(1); // Firefox 
        -webkit-transform:scale(1); // Safari and Chrome 
        -o-transform:scale(1); // Opera 
        -webkit-transition: all 500ms ease-in-out; // IE 9
        -moz-transition: all 500ms ease-in-out; // Firefox
        -ms-transition: all 500ms ease-in-out; // Safari and Chrome 
        -o-transition: all 500ms ease-in-out; // Opera       
    }        
    &:hover{
        .img{
            transform:scale(0.8);
            -ms-transform:scale(0.8); // IE 9 
            -moz-transform:scale(0.8); // Firefox 
            -webkit-transform:scale(0.8); // Safari and Chrome 
            -o-transform:scale(0.8); // Opera
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
        }
    
    } 
}

</style>

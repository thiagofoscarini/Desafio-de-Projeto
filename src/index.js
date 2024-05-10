let Personagem1 = ["goku",100000000000000000000000000000000000000000000000000000000000000000000000000000000000000]
let Personagem2 = ["Marle",101]
let Personagem3 = ["Lucca",100]
RadicalDreamers = Personagem1.concat(Personagem2,Personagem3)
console.log("A tua equipe atual é "+ RadicalDreamers[0]+" "+ RadicalDreamers[2] +" "+ RadicalDreamers[4])
for(cont =1;cont< RadicalDreamers.length ; cont++){
    
   console.log(RadicalDreamers[cont])
if(RadicalDreamers[cont] <= 1000){
    (RadicalDreamers[cont-1] + " o seu nível é  Ferro") 

} else if(RadicalDreamers[cont]>1000 && RadicalDreamers[cont]<=2000 ){
    (RadicalDreamers[cont-1] + " o seu nível é  Bronze") 
   }
   
else if(RadicalDreamers[cont]>2000 && RadicalDreamers[cont]<=5000){
    (RadicalDreamers[cont-1] + " o seu nível é  Prata") 

       }
       
else if(RadicalDreamers[cont]>5000 && RadicalDreamers[cont]<=7000){
        (RadicalDreamers[cont-1] + " o seu nível é  Ouro")  
     
           }
           
else if(RadicalDreamers[cont]>7000 && RadicalDreamers[cont]<=8000){
            (RadicalDreamers[cont-1] + " o seu nível é  Platina")   
             }
             
else if((RadicalDreamers[cont]>8000) && (RadicalDreamers[cont]<=9000)){
                (RadicalDreamers[cont-1] + " o seu nível é Ascendente")  //not ok
             }
             
else if(RadicalDreamers[cont]>9000 && RadicalDreamers[cont]<=10000){ //ok
                console.log(RadicalDreamers[cont-1] + " o seu nível é Imortal")
             }
             
else if(RadicalDreamers[cont]>1000000000000000000000000000000000000000000000000000000000000000000000000000000000){
             console.log(RadicalDreamers[cont-1] + " o seu nível é  istinto superior completo")          //ok
             
            }  else("Nível inválido!!")
cont++;

    
    

}
console.log("goku coin111111011101111011110011111011110111")
let Personagem1 = ["Crono",1001]
let Personagem2 = ["Marle",10000]
let Personagem3 = ["Lucca",8001]
RadicalDreamers = Personagem1.concat(Personagem2,Personagem3)
console.log("A tua equipe atual é "+ RadicalDreamers[0]+" "+ RadicalDreamers[2] +" "+ RadicalDreamers[4])
for(cont =1;cont< RadicalDreamers.length ; cont++){
    
   console.log("XP ATUAL: "+ RadicalDreamers[cont])
if(RadicalDreamers[cont]<=1000){
   console.log("O herói de nome "+ RadicalDreamers[cont-1] + " está no nível  Ferro")

} else if(RadicalDreamers[cont]>1000 && RadicalDreamers[cont]<=2000 ){
    console.log("O herói de nome "+ RadicalDreamers[cont-1] + "está no nível Bronze") 
   }
   
else if(RadicalDreamers[cont]>2000 && RadicalDreamers[cont]<=5000){
    console.log("O herói de nome "+ RadicalDreamers[cont-1] + " está no nível Prata") 

       }
       
else if(RadicalDreamers[cont]>5000 && RadicalDreamers[cont]<=7000){
        console.log("O herói de nome " + RadicalDreamers[cont-1] + " está no nível Ouro")  
     
           }
           
else if(RadicalDreamers[cont]>7000 && RadicalDreamers[cont]<=8000){
          console.log("O herói de nome " + RadicalDreamers[cont-1] + " está no nível Platina")   
             }
             
else if(RadicalDreamers[cont]>8000 && RadicalDreamers[cont]<=9000){ //ok
               console.log("O herói de nome "+ RadicalDreamers[cont-1] + " está no nível Ascendente")
            }
             
else if(RadicalDreamers[cont]>9000 && RadicalDreamers[cont]<=10000){ //ok
                console.log("O herói de nome " + RadicalDreamers[cont-1] + " está no nível Imortal")
             }
             
else if(RadicalDreamers[cont]>10000){
             console.log("O herói de nome "+ RadicalDreamers[cont-1] + " está no nível  Radiante")          //ok
             
            }
cont++;

    
    

}

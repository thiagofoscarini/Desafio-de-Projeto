let Personagem1 = ["Crono",10000]
let Personagem2 = ["Marle",500]
let Personagem3 = ["Lucca",750]
RadicalDreamers = Personagem1.concat(Personagem2,Personagem3)
console.log("A tua equipe atual é "+ RadicalDreamers[0]+" "+ RadicalDreamers[2] +" "+ RadicalDreamers[4])
for(cont = 1;cont< RadicalDreamers.length ; cont++){
    
    //console.log(RadicalDreamers[cont])
if(RadicalDreamers[cont] <= 1000){
    (RadicalDreamers[cont-1] + " o seu nível é  Ferro") 

}if(RadicalDreamers[cont]>1000 && RadicalDreamers[cont]<=2000 ){
    (RadicalDreamers[cont-1] + " o seu nível é  Bronze") 
   }if(RadicalDreamers[cont]>2000 && RadicalDreamers[cont]<=5000){
    (RadicalDreamers[cont-1] + " o seu nível é  Prata") 

       }if(RadicalDreamers[cont]>5000 && RadicalDreamers[cont]<=7000){
        (RadicalDreamers[cont-1] + " o seu nível é  Ouro")  
     
           }if(RadicalDreamers[cont]>5000 && RadicalDreamers[cont]<=7000){
            (RadicalDreamers[cont-1] + " o seu nível é  Platina")   
             }if(RadicalDreamers[cont]>8000 && RadicalDreamers[cont]<=9000){
                (RadicalDreamers[cont-1] + " o seu nível é Ascendente") 
             }if(RadicalDreamers[cont]>9000 && RadicalDreamers[cont]<=10000){
                console.log(RadicalDreamers[cont-1] + " o seu nível é Imortal")
             }if(RadicalDreamers[cont]>10000){
             console.log(RadicalDreamers[cont-1] + " o seu nível é  Radiante")          
             }  
cont++;

    
    

}


let numberPlayer ;
let nbrLoup ;
let nbrRole ;
let nbrSv;
//we could replace this with boolean
let nbrLoupNoire =0 ;
let nbrLoupBlue= 0 ;
let nbrLoupInfected=0 ;
let nbrvioant = 0;
let nbrsalva=0 ;
let nbrsorcier=0;
//array
let charachters = [] ;
let index =0;


document.getElementById("bt").onclick = function(){
   
    numberPlayer = document.getElementById("nbrPlayer").value

   if (numberPlayer < 8){
    document.getElementById("askingNumberPlayers").textContent ="invalid value"
    document.getElementById("nbrPlayer").value = ""
    document.getElementById("warning").style.display="block"

   }else {
    document.getElementById("page1").style.display="none"
    document.getElementById("page2").style.display="block"

    for (let i =0 ; i< numberPlayer ; i++){
        charachters.push ("simple villagioes")
    }
    


    
    ////
document.getElementById("Decla").textContent="the number of players is " + numberPlayer
document.getElementById("advicedLoup").textContent="its advised to have " +Math.round(numberPlayer/3);

let TempNbrLoup = document.getElementById("nbrLoupIn")

document.getElementById("add").onclick= function (){
    TempNbrLoup.value ++ ;
}

document.getElementById("dec").onclick =function (){
    TempNbrLoup.value -- ;
}

document.getElementById("sumbit").onclick = function (){
 if (TempNbrLoup.value <=0){
     alert ("srx srx")
 }else {
     document.getElementById("loupCards").style.display="block";
     document.getElementById("page2").style.display="none"
     nbrLoup =TempNbrLoup.value;
     for (let i = 0 ; i< nbrLoup ; i++){
        charachters[index]="loup"
        index++;
     }


         //adding sp loup

    document.getElementById("checkChecksLoup").onclick=function(){
        
        if (document.getElementById("yepNoire").checked){
            nbrLoup++;
            charachters[index]="loup noire"
        }
        if (document.getElementById("yepBlue").checked){
            nbrLoup++;
            index++;
            charachters[index]="loup blue"
        }
        if (document.getElementById("yepInfected").checked){
            nbrLoup++;
            index++;
            charachters[index]="loup infected"
        }
        if (document.getElementById("yepLvioant").checked){
            nbrLoup++;
            index++;
            charachters[index]="loup vioant"
        }
        if (document.getElementById("yepEnfant").checked){
            nbrLoup++;
            index++;
            charachters[index]="enfant souvage"
        }
        document.getElementById("loupCards").style.display = "none";
        document.getElementById("page3").style.display="block";
        document.getElementById("advicedrole").textContent="its advised to have " +Math.round(numberPlayer/3);




        
//adding roles

        
        document.getElementById("checkChecksRole").onclick=function(){
        
            if (document.getElementById("yepVioant").checked){
                nbrLoup++;
                index++;
                charachters[index]="vioant"
            }
            if (document.getElementById("yepSalva").checked){
                nbrLoup++;
                index++;
                charachters[index]="salva"
            }
            if (document.getElementById("yepSorcier").checked){
                nbrLoup++;
                index++;
                charachters[index]="sorcier"
            }
            if (document.getElementById("yepChasseur").checked){
                nbrLoup++;
                index++;
                charachters[index]="chasseur"
            }
            if (document.getElementById("yepCubident").checked){
                nbrLoup++;
                index++;
                charachters[index]="cubident"
            }
            if (document.getElementById("yepCorbeau").checked){
                nbrLoup++;
                index++;
                charachters[index]="corbeau"
            }
            if (document.getElementById("yepVoleur").checked){
                nbrLoup++;
                index++;
                charachters[index]="voleur"
            }
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display="block";


            
        //random valueesss
        for (let i = charachters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [charachters[i], charachters[j]] = [charachters[j], charachters[i]]; 
        }

//disturbtuion role

document.getElementById("setBt").onclick = function(){
    document.getElementById("set").style.display="none";
    document.getElementById("dist").style.display="block";
}

index =0 ;
document.getElementById("readyBt").onclick = function(){
    document.getElementById("dist").style.display="none";
    document.getElementById("role").style.display="block";


    document.getElementById("roleName").textContent=charachters[index]

    switch (charachters[index]){
        case "loup" : {document.getElementById("loupim").style.display="block"
            document.getElementById("roleloup").style.display="block"
        }
            break;
        case "simple villagioes":{document.getElementById("svim").style.display="block"
            document.getElementById("rolesv").style.display="block"
        }
            break;
        case "loup blue" :{document.getElementById("blueim").style.display="block"
            document.getElementById("roleblue").style.display="block"}
            break;
        case "loup noire":{document.getElementById("noireim").style.display="block"
            document.getElementById("rolenoire").style.display="block"}
            break;
        case "loup infected":{document.getElementById("infectedim").style.display="block"
            document.getElementById("roleinfected").style.display="block"}
            break;
        case "vioant" :{document.getElementById("vioantim").style.display="block"
            document.getElementById("rolevioant").style.display="block"}
            break;
        case "sorcier":{document.getElementById("sorcierim").style.display="block"
            document.getElementById("rolesorcier").style.display="block"}
            break;
        case "salva" :{document.getElementById("salvaim").style.display="block"
            document.getElementById("rolesalva").style.display="block"}
            break;
                case "enfant souvage" :{document.getElementById("enfantim").style.display="block"
                    document.getElementById("roleenfant").style.display="block"}
                break;
                case "loup vioant" :{document.getElementById("loupvioantim").style.display="block"
                    document.getElementById("rolelvioant").style.display="block"}
                break;

                case "chasseur" :{document.getElementById("chasseurim").style.display="block"
                    document.getElementById("rolechasseur").style.display="block"}
                break;
                case "cubident" :{document.getElementById("cubidentim").style.display="block"
                    document.getElementById("rolecubident").style.display="block"}
                break;
                case "corbeau" :{document.getElementById("corbeauim").style.display="block"
                    document.getElementById("rolecorbeau").style.display="block"}
                break;
                case "voleur" :{document.getElementById("voleurim").style.display="block"
                    document.getElementById("rolevoleur").style.display="block"}
                break;
    }
    
    index++;
    if (index >= numberPlayer){
        document.getElementById("dist").style.display="none";
        document.getElementById("role").style.display="none";

    document.getElementById("endPage").style.display="block"
    }
}

document.getElementById("okayBt").onclick = function(){
    document.getElementById("role").style.display="none";
    document.getElementById("dist").style.display="block";


    document.getElementById("salvaim").style.display="none"
    document.getElementById("vioantim").style.display="none"
    document.getElementById("sorcierim").style.display="none"
    document.getElementById("noireim").style.display="none"
    document.getElementById("blueim").style.display="none"
    document.getElementById("infectedim").style.display="none"
    document.getElementById("loupim").style.display="none"
    document.getElementById("svim").style.display="none"
    document.getElementById("enfantim").style.display="none"
    document.getElementById("loupvioantim").style.display="none"
    
    document.getElementById("chasseurim").style.display="none"
    document.getElementById("cubidentim").style.display="none"
    document.getElementById("corbeauim").style.display="none"
    document.getElementById("voleurim").style.display="none"



    document.getElementById("roleblue").style.display="none"
    document.getElementById("rolenoire").style.display="none"
    document.getElementById("roleinfected").style.display="none"
    document.getElementById("rolevioant").style.display="none"
    document.getElementById("rolesorcier").style.display="none"
    document.getElementById("rolesalva").style.display="none"
    document.getElementById("rolesv").style.display="none"
    document.getElementById("roleloup").style.display="none"
    document.getElementById("roleenfant").style.display="none"
    document.getElementById("rolelvioant").style.display="none"
    
    document.getElementById("rolechasseur").style.display="none"
    document.getElementById("rolecubident").style.display="none"
    document.getElementById("rolecorbeau").style.display="none"
    document.getElementById("rolevoleur").style.display="none"
}

        }
    }


}
}
}
}
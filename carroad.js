var margin=0;
var x;
var z;

 document.getElementById("startbutton").onclick= function(){
      x = setInterval(run,80);
    //   a function will run for 0.8 sec
     
    
         function run(){
             
            if(margin==1050) //this condition is used bxz 1050 is last pixel on screen if not it moves forward beyond the screen
                    {            
         clearInterval(y);
         margin=0; //thats why it we change the car to margin 0
                     }
     else{

             margin=margin+5; //for every 5 pixels it changes the position 
             var y= document.getElementById("carimag2").style.marginLeft = margin+"px";
            }
            
        }
            document.getElementById("stopbutton").onclick = function(){
                clearInterval(x); //this will stop the main funtion of run
            }

            document.getElementById("reversebutton").onclick=function(){
                z = setInterval(back,80);

                function back(){

                   if(margin==0)
                   {
                           clearInterval(z);
                           alert("clikc start");
                       
                   }
                    else{

                        margin=margin-5;
                        var w=  document.getElementById("carimag2").style.marginLeft = margin+"px";
                    }
                    
                    
                }
                document.getElementById("stopbutton").onclick = function(){
                clearInterval(z);
            }

    }
 }

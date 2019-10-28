<Script language="javascript">
  ans=0;
  num="0";
  key="";
  kigou="";

    function clac_run(btn) {
      if(!isNaN(btn)){
        if(!isNaN(key)){
            if(num == "0"){
                num =""+btn;
            }else{
                num+=""+btn;
            }
        }else{
              num =""+btn;
        }
        document.getElementById("output").innerHTML = num;
         }
    }else{
      if(!isNaN(key)){
            ans = eval(ans+kigou+num);
            num ="0";
            document.getElementById("output").innerHTML =ans;
          }
          kigou = btm;
          document.getElementById("type").innerHTML = kigou;

      }
      key = btn;    
    }

  function clac_period(){
        if(num.indexOf(".")<0) num+=".";
        document.getElementById("output").innerHTML=num;
    }
   function clac_equal(){
       if(key == "="){
           ans =0;
           key ="";
       }else{
           ans = eval(ans + kigou + num);
           key ="=";
       }
       num ="0";
       kigou = key;
       document.getElementById("output").innerHTML =ans;
       document.getElementById("type").innerHTML =key;
   }
      
</Script>

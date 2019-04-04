
            function verifica(){
                var x = document.getElementById("numero").value;
                try{
                    if(x == ""){
                        throw "Informe um valor";
                    }
                    else if (isNaN(x)){
                        throw "Você precisa informar um número";
                    }
                    else if (x < 1 || x > 20) {
                        throw "Informe um numero entre 1 e 10";
                    }
                    else{
                        document.getElementById("msg").innerHTML = "Você digitou o número: " + x;
                    }
                     
                }catch(err){
                        document.getElementById("msg").innerHTML = "Erro: " + err;
                    }finally{
                        document.getElementById("numero").value = "";
                        document.getElementById("numero").focus;
                    }
            }
            
            
  
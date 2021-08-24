let Coordenada=function(X, Y)
    {
        this.valorX=X;
        this.valorY=Y;
        this.info=function()
        {
            return  "<h3>" + "(" + this.valorX + " , " + this.valorY + ")" +"</h3>";
        }
    };

let Control=function()
    {    
        this.datos=new Array();

        this.agregar=function(nuevo)
        {
            let valorX=parseFloat(document.getElementById("valorX").value);;
            let valorY=parseFloat(document.getElementById("valorY").value);;
            if (isNaN(valorX) || isNaN(valorY))
            {    
                alert ("falta ingresar un valor");
            }
            else
            {
                this.datos.push(nuevo);
            }
        }

        this.mostrar=function()
        {
            let res="";
            for(let i=0;i<this.datos.length;i++)
                res += "<h3>El Punto " + (i+1) + " es " + "</h3>" +  this.datos[i].info();
            return res;
        }

        this.Distancia=function()
        {  
            let suma=0;
            for(let i=0;i<=this.datos.length;i++)
            {
                if(i+1==this.datos.length)
                {
                    return suma;
                }
                else
                {
                    let P1=this.datos[i];
                    let P2=this.datos[i+1];
                    let X=(P1.valorX-P2.valorX);
                    let Y=(P1.valorY-P2.valorY);
                    res=Math.sqrt(X*X+Y*Y);
                    console.log("La distancia entre el Punto " + (i+1) + " (" + this.datos[i].valorX + "," + this.datos[i].valorY + ")" + " y el punto " + (i+2) + " (" + this.datos[i+1].valorX + "," + this.datos[i+1].valorY + ")" + " es " + res)
                    suma+=res;
                }
                        
            }   
        }
    };

let Punto=new Control();

let btnAgregar=document.getElementById('btnagregar');
btnAgregar.addEventListener('click',()=>{
        let X,Y;
        X=document.getElementById('valorX').value;
        Y=document.getElementById('valorY').value;
        let coordenada=new Coordenada(X,Y);
        Punto.agregar(coordenada);
        document.getElementById('valorX').value="";
        document.getElementById('valorY').value="";
        document.getElementById('resultado1').innerHTML=" ";
        let res=document.getElementById('resultado1');
        res.innerHTML+="<h2>COORDENADAS</h2>" + Punto.mostrar();
        if(X==="" || Y==="")
            console.log("coordenada incorrecta")
        else
            console.log("Se agrego la coordenada " + "(" + coordenada.valorX + "," + coordenada.valorY + ")");
});

let btnDistancia=document.getElementById('btndistancia');
btnDistancia.addEventListener('click',()=>{
    document.getElementById('resultado2').innerHTML=" ";
    let res=document.getElementById('resultado2');
    res.innerHTML+="<h2>La distancia Total es </h2>" + Punto.Distancia();
})
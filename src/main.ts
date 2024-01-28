import "./style.css";

function cambiarFotoPpal(idMiniatura : string) : void{
    
    const fotoPpal  = document.getElementById("foto-ppal"); // as HTMLImageElement tb serviría en lugar del instance of
    const miniatura = document.getElementById(idMiniatura);

    if ( fotoPpal !== null && fotoPpal !== undefined &&
        miniatura !== null && miniatura !== undefined){
            if (fotoPpal instanceof HTMLImageElement && 
                miniatura instanceof HTMLImageElement) {
                    fotoPpal.src = miniatura.src;
                    fotoPpal.alt = miniatura.alt;
            }

        }
}

const min1 = document.getElementById("min1");
const min2 = document.getElementById("min2");
const min3 = document.getElementById("min3");
const min4 = document.getElementById("min4");

if( min1 !== null && min1 !== undefined &&
    min2 !== null && min1 !== undefined &&
    min3 !== null && min1 !== undefined &&
    min4 !== null && min1 !== undefined) 
    {
        min1.addEventListener("click", () => cambiarFotoPpal("min1"));

        min2.addEventListener("click", function(){
            cambiarFotoPpal("min2");
        })

        min3.addEventListener("click", function(){
            cambiarFotoPpal("min3");
        })

        min4.addEventListener("click", () => cambiarFotoPpal("min4"))
    };
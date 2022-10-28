    //botón de pantalla completa
    var mapId = document.getElementById('map');
    function fullScreenview(){
        if(document.fullscreenElement){
            document.exitFullscreen()
        }else{
            
        }

        mapId.requestFullscreen();
    }

   //Imprimir mapa
    L.control.browserPrint({
        position: 'topright', 
        title: 'Imprimir recorte de pantalla'
    }).addTo(map);


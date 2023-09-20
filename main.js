function playlist(){
    let canciones = document.getElementById('agregar_canciones').value
    let playlist = document.getElementById('playlist').value

    let btnBloquear = document.getElementById('btn-crear-canciones')
    btnBloquear.disabled = true
   
    if(canciones.length == 0){
        alert('Ingrese un numero de canciones')
    }else if(playlist.length == 0){
        alert('Ingrese un nombre a su PlayList')
    }else{

    //Enviamos al HTML el h3 de la seccion escribir canciones
    document.getElementById('repositorio-canciones').innerHTML = '<h3 class="text-2xl text-[#FC8C05]">Escribe tus canciones favoritas 🧑‍🎤</h3>'

    //Creamos la variable que contendra el HTML de agregar canciones
    const inputCanciones = document.getElementById('input-canciones')

    for(let i = 1; i<=canciones; i++){

        //Construcción de los input de las canciones agregadas

        //Creamos el DIV contenedor
        const crearDiv = document.createElement('div')
        //vinculamos el DIV del HTML con el que hemos creado
        inputCanciones.appendChild(crearDiv)
        //Agregamos el input dentro del DIV creado
        crearDiv.innerHTML = `<h3>${i}.- </h3><input class="border-2 w-[150px]" type="text" name="canciones" id="canciones">`
    }


    //Construcción del boton Crear PLaylist
    const buttonCrearPlaylist = document.getElementById('button-crearPlaylist')
    const crearButton = document.createElement('div')
    buttonCrearPlaylist.appendChild(crearButton)

    crearButton.innerHTML = '<button class="inline-block rounded bg-amber-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]" onclick="crearPlaylist()" id="btn-crear-playlist">Crear PlayList</button>'
}
}


function crearPlaylist(){  
    let playlist = document.getElementById('playlist').value
    let cancionesAgregadas = document.getElementsByName('canciones')

    let btnBloquear = document.getElementById('btn-crear-playlist')
    btnBloquear.disabled = true

    const divResultado = document.getElementById('resultado')
    const crearDiv = document.createElement('div')
    divResultado.appendChild(crearDiv)
    crearDiv.innerHTML = `<p class="text-2xl text-[#FC8C05]">Tu playlist se llama "${playlist}" 🎵 y las canciones agregadas son:`

    let arrayCanciones = []
    for(let i=0; i< cancionesAgregadas.length; i++){
        arrayCanciones[i]=cancionesAgregadas[i].value

        const divResultado = document.getElementById('resultado')
        const crearDiv = document.createElement('div')
        divResultado.appendChild(crearDiv)
        crearDiv.innerHTML = `<p class="text-[#FC8C05] text-xl	"> ${i+1}.- ${arrayCanciones[i]}`
        
    }

    const divReset = document.getElementById('reset')
    const crearDiv2 = document.createElement('div')
    divReset.appendChild(crearDiv2)
    crearDiv2.innerHTML = '<button class="inline-block rounded bg-amber-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]" onclick="reset()" id="btn-crear-playlist">Reset</button>'

    
}


function reset(){
    //document.getElementById("main").innerHTML = "";   
    window.location.reload();

}
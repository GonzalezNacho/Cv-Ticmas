const foto = document.getElementById('foto');
const nombre = document.getElementsByClassName('nombre');
const botonNav = document.getElementById('icon-nav');

const generarUsuario = async() => {
    const url = 'https://randomuser.me/api/?nat=es&gender=male&inc=gender,name,picture';
    const respuesta = await fetch(url);
    const {results}  = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.large;
    nombre[0].innerHTML = datos.name.first +" "+ datos.name.last;
    nombre[1].innerHTML = datos.name.first +" "+ datos.name.last;
    console.log(datos);
}

const menuResponsive = () => {
    const nav = document.getElementById("nav");
    nav.className==="" ? nav.className = "responsive" : nav.className = "";
}

document.addEventListener('DOMContentLoaded', generarUsuario);
document.addEventListener('click', menuResponsive);
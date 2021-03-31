import "regenerator-runtime/runtime.js";
import "../../assets/scss/style.scss";

import Serie from "./Serie";
import Personaje from "./Personaje";

const llamarPersonajes = (() => {
  const urlBase = "https://rickandmortyapi.com/api";
  // Variable privada que almacene la cantidad de personajes a mostrar.
  let cantidadPersonajes = 0;

  const dataPersonajes = async (urlAPI, urlP) => {
    let arr = [];
    try {
      const req = await fetch(urlAPI + urlP);
      const data = await req.json();
      arr = data.results;
      //console.log(arr);
    } catch (error) {
      console.log(
        `Error en la obtención de los personajes desde la API: ${error}`
      );
    } finally {
      return arr;
    }
  };

  const funcionPublica1 = async () => {
    const serie = new Serie("Rick and Morty");

    const resultadosAPI = await dataPersonajes(urlBase, "/character");
    cantidadPersonajes = resultadosAPI.length;

    resultadosAPI.forEach((personaje) => {
      const per = new Personaje(
        personaje.id,
        personaje.name,
        personaje.species,
        personaje.image
      );
      serie.agregarPersonajes(per);
    });
    serie.getPersonajes();
  };
  const funcionPublica2 = () => {
    document.getElementById("spinner").style.display = "none";
    document.getElementById(
      "cantidadPersonajes"
    ).innerHTML = cantidadPersonajes;
  };
  return {
    funcionPublica1,
    funcionPublica2,
  };
})();

llamarPersonajes.funcionPublica1();
// llamarPersonajes.funcionPublica2();
setTimeout(() => {
  llamarPersonajes.funcionPublica2();
}, 2000);
class Serie {
  constructor(nombre, arraypersonajes = []) {
    this.nombre = nombre;
    this.arraypersonajes = arraypersonajes;
  }
  // Debe inyectar html para renderizar la card de personaje
  getPersonajes() {
    const marco = document.getElementById("CardPersonajes");

    this.arraypersonajes.forEach((personaje) => {
      //console.log(personaje);

      marco.innerHTML += `
                <div class="col-sm-3 col-lg-3 mt-5 mr-5">
                    <div class="card" style="width: 18rem;" >
                        <img src="${personaje.imagen}" class="card-img-top" alt="...">
                        <div class="card-body text-center m">
                            <h4 class="card-title">${personaje.obtenerNombre}</h4>
                            <h5 class="card-title">Especie : ${personaje.especie}</h5>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal-${personaje.obtenerID}">Ver Personaje</button>
                        </div>
                    </div>
                </div>
                `;
    });
  }
  // this.personajes es una arreglo!
  agregarPersonajes(personaje) {
    // Si el parámetro es un objeto o un string
    this.arraypersonajes.push(personaje);
  }
}

export default Serie;

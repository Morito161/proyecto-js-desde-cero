// Renderiza valores como texto, sin interpretar etiquetas HTML.
function mostrarDato(valor) {
    const parrafo = document.createElement("p");
    parrafo.textContent = String(valor);
    document.getElementById("salida-js").appendChild(parrafo);
}

//alert("hi")
console.log("my name is luis, como estas")
mostrarDato("my name is luis, como estas")
console.error("Hola mundo como estan")  //muestra si hay algún error
console.warn("precaution")
console.table("BMW", "MCLaren", "Ferrari", "Audi", "Mercedes Bens")

const carros = ["BMW", " MCLAREN", " FERRARI", " AUDI", " MERCEDES BENZ"]
console.log("----tipos de datos----", carros, typeof carros)
mostrarDato(carros)
console.log(carros [4], typeof carros)
console.log(carros [2], typeof carros [2])
console.log("Mi carro favorito es el: ", carros [1], typeof carros [1])
mostrarDato(`Mi carro favorito es el: ${carros [1]}`)
console.log(`Mi segundo carro favorito es el: ${carros [2]}`)
mostrarDato(`Mi segundo carro favorito es el: ${carros [2]}`)

//Boolean

const buenDesarrollador = true
console.log("buenDesarrollador", typeof buenDesarrollador)
console.log(`Luis sera un excelente Desarrollador ${buenDesarrollador}`)

const calificacion = null
console.log("mi calificacion sera", calificacion, "ya que dependera de mi proyecto", typeof calificacion)

const suma = 10 + 32
console.log(suma)
mostrarDato(suma)

const number = "Veinticinco"
console.log(number, typeof number)
mostrarDato(number)

const numero = -666
console.log(numero, typeof numero)
mostrarDato(numero)

const number2 = 0
console.log(number2)

console.log(`"`)
mostrarDato(`"`)

const color = null
console.log("El color quedara ", color, "ya que no se ha definido aún", typeof color)
mostrarDato(color)


const casa = undefined
console.log(`La casa quedara por el momento ${casa} ya que no se sabe si se incluira o no`, typeof casa)

console.log("false", typeof false)
mostrarDato(`false ${typeof false}`)

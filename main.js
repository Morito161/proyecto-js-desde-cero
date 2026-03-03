//alert("hi")
console.log("my name is luis, como estas")
document.write("my name is luis, como estas" + "<br><br>")//escribe en el documento HTML
console.error("Hola mundo como estan")  //muestra si hay algún error
console.warn("precaution")
console.table("BMW", "MCLaren", "Ferrari", "Audi", "Mercedes Bens")

const carros = ["BMW", " MCLAREN", " FERRARI", " AUDI", " MERCEDES BENZ"]
console.log("----tipos de datos----", carros, typeof carros)
document.write(carros + "<br><br>")
console.log(carros [4], typeof carros)
console.log(carros [2], typeof carros [2])
console.log("Mi carro favorito es el: ", carros [1], typeof carros [1])
document.write(`Mi carro favorito es el: ${carros [1]} <br><br>`)
console.log(`Mi segundo carro favorito es el: ${carros [2]}`)
document.write(`Mi segundo carro favorito es el: ${carros [2]} <br><br>`)

//Boolean

const buenDesarrollador = true
console.log("buenDesarrollador", typeof buenDesarrollador)
console.log(`Luis sera un excelente Desarrollador ${buenDesarrollador}`)

const calificacion = null
console.log("mi calificacion sera", calificacion, "ya que dependera de mi proyecto", typeof calificacion)

const suma = 10 + 32
console.log(suma)
document.write(suma + "<br><br>")

const number = "Veinticinco"
console.log(number, typeof number)
document.write(number + "<br><br>")

const numero = -666
console.log(numero, typeof numero)
document.write(numero + "<br><br>")

const number2 = 0
console.log(number2)

console.log(`"`)
document.write(`"` + "<br><br>")

const color = null
console.log("El color quedara ", color, "ya que no se ha definido aún", typeof color)
document.write(color + "<br><br>")


const casa = undefined
console.log(`La casa quedara por el momento ${casa} ya que no se sabe si se incluira o no`, typeof casa)

console.log("false", typeof false)
document.write("false ", typeof false)

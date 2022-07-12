      
let mayus = document.getElementById("btn_mayusculas")
let dog = document.getElementById("btn_ahumano")
let pokemons = document.getElementById("btn_muestra")


mayus.addEventListener("click",ConvertirMayusculas)
dog.addEventListener("click",calculateDogAge)
pokemons.addEventListener("click",MuestraPokemon)

class Pokemon {
  nombre = ""
  especie = ""
  ataque = 0
  defensa = 0

  constructor(nom,esp,ata,def){
    this.nombre = nom
    this.especie = esp
    this.ataque = ata
    this.defensa = def
  }
}
function ConvertirMayusculas(event){
  event.preventDefault()
  let texto = document.getElementById("txt_may").value
  let placeholder_texto = document.getElementById("txt_may")
  texto_convertido = texto.toLowerCase()
  placeholder_texto.innerHTML = texto_convertido
}
function calculateDogAge(event){
  event.preventDefault()
  let human_age = document.getElementById("edad_humano").value
  let dog_age = human_age * 7
  document.getElementById("edad_perro").value = dog_age
}
function MuestraPokemon(event){
  event.preventDefault()
  const charmander = new Pokemon("Charmander","Dragon",10,7)
  const pikachu = new Pokemon("Pikachu",'Electrico',9,9)
  document.getElementById(nombre_poke1).value = pikachu.nombre
  document.getElementById(especie_poke1).value = pikachu.especie
  document.getElementById(ataque_poke1).value = pikachu.nombre
  document.getElementById(defensa_poke1).value = pikachu.nombre
  document.getElementById(nombre_poke2).value = charmander.nombre
  document.getElementById(especie_poke2).value = charmander.especie
  document.getElementById(ataque_poke2).value = charmander.nombre
  document.getElementById(defensa_poke2).value = charmander.nombre

}
      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */



      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */

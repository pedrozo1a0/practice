class Ninja {
    constructor(nombre){
        this.nombre= nombre;
        this.salud;
        this.velocidad= 3;
        this.fuerza= 3;
    }
    sayName(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
    //agrega un método: showStats () - Esto debería mostrar el nombre, la fuerza, la velocidad y la salud del Ninja.
    showStats(){
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad}, Salud: ${this.salud} `);
    }
    drinkSake(){
        this.salud+= 10;
    }
}
class Sensei extends Ninja{
    constructor(nombre){
        super(nombre);
        this.salud= 200;
        this.velocidad=10;
        this.fuerza=10;
        this.sabiduria= 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Los que se apartan del sendero de la justicia son cobardes, pero bajo el mando de un gran lider la cobardia no sobrevive;")
    }
}

let kakashi= new Sensei("Kakashi");
console.log(kakashi);
kakashi.speakWisdom();
kakashi.showStats();

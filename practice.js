class Ninja {
    constructor(nombre){
        this.nombre= nombre;
        this.salud= 0;
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
        console.log(this.salud);
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


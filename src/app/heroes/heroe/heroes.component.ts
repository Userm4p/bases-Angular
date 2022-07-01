import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html',
    styleUrls:['heroe.component.css']
})
export class HeroeComponent {

    nombre: string = 'Ironman';
    edad: number = 45;
    nada:string=''

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    demostracion(a:string){
        this.nada = a;
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 15;
    }

}
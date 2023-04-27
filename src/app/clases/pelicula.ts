export class Pelicula{
   public id: number;
   public nombre: string;
   public tipo: 'terror' | 'comedia' | 'amor' | 'otros';
   public fecha: string;
   public publico: number;
   public imagen: string;
    
    constructor(id:number, nombre:string, tipo:any, fecha:string, publico:number, imagen:string){
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.publico = publico;
      this.imagen = imagen;  
      if(tipo == "terror" || tipo == "comedia" || tipo == "amor"){
        this.tipo = tipo;
      }else{
        this.tipo = "otros";
      }
    }
  }
  
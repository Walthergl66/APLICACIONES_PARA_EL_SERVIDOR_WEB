


export class FlashcardEntity {
  id: number;
  pregunta: string;
  respuesta: string;
  fechaCreacion: Date;

  constructor(
    id: number,
    pregunta: string,
    respuesta: string,
    fechaCreacion: Date
  ) {
    this.id = id;
    this.pregunta = pregunta;
    this.respuesta = respuesta;
    this.fechaCreacion = fechaCreacion;
  }
public static fromObject(obj: any): FlashcardEntity {
    return new FlashcardEntity(
      obj.id,
      obj.pregunta,
      obj.respuesta,
      new Date(obj.fechaCreacion)
    );
  }
}



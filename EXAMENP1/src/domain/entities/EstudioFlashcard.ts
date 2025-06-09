

export class EstudioFlashcard {
  id: number;
  flashcardId: number;
  usuarioId: number;
  fechaEstudio: Date;

  constructor(
    id: number,
    flashcardId: number,
    usuarioId: number,
    fechaEstudio: Date
  ) {
    this.id = id;
    this.flashcardId = flashcardId;
    this.usuarioId = usuarioId;
    this.fechaEstudio = fechaEstudio;
  }
}


export class FlashcardCategoriaEntity {
  id: number;
  flashcardId: number;
  categoriaId: number;

  constructor(id: number, flashcardId: number, categoriaId: number) {
    this.id = id;
    this.flashcardId = flashcardId;
    this.categoriaId = categoriaId;
  }
}

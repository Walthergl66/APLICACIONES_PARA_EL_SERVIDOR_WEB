import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { FlashcardEntity } from '../../domain/entities/FlashcardEntity';

const dataFile = path.join(__dirname, '../../data/flashcards.json');

// Leer flashcards desde archivo
const readFlashcards = (): FlashcardEntity[] => {
  const data = fs.readFileSync(dataFile, 'utf-8');
  return JSON.parse(data).map((obj: any) => FlashcardEntity.fromObject(obj));
};

// Guardar flashcards en archivo
const saveFlashcards = (flashcards: FlashcardEntity[]) => {
  fs.writeFileSync(dataFile, JSON.stringify(flashcards, null, 2), 'utf-8');
};

// GET /flashcards
export const getAllFlashcards = (req: Request, res: Response) => {
  const flashcards = readFlashcards();
  res.json(flashcards);
};

// POST /flashcards
export const createFlashcard = (req: Request, res: Response) => {
  try {
    const flashcards = readFlashcards();
    const newId = Math.max(...flashcards.map(f => f.id), 0) + 1;
    const nueva = FlashcardEntity.fromObject({
      ...req.body,
      id: newId,
      fechaCreacion: new Date().toISOString()
    });
    flashcards.push(nueva);
    saveFlashcards(flashcards);
    res.status(201).json(nueva);
  } catch (error) {
  if (error instanceof Error) {
    res.status(400).json({ error: error.message });
  } else {
    res.status(400).json({ error: 'Error desconocido' });
  }
}
};

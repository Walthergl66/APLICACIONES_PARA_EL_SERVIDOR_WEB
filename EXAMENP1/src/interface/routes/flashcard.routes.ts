import { Router } from 'express';
import { getAllFlashcards, createFlashcard } from '../controllers/flashcard.controller';

const router = Router();

router.get('/flashcards', getAllFlashcards);
router.post('/flashcards', createFlashcard);

export default router;

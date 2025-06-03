export class Riego {
  constructor(
    public id: number,
    public cantidadAgua: number,
    public fecha: Date,
    public duracionMinutos: number,
    public volumenLitros: number,
    public activadoAutomaticamente: boolean,
    public zonaCultivoId: number
  ) {}
}

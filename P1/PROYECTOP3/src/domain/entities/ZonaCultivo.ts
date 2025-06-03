export class ZonaCultivo {
  constructor(
    public id: number,
    public nombre: string,
    public ubicacion: "Norte" | "Sur" | "Este" | "Oeste" | "Centro",
    public tipoSuelo: string,
    public cultivoActual: string
  ) {}
}

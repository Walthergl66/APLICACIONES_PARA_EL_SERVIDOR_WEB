export class Sensor {
  constructor(
    public id: number,
    public tipo: string,
    public modelo: string,
    public unidadMedida: string,
    public estado: 'activo' | 'inactivo' | 'mantenimiento',
    public fechaUltimaLectura: Date,
    public zonaCultivoId: number
  ) {}
}

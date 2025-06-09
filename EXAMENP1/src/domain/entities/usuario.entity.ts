


export class UsuarioEntity {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  password: string;
  fechaCreacion: Date;

  constructor(
    id: number,
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    fechaCreacion: Date
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.fechaCreacion = fechaCreacion;
  }
  public static fromObject(obj: any): UsuarioEntity {
    return new UsuarioEntity(
      obj.id,
      obj.nombre,
      obj.apellido,
      obj.email,
      obj.password,
      new Date(obj.fechaCreacion)
    );
  }
}
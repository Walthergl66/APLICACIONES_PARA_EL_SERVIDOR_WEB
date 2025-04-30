
# Definicion de variables
nombre_finca = "Mundo Verde"
temperatura = 25.5  # Grados Celsius
humedad = 60        # Porcentaje
cultivo_activo = True

# Interfaces
from abc import ABC, abstractmethod

class ICultivo(ABC):
    @abstractmethod
    def mostrar_informacion(self):
        pass

# Clase Cultivo
class Cultivo(ICultivo):
    def __init__(self, nombre, tipo, fecha_siembra, estado, riego_necesario, plagas_detectadas, superficie):
        self.nombre = nombre
        self.tipo = tipo
        self.fecha_siembra = fecha_siembra
        self.estado = estado
        self.riego_necesario = riego_necesario
        self.plagas_detectadas = plagas_detectadas
        self.superficie = superficie

    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}")
        print(f"Tipo: {self.tipo}")
        print(f"Fecha de siembra: {self.fecha_siembra}")
        print(f"Estado: {self.estado}")
        print(f"Riego necesario: {self.riego_necesario}")
        print(f"Plagas detectadas: {self.plagas_detectadas}")
        print(f"Superficie: {self.superficie} ha\n")

# Lista de cultivos (solo objetos Cultivo)
cultivos = [
    Cultivo("Tomate", "Hortaliza", "2023-03-01", "Crecimiento", True, False, 2.5),
    Cultivo("Lechuga", "Hortaliza", "2023-03-15", "Cosecha", False, True, 1.0),
    Cultivo("Zanahoria", "Hortaliza", "2023-04-01", "Crecimiento", True, False, 1.5),
    Cultivo("Pimiento", "Hortaliza", "2023-04-15", "Cosecha", False, True, 1.2)
]

# Función para agregar un cultivo
def agregar_cultivo(cultivos, cultivo):
    cultivos.append(cultivo)
    print(f"✅ El cultivo {cultivo.nombre} ha sido agregado.\n")

# Mostrar todos los cultivos
def mostrar_cultivos(lista):
    print("Cultivos registrados:")
    for cultivo in lista:
        cultivo.mostrar_informacion()

# Spread-like con diccionarios
nuevo_cultivo_dict = {
    "nombre": "Pepino",
    "tipo": "Hortaliza",
    "fecha_siembra": "2023-05-01",
    "estado": "Crecimiento",
    "riego_necesario": True,
    "plagas_detectadas": False,
    "superficie": 1.8
}
nuevo_cultivo = Cultivo(**nuevo_cultivo_dict)

# Función con *args
def registrar_cultivos(*nuevos):
    for c in nuevos:
        cultivos.append(c)

# Callback
def procesar_cultivos(lista, callback):
    for cultivo in lista:
        callback(cultivo)

# Simulación de Promise con async
import asyncio

async def guardar_cultivo(cultivo):
    await asyncio.sleep(2)
    cultivos.append(cultivo)
    return "Cultivo guardado correctamente."

async def registrar_confirmar(cultivo):
    print(f"Guardando cultivo {cultivo.nombre}...")
    mensaje = await guardar_cultivo(cultivo)
    print(mensaje)

# Ejecución
if __name__ == "__main__":
    # Agregar nuevo cultivo
    agregar_cultivo(cultivos, nuevo_cultivo)

    # Mostrar cultivos
    mostrar_cultivos(cultivos)

    # Procesar con callback
    print("🔁 Procesando con callback:")
    procesar_cultivos(cultivos, lambda c: print(f"Procesado: {c.nombre}"))

    # Registrar y confirmar
    asyncio.run(registrar_confirmar(Cultivo("Calabaza", "Hortaliza", "2023-05-05", "Siembra", True, False, 2.0)))

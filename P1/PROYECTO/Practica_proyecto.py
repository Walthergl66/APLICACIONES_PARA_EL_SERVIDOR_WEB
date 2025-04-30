# Clase para representar un cultivo
class Cultivo:
    def __init__(self, nombre, tipo, fecha_siembra, superficie):
        self.nombre = nombre                  # Nombre del cultivo
        self.tipo = tipo                      # Tipo (maíz, trigo, etc.)
        self.fecha_siembra = fecha_siembra    # Fecha de siembra
        self.superficie = superficie          # Superficie en hectáreas
        self.estado = "Sembrado"              # Estado actual

    def mostrar_info(self):
        print(f"Nombre: {self.nombre}")
        print(f"Tipo: {self.tipo}")
        print(f"Fecha de siembra: {self.fecha_siembra}")
        print(f"Superficie: {self.superficie} ha")
        print(f"Estado: {self.estado}\n")

# Lista para almacenar cultivos
cultivos = []

# Función para registrar un cultivo
def registrar_cultivo():
    nombre = input("Nombre del cultivo: ")
    tipo = input("Tipo de cultivo (maíz, trigo...): ")
    fecha = input("Fecha de siembra (dd/mm/aaaa): ")
    superficie = float(input("Superficie (en ha): "))

    cultivo = Cultivo(nombre, tipo, fecha, superficie)
    cultivos.append(cultivo)
    print("\n✅ Cultivo registrado correctamente.\n")

# Función para listar todos los cultivos
def listar_cultivos():
    if not cultivos:
        print("No hay cultivos registrados.\n")
        return
    for i, c in enumerate(cultivos):
        print(f"{i+1}. {c.nombre} ({c.tipo}) - {c.estado}")

# Función para ver detalles de un cultivo específico
def ver_detalles():
    listar_cultivos()
    idx = int(input("Ingrese el número del cultivo a ver: ")) - 1
    if 0 <= idx < len(cultivos):
        print()
        cultivos[idx].mostrar_info()
    else:
        print("❌ Opción inválida.\n")

# Menú básico
def menu():
    while True:
        print("=== Cultivo Manager ===")
        print("1. Registrar cultivo")
        print("2. Listar cultivos")
        print("3. Ver detalles de un cultivo")
        print("4. Salir")

        opcion = input("Seleccione una opción: ")

        if opcion == "1":
            registrar_cultivo()
        elif opcion == "2":
            listar_cultivos()
        elif opcion == "3":
            ver_detalles()
        elif opcion == "4":
            print("Saliendo...")
            break
        else:
            print("❌ Opción inválida.\n")

# Ejecutar el menú
menu()

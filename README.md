# APLICACIONES_PARA_EL_SERVIDOR_WEB
Hola como estas?

# EXAMEN 1
Punto a punto
# Analizar las imagenes del problema \

# Definir las entidades relaciones u atributos que modelan el dominio, asi como la abstraccion de sus capas


# Usuario
Sera el que se registre a la app y el cual pueda crear o revisar 1 a muchas flascard 

# flash card
sera la tarjeta se el usuario creara con su respectiva informacion como su pregunta y respuesta 

# Categoria 
Habran distita categorias de flash card ya sea de cultura general, matematica, video juegos etc

# categoria flash card 
Ya creada la flash card esta se la podra asignar a una categoria donde buscara la categoria por id y pertenecera a esa categoria 

# Estudio flash card 
Sera un historial de cada usuario ya sea que revice y guarde informacion de un flash card o cree con su respectivas fechas




# punto dos  implementar al menos una reuta del servicio rest, usando un datasource basado en un objeto JSON

# Diseñar e implementar al menos una ruta que interactue con una de las entidades definidas

# El datasource debe ser un objeto JSON en memoria o leido desde un archivo 

# Se valora 
La correcta manipulacion del datasource
el uso adecuado de la ruta rest (verbos HTTP, estructura, etc)


# Punto 3 
# implementar de manera aislada un servicio rest que manipule al menos una de las entidades del dminio

# la arquitectura debe incluir unicamente 
capa de presentacion(Controller o router)
capa de logica de negocio de (Service)

# Se valora 
la separacion de responsabilidades 

la claridad de codigo
el correcto flujo de datos entr las

# Punto 4 en el servicio principal que contiene su dominio implementar una capa adicional para consumo de servicios rest
# esta capa debe realizar peticiones http hacia los endponits definidos en el propio servicio auxiliar 

# se puede usar librerias como fech axios etc

# demostrar el entendimiento de como interactuan servicios rest y como encapsulnneste tipo de comunicacion

# se valora 
la correpta encapsulacion de las peticiones 
el uso adecuado de la capa cliente
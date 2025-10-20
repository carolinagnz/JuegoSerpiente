# JuegoSerpiente

Initial Commit

Plan del juego de la serpiente
Paso 1 – Crear el tablero

Qué hacer: Representar el tablero como una cuadrícula de filas x columnas. Cada celda será un <div> que luego podremos colorear según lo que haya dentro (serpiente, manzana, obstáculo).

Cómo:

Crear un contenedor <div id="tablero">.

Usar un bucle for anidado para crear todas las celdas (filas * columnas).

Cada celda recibe un id único: celda-x-y, para poder modificarla luego.

Conceptos:


Bucle for: Para recorrer filas y columnas y crear cada celda.

Arrays: Aunque el tablero se pinta directamente en el DOM, podemos usar arrays para almacenar posiciones de manzanas y obstáculos.



Paso 2 – Inicializar la serpiente

Qué hacer: La serpiente es un conjunto de nodos o segmentos que se moverán juntos. Inicialmente tiene 1 nodo (la cabeza) o 2 si queremos un inicio más largo.

Cómo:

Cada segmento se guarda como un objeto con coordenadas {x, y}.

Guardamos todos los segmentos en un array serpiente.

Conceptos:

Arrays: Guardan el estado de la serpiente; cada elemento es un segmento.

Objetos: Cada segmento tiene propiedades x y y para indicar su posición.

Variables de estado: serpiente representa la situación actual de la serpiente en todo momento.



Paso 3 – Generar manzanas

Qué hacer: Colocar n manzanas en posiciones aleatorias del tablero, que la serpiente deberá comer.

Cómo:

Generar coordenadas aleatorias usando Math.floor(Math.random() * columnas) para x y Math.floor(Math.random() * filas) para y.

Comprobar que no coincidan con la serpiente ni con obstáculos (para no solaparse).

Guardarlas en un array pomas.

Conceptos:

Generación aleatoria: Math.random() devuelve un número entre 0 y 1. Multiplicando por el tamaño y usando Math.floor() obtenemos enteros válidos.

Prevención de colisiones: Usamos some() para comprobar si la posición ya está ocupada.

Arrays y objetos: Cada poma es un objeto {x, y} dentro del array pomas.



Paso 4 – Generar obstáculos

Qué hacer: Colocar obstáculos que bloqueen el movimiento de la serpiente.

Cómo:

Generar posiciones aleatorias como las manzanas.

Evitar solapamiento con la serpiente y manzanas.

Guardarlas en un array obstaculos.

Conceptos:

Arrays y objetos: Para guardar los obstáculos.

Randomización y prevención de solapamiento: Igual que con las manzanas.

Lógica de juego: Los obstáculos añaden dificultad, enseñando cómo usar la programación para crear reglas.



Paso 5 – Pintar el tablero

Qué hacer: Mostrar visualmente en pantalla la serpiente, las manzanas y los obstáculos.

Cómo:

Recorrer el tablero y limpiar todas las celdas (celda.className = "celda").

Recorrer serpiente, pomas y obstaculos y añadir clases CSS correspondientes (serpiente, poma, obstaculo).

Conceptos:

Recorrido de arrays: Para dibujar cada elemento según su coordenada.

Separación de datos y presentación: Los datos (arrays) no se mezclan con la apariencia (clases CSS).



Paso 6 – Movimiento de la serpiente

Qué hacer: La serpiente se mueve automáticamente en una dirección.

Cómo:

Crear un objeto cabeza con la nueva posición según direccion.

Usar unshift para agregar la cabeza al inicio del array serpiente.

Si no se come poma, eliminar la cola con pop().

Conceptos:

Arrays (unshift y pop): unshift agrega la nueva cabeza; pop elimina la cola.

Objetos: La cabeza y los segmentos son {x, y}.

Intervalos (setInterval): Para que el movimiento sea automático y repetitivo.

Variables de estado: direccion indica hacia dónde se mueve la serpiente.



Paso 7 – Control con teclado

Qué hacer: Cambiar la dirección de la serpiente según las flechas del teclado.

Cómo:

Escuchar el evento keydown.

Actualizar direccion solo si no es la opuesta a la actual.

Conceptos:

Condicionales: Para impedir que la serpiente se choque consigo misma inmediatamente.

Variables globales: Mantener la dirección accesible en cada tick del juego.



Paso 8 – Detección de colisiones

Qué hacer: Revisar si la cabeza choca con:

Poma → crecer y desaparecer la poma.

Obstáculo → fin del juego.

Cuerpo de la serpiente → fin del juego.

Pared → fin del juego.

Cómo:

Usar some() o findIndex() para comprobar coincidencias de coordenadas.

Reiniciar el juego si hay colisión con obstáculo, pared o cuerpo.

Si colisiona con poma, eliminarla y crecer la serpiente.

Conceptos:

Arrays y búsqueda: some() devuelve true si algún elemento cumple la condición; findIndex() devuelve el índice si coincide.

Condicionales: Tomar decisiones según tipo de colisión.

Reinicio de juego: Lógica de reinicio mediante función iniciarJuego().

Comparación de objetos: Verificar x y y para determinar colisión.



Paso 9 – Gestión de niveles

Qué hacer: Cuando se comen todas las manzanas:

Aumentar longitud de la serpiente (un nodo).

Aumentar número de obstáculos.

Aumentar la velocidad.

Cómo:

Comprobar if(pomas.length === 0).

Agregar nodo al final de la serpiente con push().

Generar nuevas posiciones de obstáculos.

Reducir tiempo del setInterval para aumentar la velocidad.

Generar nuevas manzanas para el siguiente nivel.

Conceptos:

Arrays (push): Para crecer la serpiente.

Intervalos dinámicos: Ajustar velocidad reiniciando setInterval.

Variables de control de nivel: Número de obstáculos y velocidad.

Lógica de juego progresiva: Dificultad creciente según el nivel.



Paso 10 – Mostrar puntos y estado

Qué hacer: Mostrar la puntuación al usuario en tiempo real.

Cómo:

Actualizar <span id="puntos"> cada vez que se come una poma.

Conceptos:

DOM (textContent): Modificar contenido de un elemento.

Variables acumulativas: puntos aumenta según manzanas comidas.

Actualización dinámica de la interfaz: Reflejar cambios de estado en pantalla.



Paso 11 – Reinicio del juego

Qué hacer: Reiniciar todo cuando se pierde o al pasar de nivel.

Cómo:

Limpiar arrays (serpiente, pomas, obstaculos).

Resetear velocidad y dirección.

Dibujar tablero de nuevo y crear nuevas manzanas y obstáculos.

Conceptos:

Funciones de inicialización (iniciarJuego()): Para reiniciar todo en un solo paso.

Variables globales: Mantener consistencia del estado.

Reutilización de código: Evitar duplicar lógica creando funciones que se llaman en varios momentos.


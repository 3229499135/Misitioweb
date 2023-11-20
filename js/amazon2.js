var textArticleUno = `
        <ul class='info-text-info-articulo'>
            <li>Compatible con múltiples plataformas: compatible con PlayStation 4, nueva Xbox One, PC, Nintendo 3DS, laptop, PSP, tableta, iPad, computadora, teléfono móvil. Tenga en cuenta que necesita un adaptador Microsoft adicional (no incluido) cuando se conecta con un controlador Xbox One versión antigua.</li>
            <li>Subwoofer estéreo envolvente: sonido claro que funciona con latón fuerte, espléndido aislamiento de ruido ambiental y controlador de neodimio magnético de alta precisión de 1.575 pulgadas, precisión de posicionamiento acústico mejora la sensibilidad de la unidad de altavoz, lo que te ofrece un campo de sonido vívido, claridad de sonido, sonido de sensación de impacto. Perfecto para varios juegos como Halo 5 Guardians, Metal Gear Solid, Call of Duty, Star Wars Battlefront, Overwatch, World of Warcraft Legion, etc.</li>
            <li>Micrófono de aislamiento de ruido: el micrófono onmi-direccional integrado con auriculares puede transmitir comunicación de alta calidad con su función de detección de ruido premium, puede captar sonidos con gran sensibilidad y eliminar el ruido, lo que te permite entregar o recibir mensajes claramente mientras estás en un juego. Diseño de micrófono flexible largo muy conveniente para ajustar el ángulo del micrófono.</li>
            <li>Gran diseño humanizado: almohadillas de proteína de permeabilidad al aire superior, cómodas y de buena permeabilidad al aire, viga de cabeza de múltiples puntos, cuerda de cuerda con especificaciones de ingeniería del cuerpo humano que puede reducir la discapacidad auditiva y el sudor térmico. Material de cuero respetuoso con la piel para un período de uso más prolongado. Las luces LED deslumbrantes están diseñadas en los auriculares para resaltar la atmósfera del juego.</li>
            <li>Control de volumen sin esfuerzo: cable USB trenzado de alta resistencia a la tracción, antienrollamiento con controlador de volumen giratorio y silencio de micrófono de tecla, evita eficazmente que el cable de 49 pulgadas de largo se enrosque y te permite controlar el volumen fácilmente y silenciar el micrófono como control de volumen sin esfuerzo con una tecla.</li>
        </ul>
        <p><j class="nota">Nota:</j> Los productos con enchufes eléctricos están diseñados para usarse en EE. UU. Las tomas de corriente y la tensión difieren a nivel internacional. Es posible que este producto requiera un adaptador o conversor para poder usarse en su destino. Comprueba la compatibilidad antes de comprar.</p>
`;

let containerProducUno = document.getElementById("containerProducUno");
let containerProductoMainUno = document.getElementById("containerProductoMainUno");
let magnifierUno = document.getElementById("magnifierUno");
let containerProducDos = document.getElementById("containerProducDos");
let containerProductoMainDos = document.getElementById("containerProductoMainDos");
let magnifierDos = document.getElementById("magnifierDos");
let containerProducTres = document.getElementById("containerProducTres");
let containerProductoMainTres = document.getElementById("containerProductoMainTres");
let magnifierTres = document.getElementById("magnifierTres");
let text1 = document.getElementById("text1");
let textColor1 = document.getElementById("textColor1");
let textMarca = document.getElementById("textMarca");
let textModelo = document.getElementById("textModelo");
let textColor2 = document.getElementById("textColor2");
let textFactorForma = document.getElementById("textFactorForma");
let textInfoArticulo = document.getElementById("textInfoArticulo");
textInfoArticulo.innerHTML = textArticleUno;

function contentArticleUno() {
    var text = "BENGOO G9000 - Auriculares estéreo para juegos para PS4, PC, Xbox One PS5, cancelación de ruido, auriculares con micrófono, luz LED, sonido envolvente de bajos, orejeras de memoria suave para portátil, Mac, Nintendo NES Games";
    var color =  "Azul";
    var marca = "BENGOO";
    var modelo = "G9000";
    var factorForma = "Por Arriba de la Oreja";

    containerProducUno.style.display = "block";
    containerProducDos.style.display = "none";
    containerProducTres.style.display = "none";
    containerProductoMainUno.style.display = "flex";
    containerProductoMainDos.style.display = "none";
    containerProductoMainTres.style.display = "none";

    text1.innerText = text;
    textColor1.innerText = color;
    textMarca.innerText = marca;
    textModelo.innerText = modelo;
    textColor2.innerText = color;
    textFactorForma.innerText = factorForma;
    textInfoArticulo.innerHTML = textArticleUno;

    imageContainer.addEventListener('mousemove', (e) => {
        const containerRect = imageContainer.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;
    
        const backgroundX = (offsetX / imageContainer.offsetWidth) * 100;
        const backgroundY = (offsetY / imageContainer.offsetHeight) * 100;
    
        magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
        magnifier.style.display = 'block';
    });
    /* imageContainer.addEventListener('mousemove', (e) => {
        cordenadas.style.left = e.clientX - cordenadas.offsetWidth / 0.84 + 'px';
        cordenadas.style.top = e.clientY - cordenadas.offsetHeight / 0.74 + 'px';
        cordenadas.style.display = 'block';
    }); */
    
    imageContainer.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
        /* cordenadas.style.display = 'none'; */
    });
}

function contentArticleDos() {
    var text = "Auricular para juegos para PS4, Xbox One, computadora, laptop, Mac, PS4 con micrófono, auriculares sobre la oreja, cancelación de ruido, sonido envolvente, luz LEDAuricular para juegos para PS4, Xbox One, computadora, laptop, Mac, PS4 con micrófono, auriculares sobre la oreja, cancelación de ruido, sonido envolvente, luz LED";
    var color =  "Blanco";
    var marca = "PHOINIKAS";
    var modelo = "PHOINIKAS H-1";
    var factorForma = "Over Ear";
    var textArticle = `
        <ul class='info-text-info-articulo'>
            <li>Compatible con múltiples plataformas: los auriculares para juegos son adecuados para todos los dispositivos de interfaz de 0.138 in, incluyendo computadoras, portátiles, tabletas, teléfonos móviles, PSP, iPad, PlayStation 4, PS Vita, Xbox One / One S, Nintendo Switch, Windows PC, Mac OS PC, etc. (dispositivos que no sean 0.138 in requieren adaptadores adicionales)</li>
            <li>Experiencia de juego inmersiva: el controlador magnético de neodimio magnético de alta precisión de 1.575 in te ofrece un campo de sonido vívido, sonido claro y sonido impactante, que puede satisfacer tus necesidades de sonido. La precisión del posicionamiento acústico mejora la sensibilidad de la unidad del altavoz. Adecuado para una variedad de juegos, pero también para películas, música y mucho más.</li>
            <li>Micrófono con aislamiento de ruido: el micrófono onmi-direccional integrado puede transmitir comunicación de alta calidad con su función de concesión de ruido premium, puede recoger sonidos con gran sensibilidad y eliminar el ruido, lo que te permite entregar o recibir mensajes claramente mientras estás en un juego. Diseño de micrófono largo y flexible muy conveniente para ajustar el ángulo del micrófono.</li>
            <li>Diseño humanizado: los auriculares PS4 están hechos de almohadillas de espuma viscoelástica de piel sintética de alta calidad y cómodas. Pueden mejorar el efecto de aislamiento acústico, reducir la discapacidad auditiva y el sudor del calor, y mantener tu cabeza y orejas en un estado cómodo en todo momento. Son tan cómodas como las plumas, respiran libremente y son ergonómicas. Estándar, puede prolongar el tiempo de uso.</li>
            <li>Auriculares profesionales para juegos: hay un botón de control de volumen en la parte posterior de los auriculares Xbox One. Los auriculares utilizan alta resistencia a la tracción y cable USB trenzado antibobinado para prolongar la vida útil del cable.</li>
            <li>Diseño ligero: el diseño ligero es más adecuado para niños y adolescentes que otros auriculares PHIONIKAS, es un gran regalo para niños y niñas, familiares y amigos.</li>
            <li>❤ Nota 1: se requiere un adaptador adicional para su uso con Xbox One.</li>
            <li>❤ Nota 2: la rueda de ajuste de volumen se encuentra debajo de la orejera.</li>
        </ul>
        <p><j class="nota">Nota:</j> Los productos con enchufes eléctricos están diseñados para usarse en EE. UU. Las tomas de corriente y la tensión difieren a nivel internacional. Es posible que este producto requiera un adaptador o conversor para poder usarse en su destino. Comprueba la compatibilidad antes de comprar.</p>
    `;

    containerProducUno.style.display = "none";
    containerProducDos.style.display = "block";
    containerProducTres.style.display = "none";
    containerProductoMainUno.style.display = "none";
    containerProductoMainDos.style.display = "flex";
    containerProductoMainTres.style.display = "none";
    
    text1.innerText = text;
    textColor1.innerText = color;
    textMarca.innerText = marca;
    textModelo.innerText = modelo;
    textColor2.innerText = color;
    textFactorForma.innerText = factorForma;
    textInfoArticulo.innerHTML = textArticle;

    imageContainer.addEventListener('mousemove', (e) => {
        const containerRect = imageContainer.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;
    
        const backgroundX = (offsetX / imageContainer.offsetWidth) * 100;
        const backgroundY = (offsetY / imageContainer.offsetHeight) * 100;
    
        magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
        magnifier.style.display = 'block';
    });
    /* imageContainer.addEventListener('mousemove', (e) => {
        cordenadas.style.left = e.clientX - cordenadas.offsetWidth / 0.84 + 'px';
        cordenadas.style.top = e.clientY - cordenadas.offsetHeight / 0.74 + 'px';
        cordenadas.style.display = 'block';
    }); */
    
    imageContainer.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
        /* cordenadas.style.display = 'none'; */
    });
}

function contentArticleTres() {
    var text = "Auricular para juegos para PS4, Xbox One, computadora, laptop, Mac, PS4 con micrófono, auriculares sobre la oreja, cancelación de ruido, sonido envolvente, luz LEDAuricular para juegos para PS4, Xbox One, computadora, laptop, Mac, PS4 con micrófono, auriculares sobre la oreja, cancelación de ruido, sonido envolvente, luz LED";
    var color =  "Camo";
    var marca = "PHOINIKAS";
    var modelo = "PHOINIKAS H-1";
    var factorForma = "Over Ear";
    var textArticle = `
        <ul class='info-text-info-articulo'>
            <li>Compatible con múltiples plataformas: los auriculares para juegos son adecuados para todos los dispositivos de interfaz de 0.138 in, incluyendo computadoras, portátiles, tabletas, teléfonos móviles, PSP, iPad, PlayStation 4, PS Vita, Xbox One / One S, Nintendo Switch, Windows PC, Mac OS PC, etc. (dispositivos que no sean 0.138 in requieren adaptadores adicionales)</li>
            <li>Experiencia de juego inmersiva: el controlador magnético de neodimio magnético de alta precisión de 1.575 in te ofrece un campo de sonido vívido, sonido claro y sonido impactante, que puede satisfacer tus necesidades de sonido. La precisión del posicionamiento acústico mejora la sensibilidad de la unidad del altavoz. Adecuado para una variedad de juegos, pero también para películas, música y mucho más.</li>
            <li>Micrófono con aislamiento de ruido: el micrófono onmi-direccional integrado puede transmitir comunicación de alta calidad con su función de concesión de ruido premium, puede recoger sonidos con gran sensibilidad y eliminar el ruido, lo que te permite entregar o recibir mensajes claramente mientras estás en un juego. Diseño de micrófono largo y flexible muy conveniente para ajustar el ángulo del micrófono.</li>
            <li>Diseño humanizado: los auriculares PS4 están hechos de almohadillas de espuma viscoelástica de piel sintética de alta calidad y cómodas. Pueden mejorar el efecto de aislamiento acústico, reducir la discapacidad auditiva y el sudor del calor, y mantener tu cabeza y orejas en un estado cómodo en todo momento. Son tan cómodas como las plumas, respiran libremente y son ergonómicas. Estándar, puede prolongar el tiempo de uso.</li>
            <li>Auriculares profesionales para juegos: hay un botón de control de volumen en la parte posterior de los auriculares Xbox One. Los auriculares utilizan alta resistencia a la tracción y cable USB trenzado antibobinado para prolongar la vida útil del cable.</li>
            <li>Diseño ligero: el diseño ligero es más adecuado para niños y adolescentes que otros auriculares PHIONIKAS, es un gran regalo para niños y niñas, familiares y amigos.</li>
            <li>❤ Nota 1: se requiere un adaptador adicional para su uso con Xbox One.</li>
            <li>❤ Nota 2: la rueda de ajuste de volumen se encuentra debajo de la orejera.</li>
        </ul>
        <p><j class="nota">Nota:</j> Los productos con enchufes eléctricos están diseñados para usarse en EE. UU. Las tomas de corriente y la tensión difieren a nivel internacional. Es posible que este producto requiera un adaptador o conversor para poder usarse en su destino. Comprueba la compatibilidad antes de comprar.</p>
    `;

    containerProducUno.style.display = "none";
    containerProducDos.style.display = "none";
    containerProducTres.style.display = "block";
    containerProductoMainUno.style.display = "none";
    containerProductoMainDos.style.display = "none";
    containerProductoMainTres.style.display = "flex";
    
    text1.innerText = text;
    textColor1.innerText = color;
    textMarca.innerText = marca;
    textModelo.innerText = modelo;
    textColor2.innerText = color;
    textFactorForma.innerText = factorForma;
    textInfoArticulo.innerHTML = textArticle;

    imageContainer.addEventListener('mousemove', (e) => {
        const containerRect = imageContainer.getBoundingClientRect();
        const offsetX = e.clientX - containerRect.left;
        const offsetY = e.clientY - containerRect.top;
    
        const backgroundX = (offsetX / imageContainer.offsetWidth) * 100;
        const backgroundY = (offsetY / imageContainer.offsetHeight) * 100;
    
        magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
        magnifier.style.display = 'block';
    });
    /* imageContainer.addEventListener('mousemove', (e) => {
        cordenadas.style.left = e.clientX - cordenadas.offsetWidth / 0.84 + 'px';
        cordenadas.style.top = e.clientY - cordenadas.offsetHeight / 0.74 + 'px';
        cordenadas.style.display = 'block';
    }); */
    
    imageContainer.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
        /* cordenadas.style.display = 'none'; */
    });
}
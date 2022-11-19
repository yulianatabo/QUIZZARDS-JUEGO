function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [

    {
      pregunta: "¿Qué significan las tres R?",
      ayuda: "Te ayudan a tirar menos basura, ahorrar dinero y ser un consumidor más responsable",
      ayudaImg: "https://img.freepik.com/free-vector/hand-drawn-ecology-concept-background_23-2148200338.jpg?w=740&t=st=1667690507~exp=1667691107~hmac=df2e91557b1875b295b68766b7817947a03220979a7e98ccdede102f77ea9da6",
      imagen: "https://img.freepik.com/premium-vector/cute-happy-smiling-trash-bin-earth-planet-flat-cartoon-character-illustration-design-isolated-white-background-recycling-trash-sorted-garbage-save-earth-concept_92289-902.jpg?w=740",
      respuesta: "Reducir,reciclar y reutilizar",
      distractores: ["Repetir,recortar y reparar"],
    },
    {
        pregunta: "¿Como podemos cuidar el agua?",
        imagen: "https://img.freepik.com/premium-photo/hand-water-from-tap-drink_34152-2125.jpg?w=740",
        respuesta: "Ahorrando agua y manteniendo las llaves totalmente cerradas",
        distractores: ["Tapando tuberias"],
    },
    {
      pregunta: "¿Que componentes conforman el medio ambiente?",
      imagen:"https://img.freepik.com/free-vector/hand-drawn-world-environment-day-save-planet-illustration_52683-61570.jpg?w=740&t=st=1667691841~exp=1667692441~hmac=1621125d4dc6a924670bacc0334e82866eb10d32821c66146e46de2e6b3f3f13",
      respuesta: "Aire, agua y suelo",
      distractores: ["Fuego,carbón y biogestor"],
    },
    {
      pregunta: "¿Es importante utilizar los EPI(Elementos de protección individual) por qué?",
      imagen:"https://img.freepik.com/free-vector/personal-protective-equipment-poster_1284-73920.jpg?w=740&t=st=1667692425~exp=1667693025~hmac=b79420b3241e885a17d8ad8e5f7329c4a92b429dca3f44413528634a394745b5",
      ayuda:"Los EPI, Equipo de protección individual constituyen la última barrera de defensa del trabajador con respecto al riesgo laboral,de ahí su enorme importancia en el campo de la Seguridad,Salud y Bienestar",
      respuesta: "Evita la inhalación de partículas en el aire y accidentes laborales",
      distractores: ["Ayuda a mejorar la calidad del producto"],
    },
    {
        pregunta: "¿Que residuos van en la caneca blanca?",
        imagen:"https://img.freepik.com/premium-vector/green-trash-can-is-full-waste-flat-vector-illustration_124715-1281.jpg?w=740",
        ayuda:"Los Residuos Sólidos, constituyen aquellos materiales desechados tras su vida útil, y que por lo general por sí solos carecen de valor económico. Se componen principalmente de desechos procedentes de materiales utilizados en la fabricación, transformación o utilización de bienes de consumo.",
        respuesta: "Residuos aprovechables como plásticos,botellas,vidrios,metales,papel y cartón",
        distractores: ["Restos de comidas"],
    },
    {
        pregunta: "¿Cual es el recurso natural que se puede restaurar por procesos naturales a una velocidad superior  la del consumo por los seres humanos?",
        imagen:"https://img.freepik.com/free-vector/natural-environmental-resources-with-wind-power-resources-flat-illustration_1284-55736.jpg?w=826&t=st=1667693757~exp=1667694357~hmac=533c743c0e6d17500c10a39158def9fb2dd3d1737546c14aa63c66ca6d1d512b",
        ayuda:"Son recursos naturales todos los bienes de la naturaleza que sirven para el provecho del ser humano, tales como alimentos, materias primas y fuentes de energía.",
        ayudaImg:"https://img.freepik.com/premium-photo/heart-shaped-photography-sky-rain-forest-nature-background_56644-435.jpg?w=740",
        respuesta: "Recurso natural renovable",
        distractores: ["Recurso natural simple"],
    },
    {
        pregunta: "¿Por qué es importante cuidar el medio ambiente?",
        imagen:"https://img.freepik.com/free-vector/save-planet-cartoon-with-earth-globe-green-leaves-water-drops-recycling-symbol_107791-4487.jpg?w=900&t=st=1667694178~exp=1667694778~hmac=d2f12255b9d331243de82f8c4fff7c44874424863d13bb2f5803fc58ab9b354a",
        respuesta: "Debemos favorecer y garantizar tanto la supervivencia,como la evolución de los seres vivos o la biodiversidad de especies",
        distractores: ["Porque nos podemos morir y debemos mejorar las formas de vivir"],
    },
    {
        pregunta: "¿Como afecta la tecnología al medio ambiente?",
        imagen:"https://img.freepik.com/premium-photo/green-city-technology-shifting-towards-sustainable-alteration-concept_31965-33208.jpg?w=826",
        respuesta: "La afecta ya que cada vez que usamos electricidad,medios de transporte, medicamentos, productos para limpieza, calefacción producimos, aunque no sea de forma directa, desechos contaminantes",
        distractores: ["Porque navegamos mucho en internet y esto nos cansa mucho"],
    },
    {
        pregunta: "Es un proceso transformador del individuo y la sociedad para construir un nuevo estilo de vida",
        imagen:"https://img.freepik.com/free-vector/flat-design-ecology-concept-with-natural-elements_23-2148220332.jpg?w=360&t=st=1667695257~exp=1667695857~hmac=9097c7b20cbd3ecc32b0f7d1f37bfc22eccd0e2377aac3306a751e9d50a40dd3",
        respuesta: "Estudio ambiental",
        distractores: ["movimiento ambiental"],
    },
    {
        pregunta: "¿Cuales son los gases de efecto invernadero?",
        imagen:"https://img.freepik.com/free-vector/flat-design-carbon-neutral-illustration_23-2149423002.jpg?w=740&t=st=1667695770~exp=1667696370~hmac=a3f0766c4514552020d88902c6cfa1d3126606f128f6ee5628c64cf050810adb",
        ayuda:"El efecto invernadero es el efecto que se produce cuando el calor procedente de la radiación solar que llega a la superficie de un planeta no puede volver al espacio. El calor que nos llega procedente del sol está producido por la luz infrarroja. Cuando esta luz llega a la superficie de un planeta (como por ejemplo la Tierra), calienta su superficie. En condiciones normales, este calor más tarde vuelve al espacio, lo que permite que la temperatura del planeta en cuestión se mantenga estable",
        respuesta: "Dioxido de carbono,metano,vapor de agua",
        distractores: ["lluvias,aire contaminado, clorudio de sodio"],
    },


  ];



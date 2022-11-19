function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [

    {
      pregunta: "¿Cuántos litros de sangre tiene una persona adulta?",
      ayuda: "La cantidad de sangre varía de persona a persona.El volumen de sangre representa del 7 al 8% del peso corporal.De esta forma, en las personas adultas pesan entre 50 y 80 kg",
      ayudaImg: "https://img.freepik.com/free-vector/obesity-woman-weighing-scale-hospital-tiny-sad-girl-having-health-problems-diabetes-consulting-with-doctor-flat-vector-illustration-negative-impact-stomach-overweight-disease-concept_74855-25204.jpg?w=740&t=st=1667696989~exp=1667697589~hmac=16e5b4a70328fe09d38b7746ce79521f4b23ec3d88dedace42b6c2272e115cb6",
      imagen: "https://img.freepik.com/free-vector/hand-holding-blood-bag-type-donation_1308-110794.jpg?w=740&t=st=1667696915~exp=1667697515~hmac=b5a26f2707aa7e2670588239eb2522c0842e63bd5075e69addd8ba3a6e9a5b98",
      respuesta: "Tiene entre 4 y 6 litros",
      distractores: ["Tiene 10 litros"],
    },
    {
        pregunta: "La sal común está formada por dos elementos,¿Cuáles son?",
        imagen: "https://img.freepik.com/free-photo/salt-wooden-small-plate_1150-35678.jpg?w=740&t=st=1667697173~exp=1667697773~hmac=484ab70e9c16e3441265b0d3c3a9195967595d9609b60d26f811cb4926634116",
        respuesta: "Sodio y cloro",
        distractores: ["sodio y potasio"],
    },
    {
      pregunta: "¿Cuánto tiempo tarda la luz del sol en llegar a la tierra?",
      imagen:"https://img.freepik.com/premium-vector/cloudscape-blue-sky-with-clouds-bright-sun-paper-art-style_501557-190.jpg?w=360",
      ayuda:"El tiempo que tarda la luz del Sol en llegar a la tierra se calcula dividiendo la distancia que hay entre el sol y la tierra, aproximadamente 150,000,000 km,entre la velocidad de la luz, que es 300,000 km/s",
      respuesta: "8 minutos",
      distractores: ["12 minutos"],
    },
    {
      pregunta: "¿Cuál es el cromosoma que determina el sexo masculino?",
      imagen:"https://img.freepik.com/free-vector/diagram-showing-human-chromosome_1308-107303.jpg?w=360&t=st=1667699344~exp=1667699944~hmac=29e902d5566fc26f0214a59e30d6d66e38b635435247987ad73e43a807214397",
      respuesta: "El cromosoma Y",
      distractores: ["El cromosoma X"],
    },
    {
        pregunta: "¿En qué periodo de la prehistoria fue descubierto el fuego?",
        imagen:"https://img.freepik.com/free-vector/fire-background-design_1189-229.jpg?w=360&t=st=1667697702~exp=1667698302~hmac=a545be0db23c2738ea374b4059989b2293bca97c0a1729c80ecf981337df33c6",
        respuesta: "Paleolítico",
        distractores: ["Neolítico"],
    },
    {
        pregunta: "¿Cuantos decimales tiene el número PI?",
        imagen:"https://img.freepik.com/free-vector/hand-drawn-pi-day-illustration_23-2149297571.jpg?w=360&t=st=1667698072~exp=1667698672~hmac=05c8c21fe6fecdc5b6d36d6fa0694f20ca354820780062029f102e634ca0a0c8",
        respuesta: "Infinitos",
        distractores: ["Dos mil"],
    },
    {
        pregunta: "¿A quién se le aytribuye la frase:<Solo sé que nada sé>?",
        imagen:"https://cdn.memegenerator.es/imagenes/memes/full/21/90/21906801.jpg",
        respuesta: "Sócrates",
        distractores: ["Aristóteles"],
    },
    {
        pregunta: "¿Cuál fue el recurso utilizado inicialmente por el ser humano para explicar el origen de las cosas?",
        imagen:"https://img.freepik.com/free-vector/hand-drawn-flat-design-mythology-illustration_23-2149391243.jpg?w=360&t=st=1667698752~exp=1667699352~hmac=1a10e1c25c63b9d8cee72483ba135714182956ecded8899bce5839a76a18e5d9",
        ayuda:"Es un sistema de creencias que incluye una serie de narrativas y leyendas, que hicieron parte del imaginario colectivo de las diversas civilizaciones antiguas",
        respuesta: "La mitología",
        distractores: ["La filosofía"],
    },
    {
        pregunta: "¿Cuáles son los nombres de los tres reyes magos?",
        imagen:"https://img.freepik.com/free-vector/hand-dranw-flat-design-with-grain-biblical-magi-characters_79603-2279.jpg?w=740&t=st=1667698921~exp=1667699521~hmac=d3c8d55c905e190eca3ded451938b9246574b12fe97e5bd3a5ec268d9bec0b61",
        respuesta: "Gaspar,Melchor y Baltazar",
        distractores: ["Gaspar,Nicolas y Nataniel"],
    },
    {
        pregunta: "¿Qué es la triple alianza?",
        imagen:"https://th.bing.com/th/id/OIP.2Sx189jx2S3a_jgIm6JrWQHaEK?pid=ImgDet&rs=1",
        ayuda:"Fue creada en 1882, fue un acuerdo económico,político y militar con el objetivo de protección y apoyo en caso de guerra",
        respuesta: "El acuerdo entre Alemania,el imperio Austro-Húngaro e Italia para apoyarse en caso de guerra",
        distractores: ["El acuerdo económico entre méxico,EE.UU y canadá"],
    },


  ];



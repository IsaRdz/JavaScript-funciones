//PUNTO 1
const suma = (sum1, sum2) => {
  console.log(`El resultado de ${sum1} + ${sum2} es igual a ${sum1 + sum2}`);
};
suma(2, 5);
suma(52, 96);
suma(6, 8);

//PUNTO 2
const resta = (rest1, rest2) => {
  console.log(
    `El resultado de la resta entre ${rest1} - ${rest2} es igual a ${
      rest1 - rest2
    }`
  );
};
resta(60, 10);
resta(6, 9);
resta(2, 7);

//PUNTO 3
const producto = (prod1, prod2) => {
  console.log(
    `El resultado del producto entre ${prod1} * ${prod2} es igual a ${
      prod1 * prod2
    }`
  );
};
producto(2, 5);
producto(9, 6);
producto(10, 80);

//PUNTO 4
const cociente = (div1, div2) => {
  console.log(
    `El resultado de dividir ${div1} / ${div2} es igual a ${div1 / div2}`
  );
};
cociente(2, 10);
cociente(60, 7);
cociente(5, 6.1);

//PUNTO 5
const frutas = ["anana", "frutilla", "durazno", "pera", "banana"];
const mostrarFrutas = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Fruta ${i}: ${array[i]}`);
  }
};
mostrarFrutas(frutas);

//PUNTO 6
const animales = [
  "león",
  "puma",
  "leopardo",
  "cebra",
  "jiraba",
  "hiena",
  "águila",
  "hipopótamo",
  "zorro",
  "gorila",
];
const mostrarAnimales = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Animal ${i}: ${array[i]}`);
  }
};
mostrarAnimales(animales);

//PUNTO 7
const calcular = (valor1, valor2, operacion) => {
  switch (operacion) {
    case "+":
      console.log(
        `El resultado de la suma entre ${valor1} y ${valor2} es igual a: ${
          valor1 + valor2
        }`
      );
      break;
    case "-":
      console.log(
        `El resultado de la resta entre ${valor1} y ${valor2} es igual a: ${
          valor1 - valor2
        }`
      );
      break;
    case "*":
      console.log(
        `El resultado del producto entre ${valor1} y ${valor2} es igual a: ${
          valor1 * valor2
        }`
      );
      break;
    case "/":
      console.log(
        `El resultado de la división entre ${valor1} y ${valor2} es igual a: ${
          valor1 / valor2
        }`
      );
      break;
    default:
      break;
  }
};
calcular(5, 5, "*");
calcular(2,9,"+");
calcular(9,78,"-");
calcular(9,3,"/");

//PUNTO 8
const users = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

const verUser = array =>{
  console.log(`Primer usuario: Name ${users[0].name}, Email ${users[0].email}`);
}
verUser(users);

//PUNTO 9
let i=0;
const numeros = [];
while(i<5){
  let num = Number(prompt("Ingrese un número"));
  numeros.push(num);
  i++;
}
const ascendente = (numeros) => {
    console.log(`Orden ascendente: ${numeros.sort()}`);
}
const descendente = (numeros) => {
  console.log(`Orden descendente: ${numeros.reverse()}`);
}
ascendente(numeros);
descendente(numeros);

//PUNTO 10
/*
EVENTOS EN JAVASCRIPT
Los eventos HTML son "cosas" que les suceden a los elementos HTML.
Cuando se usa JavaScript en páginas HTML, JavaScript puede "reaccionar" a estos eventos.
Un evento HTML puede ser algo que hace el navegador o algo que hace un usuario.

ONCLICK: The user clicks an HTML element
ONCHANGE: An HTML element has been changed
ONKEYDOWN: The user pushes a keyboard key
ONMOUSEOVER: The user moves the mouse over an HTML element
ONSUBMIT: Enviar formulario
ONSCROLL: El evento es generado cuando el usuario realiza desplazamiento (scrolls) sobre el contenido de un elemento
*/

//PUNTO 11
let cadena = prompt("Ingrese una cadena de texto");
const minuscula = (cadena) =>{
  console.log(cadena.toLowerCase());
}
minuscula(cadena);

//PUNTO 12
const edad = Number(prompt("Ingrese su edad"));
const ingreso = edad =>{
  if(edad>=18){
    console.log("Ud. es mayor de edad puede ingresar");
  }else
  console.log("Ud. es menor de edad no puede ingresar");
}
ingreso(edad);
"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20
      },
      {
        id: "id-2",
        name: "María",
        age: 21
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22
      }
    ]
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25
      }
    ]
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

// TÚ CÓDIGO AQUÍ

const result = document.querySelector(".js-result");

for (const promo of promos) {
  result.innerHTML += `<ul><li><p>Nombre: ${promo.name}</p><ul>`;
  for (const student of promo.students) {
    result.innerHTML += `<li>${student.name}, ${student.age}</li>`;
  }
  result.innerHTML += "</ul></li></ul>";
}

// Ejercicio 4: 4 Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas
// <div class="js-result">
//   <ul>
//     <li>
//       <p>Nombre: Ada</p>
//       <ul>
//         <li>Sofía, 20</li>
//         <li>María, 21</li>
//         <li>Lucía, 22</li>
//       </ul>
//     </li>
//     <li>
//       <p>Nombre: Borg</p>
//       <ul>
//         <li>Julia, 23</li>
//         <li>Tania, 24</li>
//         <li>Alaia, 25</li>
//       </ul>
//     </li>
//     <li>
//       <p>Nombre: Clarke</p>
//       <ul>
//         <li>Lidia, 26</li>
//         <li>Celia, 27</li>
//         <li>Nadia, 28</li>
//       </ul>
//     </li>
//   </ul>
// </div>

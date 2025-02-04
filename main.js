const students = [ /* This is the array */
    {
      id: 1,
      name: "Lucy",
      house: "Hufflepuff",
    },
    {
      id: 2,
      name: "Luna",
      house: "Ravenclaw",
    },
    {
      id: 3,
      name: "Ronald",
      house: "Hufflepuff",
    },
    {
      id: 4,
      name: "Malfoy :(",
      house: "Slytherin",
    },
    {
      id: 5,
      name: "Peter",
      house: "Slytherin",
    },
    {
      id: 6,
      name: "Harry :sparkles:",
      house: "Gryffindor",
    },
    {
      id: 7,
      name: "Dumbledore",
      house: "Gryffindor",
    }
  ];
    const toDom = (divId, toRender) => { /* This is the setup for the toDom function */
      const selDiv = document.querySelector(divId)
      selDiv.innerHTML = toRender
    }
  const studentsDom = (array) => { /* This is the setup for the cards on display (i.e. array) */
    let domString = ""
    for (const student of array) {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body m-0 p-0">
        <h5 class="card-title m-0 p-1">${student.name}</h5>
        <div class="text-container">
        <p class="card-text1 m-0 p-1">${student.house}</p>
        <button class="btn btn-danger" id="delete--${student.id}">Delete</button>
        </div>
      </div>
    </div>
  `}
    toDom("#app", domString) /* uses toDom function */
    }
  const filter = (students, houseString) => { /* setup for the different buttons */
    const houseArray = []
    for (const student of students) {
      if (student.house === houseString) {
        houseArray.push(student)
      }
    }
    return houseArray
  }
    /* BUTTONS. */
  const allGryffindorButton = document.querySelector(".gryf")
  const allHufflepuffButton = document.querySelector(".huff")
  const allRavenclawButton = document.querySelector(".rave")
  const allSlytherinButton = document.querySelector(".slyt")
  const allHousesButton = document.querySelector(".all")
  allGryffindorButton.addEventListener("click", () => {
    const gryffindorTypes = filter(students, "Gryffindor")
    studentsDom(gryffindorTypes)
  })
  allHufflepuffButton.addEventListener("click", () => {
    const hufflepuffTypes = filter(students, "Hufflepuff")
    studentsDom(hufflepuffTypes)
  })
  allRavenclawButton.addEventListener("click" , () => {
    const ravenclawTypes = filter(students, "Ravenclaw")
    studentsDom(ravenclawTypes)
  })
  allSlytherinButton.addEventListener("click", () => {
    const slytherinTypes = filter(students, "Slytherin")
    studentsDom(slytherinTypes)
  })
  allHousesButton.addEventListener("click", () => {
    studentsDom(students)
  })
  
  const form = document.querySelector("form");
  
  const createStudent = (e) => {
    e.preventDefault();
  
  const newStudentObj = { /* setup for creation of pet */
    id: students.length + 1,
    name: document.querySelector("#name").value,
    house: document.querySelector("#house").value,
  }
  students.push(newStudentObj);
  studentsDom(students);
  form.reset();
  }
  
  form.addEventListener('submit', createStudent);
  
  app.addEventListener('click', (e) => { /* delete button */
    if (e.target.id.includes("delete")) {
      const [, id] = e.target.id.split("--");
      const index = students.findIndex(e => e.id === Number(id));
      students.splice(index, 1);
      studentsDom(students);
    }
  });
  
  const startApp = () => {
    studentsDom(students);
  }
  
  
 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
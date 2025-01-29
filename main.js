

const petsDom = (pets) => { /* This is the setup for the cards on display (i.e. array) */
    let domString = ""
    for (const pet of pets) {
      domString += `<div class="card" style="width: 18rem;">
      <div class="card-body m-0 p-0">
        <h5 class="card-title m-0 p-1">${pet.name}</h5>
        <img src=${pet.imageUrl} class="card-img-top p-4" alt=${pet.name}>
        <div class="text-container">
        <p class="card-text1 m-0 p-1">${pet.color}</p>
        <p class="card-text m-0 p-1">${pet.specialSkill}</p>
        <p class="card-text2 m-0 p-1">${pet.type}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
        </div>
      </div>
    </div>
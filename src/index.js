// function fetchDogs () {
//     return fetch ('http://localhost:3000/dogs')
//     .then(res => res.json())
//     .then(json => json )
// }


// function retDog(dog) {
//     const tableBody = document.getElementById('table-body');
//     const row = document.createElement('tr');
//     let buttonContainer = document.createElement('td');
//     let button = document.createElement('button');
//     button.innerText = 'Edit'
//     button.onclick = () => passDogInfo(dog);
    
//     row.innerHTML += `
//     <td>${dog.name}</td> 
//     <td>*${dog.breed}</td> 
//     <td>${dog.sex}</td>
//     `
    
//     buttonContainer.append(button);
//     row.append(buttonContainer);
//     tableBody.append(row);
// }

// // retrieve dogs by calling fetchDogs(), then create DOM
// fetchDogs().then(dogs => {
//     dogs.forEach(dog => retDog(dog))
// })


// function passDogInfo(dog){
//     const form = document.getElementById('dog-form').elements;
//     form.id.value = dog.id
//     form.name.value = dog.name
//     form.breed.value = dog.breed
//     form.sex.value = dog.sex 
// }

// //fetch function to update a dog PATCH
// function updateDog(id,name,breed,sex){ 
//     return fetch (`http://localhost:3000/dogs/${id}`, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json",
//         "Accepts": 'application/json'
//         },
//     body: JSON.stringify( {
//         name, 
//         breed, 
//         sex,
//         })
//     })
//     .then(res => res.json())
//     .then(data => data)
// }
    
//     document.getElementById('dog-form').addEventListener('submit', ()=>{
//         const form = document.getElementById('dog-form').elements;
        
//         updateDog(form['id'].value,form['name'].value,form['breed'].value,form['sex'].value)
//     })
    

// fetch functon to retrieve dogs GET

//-------------------NEW ATTEMPT-----------------
//-----------------------------------------------

// On page load, render a list of already registered dogs in the table. You can fetch these dogs from http://localhost:3000/dogs.


const baseUrl = 'http://localhost:3000/dogs';
const tableBody = document.querySelector('#table-body');
const dogForm = document.querySelector('#dog-form');

console.log(dogForm.name)


fetch(baseUrl)
.then(res => res.json())
.then(dogs => {
    dogs.forEach(dog => getDog(dog))
} )

function getDog(dog){
        const row = document.createElement('tr');
        let buttonContainer = document.createElement('td');
        let button = document.createElement('button');
        button.innerText = 'Edit'
        // button.onclick = () => passDogInfo(dog);
        row.innerHTML += `
            <tr>
                <td>${dog.name}</td> 
                <td>${dog.breed}</td> 
                <td>${dog.sex}</td> 
            </tr>
        `
        buttonContainer.append(button);
            row.append(buttonContainer);
            tableBody.append(row);

        button.addEventListener('click', ()=>{
            passDogInfo(dog)
        })

}
function passDogInfo(dog){
    dogForm.id.value = dog.id;
    dogForm.name.value = dog.name;
    dogForm.breed.value = dog.breed;
    dogForm.sex.value = dog.sex;
}

function updateDog(id,name,breed,sex){
    console.log(`${id}`)
     fetch(`${baseUrl}/${id}`, {
        method: 'PATCH',
        headers: {
          "content-type": 'application/json',
          "accepts": 'application/json'
        },
        body: JSON.stringify({
            name,
            breed,
            sex
        })
    })
    .then(res => res.json())
    .then(data =>  data)
}
dogForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        console.log(dogForm.id.value)

        updateDog(dogForm.id.value, dogForm.name.value, dogForm.breed.value, dogForm.sex.value);
})
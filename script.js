fetch('data.json')
  .then(response => response.json())
  .then(data => {

    data.forEach(person => { 
        console.log(displayFullName(person));
        console.log(displayAge(person));
        console.log(displayOccupation(person));
  });
  })

  .catch(error => {console.log(error);

  });

  function displayFullName(person) {
    return `${person.fName} ${person.lName}`;
  }

  function displayAge(person) {
    return  `They are ${person.age} years old`;
  }

  function displayOccupation(person) {
    return `They are a ${person.occupation} in ${person.city}`;
  }

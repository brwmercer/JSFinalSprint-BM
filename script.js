fetch('data.json')
  .then(response => response.json())
  .then(data => {

    data.forEach(person => { 
        console.log(getfullname(person));
        console.log(getDetails(person));
  });
  })

  .catch(error => {console.log(error);

  });

  function getfullname(person) {
    return `${person.fName} ${person.lName}`;
  }

  function getDetails(person) {
    return  `${person.fName} is a ${person.age} year old ${person.occupation} in ${person.city}`;
  }

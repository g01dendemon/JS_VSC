const astronaut = {
    astronautName: 'John',
    astronautAge: 43,
    isCommander:true,
    planet:'Mars',
    missionDuration:180
}
console.log(astronaut);

 //astonaut.astronautAge+=10;

 console.log('Astronaut is',astronaut.astronautAge+=10,'years old');

 astronaut.missionDuration+=30;

 console.log('Mission duration:',astronaut.missionDuration, 'days');

 console.log('Name:',astronaut.astronautName,'Currently on:',
     astronaut.planet,'Is commander?',astronaut.isCommander);

astronaut.isCommander=false;
console.log('Is commander?',astronaut.isCommander);

 
 
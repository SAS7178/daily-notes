/* The note of the text
The author of the note
The date the note was entered
The category of the note */

/*
    Define a variable named `notes` and assign a value of an empty array
*/
let notes = [
{id:1,
text:"hey guys",
author:"James Smith",
date:"Aug 7th",
topics:['science','labs','chem']
},
//id2 that object holds my data
{id:2,
text:"I'm here",
author: "James Smith",
date: "Aug 7th",
topics:['psychology','economics','business']
},
//id3 my smith
{id:3,
text:"you there",
author: "James Smith",
date: "Aug 7th",
topics:['philosophy','art','lit']
}
]
notes.push({
    id: 4,
    text: "welcome",
    author: "James woke",
    date: "sept 4th",
    topics: ['outer Range','philosophy']
})
// adding new objects into my array notes using the push method
notes.push({
    id: 5,
    text: "been here",
    author: "tom woke",
    date: "sept 22th",
    topics: ['blue Range']
})
notes.push({
    id: 6,
    text: "wow",
    author: "bill woke",
    date: "sept 12th",
    topics: [' Range']
})
//iterating my array of notes with the note element and printing the text in each note object.
for(note of notes ) {
    console.log(note.text) 
    // iterates through not
    for(const topic of note.topics) {
        console.log(note.id,topic)
    }
}
/*
    Fill the array with several starter objects that have
    the following properties.
        * id (number)
        * text (string)
        * author (string)
        * date (string)
        * topics (array of strings)

    Either define the objects within the initial array or
    use the .push() method to add them after initialization.
*/

let totalTopics = 0;

// create topics var and set equal to 0
for(const note of notes){
    for(const topic of note.topics){
     totalTopics++;
    //  iterates through each note in notes, then each topics property 
    //  in a note, if a topic exist within the note 1 will be added 
    //  to the total topics var  
    }
    
}
let averageTopics = totalTopics / notes.length
console.log((averageTopics))

const filteredNotes = [];
const criteria =  "philosophy"
// creates filteredNotes var sets = to empty array 
// creates criteria var sets = to topic looking to find
for (note of notes){
for (const topic of note.topics) {
    if(topic === criteria){
filteredNotes.push(note)
    }
}
}
console.log(filteredNotes)
// this code below will log *** note acticles *** and under that iterate through the notes objects
// then log the note.ids from each object wrpped in the <arcticle/> element
console.log("***  Note Articles  ***")
for (const note of notes) {
           console.log(`      <arcticle> \n           ${note.id}`)
        //    this nested loop will iterate topics in notes and 
        //   ad to var topics then log wrapped within a 
        //    section html element
           for (const topic of note.topics) {
               console.log(`<section> ${topic} </section>`)
               
           } console.log('      </arcticle>\n')
}

    


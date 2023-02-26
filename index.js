//1. Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
}

//2. Create 2 Instagram post objects from the constructor function you created above
const post1 = new InstagramPost("@myagwem", "Good food is life!", "https://instagram.com/sunset.jpg", 1609, 60);
const post2 = new InstagramPost("@myagwen", "Feeling so grateful for my family!", "https://instagram.com/family.jpg", 2750, 110);


//3. Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

//(a) Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
//(b) Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
}

function createJambScores(eng, govt, lit, crk) {
    return {
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk,
    };
}

const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
const musaJambScores = createJambScores(70, 85, 82, 94);

musa.jamb = musaJambScores;

console.log(musa);


//4. What are the different ways you can clone an object? Give examples for each of them.

//i. Object.assign()

//Example

const obj1 = { a: 1, b: 2 };
const obj2 = Object.assign({}, obj1);
console.log(obj2);

//ii. Spread Operator

//Example

const obji = { a: 1, b: 2 };
const objii = { ...obj1 };
console.log(obj2);


//iii. JSON.stringify() and JSON.parse()

//Example

const objOne = { a: { b: 2 } };
const objTwo = JSON.parse(JSON.stringify(obj1));
console.log(objTwo);


//iv. Object.create()

//Example

const objj1 = { a: 1, b: 2 };
const objj2 = Object.create(obj1);
console.log(objj2);
console.log(objj2.a);
console.log(obj2j.b);



//5. As Nigeria goes to the polls, here is an object representing some of the Presidential Candidates:

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

//  Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
//      ’Omoyele Sowore is the presidential candidate of AAC’


for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
}


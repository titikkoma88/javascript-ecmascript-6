// ambil element
const skills_holder = document.getElementById('skills');


// ES6

const yourSkills = ['Web Development', ' UX Design', ' Video Editor'];

// map data
// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });

// const printSkills = yourSkills.map(skill => {
//     return skill;
// })

// skills_holder.innerHTML = printSkills;

// filter data
const myPrimarySkill = yourSkills.filter(skill => {

    return skill !== ' Video Editor';

});

skills_holder.innerHTML = myPrimarySkill;
console.log(myPrimarySkill);
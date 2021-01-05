// ambil element
const skills_holder = document.getElementById('skills');


// ES6
const yourSkills = ['Web Development', 'UX Design', 'Video Editor'];
// skills_holder.innerHTML = yourSkills[0];

// tambahkan item kepada array
yourSkills.push('DevOps');

let parent = '<ul>';

yourSkills.forEach((skill) => {
    parent += '<li>' + skill + '</li>'
    console.log(`${skill}`);
});

parent += '</ul>';
skills_holder.innerHTML = parent;
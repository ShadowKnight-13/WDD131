
const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    sections: 
    [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    enrollStudent: function(num) {
        // get the section that has sectionNum = num
        const theSection = this.sections.find(section=> section.sectionNum === num)

        //increment enroll
        console.log(theSection)
        console.log(theSection.enrolled)
        theSection.enrolled ++
        console.log(theSection.enrolled)
    },

    dropStudent: function(num) {
        // get the section that has sectionNum = num
        const theSection = this.sections.find(section=> section.sectionNum === num)

        //increment enroll
        console.log(theSection)
        console.log(theSection.enrolled)
        theSection.enrolled --
        console.log(theSection.enrolled)
    },

    logo: 'images/js-logo.png'

};




console.log(aCourse.sections[0].enrolled)

function selectedCourse(course){
   const courseName = document.querySelector("#courseName");
   const courseCode = document.querySelector("#courseCode");

   courseName.textContent = course.name;
   courseCode.textContent = course.code;
}

function sectionTemplate(section){
    return`
        <tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>
    `
}

function setSections(sections){
    const sectionsEl = document.querySelector("#sections");

    const html = sections.map(sectionTemplate)
    sectionsEl.innerhtml = html.join('');
}



selectedCourse(aCourse);
setSections(aCourse.sections);

function enrollHandler(ev){
    console.log(ev.target)
    if (ev.target.id === "#enrollStudent"){
        enrollOrDrop()
        pass
    }

}

document.querySelector("#enrollStudent").addEventListener("click",enrollHandler)
document.querySelector("#dropStudent").addEventListener("click",enrollHandler)

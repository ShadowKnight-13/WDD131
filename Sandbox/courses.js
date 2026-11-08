
const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    sections: 
    [
        { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],

    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum === Number(sectionNum));
        if (sectionIndex !== -1) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },

    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex(section => section.sectionNum === Number(sectionNum));
        if (sectionIndex !== -1) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    },

    logo: 'images/js-logo.png'

};




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

function renderSections(sections){
    const sectionsEl = document.querySelector("#sections");

    const html = sections.map(sectionTemplate)
    sectionsEl.innerHTML = html.join('');
}



selectedCourse(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
});

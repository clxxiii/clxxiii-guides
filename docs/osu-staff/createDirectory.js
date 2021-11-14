const sectionDirectory = document.getElementsByClassName('section-directory')[0];
const sections = document.getElementsByTagName("section");

function createDirectory() {
    for(i = 0; i < sections.length; i++) {
        let section = sections[i]
        console.log(section.id);
        
        let sectionLink = document.createElement("a");
        sectionLink.href = "./#" + section.id
        sectionLink.innerHTML = i + 1 + ". " + section.id
        sectionDirectory.appendChild(sectionLink);

    }
}
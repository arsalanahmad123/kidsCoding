const exampleText = ["Unlock Your Child's Potential with Creative Coding Adventures"];
const exampleTyping = new AutoTyping('#typing', exampleText, {
    typeSpeed: 50,
    deleteSpeed: 100,
    waitBeforeDelete: 3000,
    waitBetweenWords: 500,
});
exampleTyping.start()


const themeIcon = document.getElementById("themeIcon");
themeIcon.addEventListener("click", () => {
    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
    else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    document.documentElement.classList.toggle('dark');
})
/*
Sounds and images
w --> tom1.png
a --> tom2.png 
s --> tom3.png
d --> tom4.png
j --> snare.png
k --> crash.png
l --> kick.png
*/


const pathName = {
    w : "tom1",
    a : "tom2",
    s : "tom3",
    d : "tom4",
    j : "snare",
    k : "crash",
    l : "kick"
}


let sets = document.querySelectorAll(".drum")


sets.forEach(set => {

    const audio = new Audio(`sounds/${pathName[set.textContent]}.mp3`);

    // background is added
    set.style.backgroundImage = `url('images/${pathName[set.textContent]}.png')`;

    set.style.cursor = "pointer"

    set.addEventListener('click' ,()=> {
        audio.play();

    })
})


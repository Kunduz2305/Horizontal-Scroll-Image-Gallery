let main = document.createElement('div')
main.className = 'main'



let wrap1 = document.createElement('div')
wrap1.className = 'wrap1'
wrap1.innerHTML = `<div class="wrap1" id="backBtn"><i class="fa-solid fa-less-than"></i></div>`
main.append(wrap1)

let gallery = document.createElement('div')
gallery.className = 'gallery'
gallery.innerHTML = `
                    <div>
                        <span><img src="1.png"></span>
                        <span><img src="2.png"></span>
                        <span><img src="3.png"></span>
                     </div>
                     <div>
                        <span><img src="4.png"></span>
                        <span><img src="5.png"></span>
                        <span><img src="6.png"></span>
                     </div>
                     `
main.append(gallery)

let wrap2 = document.createElement('div')
wrap2.className = 'wrap2'
wrap2.innerHTML = `<div class="wrap2" id="nextBtn"><i class="fa-solid fa-greater-than"></i></div>`
main.append(wrap2)


document.body.append(main)


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn")
let nextBtn = document.getElementById("nextBtn")

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () =>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});
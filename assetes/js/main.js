/*-----------------------------------*\
 * #showslider & hideSlider
\*-----------------------------------*/
let showslider = document.querySelector(".header i.fa-bars");
let hideSlider = document.querySelector(".slider i");
let slider = document.querySelector("nav .slider");

showslider.addEventListener("click", () => {
    slider.classList.add("active");
});

hideSlider.addEventListener("click", () => {
    slider.classList.remove("active");
});

document.addEventListener("click", (event) => {
    if (!slider.contains(event.target) && !event.target.matches(".header i.fa-bars")) {
        slider.classList.remove("active");
    }
});
/*-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-*/
/*-----------------------------------*\
 * #select-options
\*-----------------------------------*/
const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.select-options');
const optionsList = document.querySelectorAll('.select-options li');

selected.addEventListener('click', () => {
    optionsContainer.classList.toggle('active');
});

optionsList.forEach(o => {
    o.addEventListener('click', () => {
        
        selected.innerHTML = o.innerHTML;
        optionsContainer.classList.remove('active');
    });
});
/*-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-*/
/*-----------------------------------*\
 * #Category-Filtering
\*-----------------------------------*/
let switcherLis = document.querySelectorAll(".container-blog .list-item .item");
let switcherLink = document.querySelectorAll(".container-blog .list-item .item a");
let switchercard = document.querySelectorAll(".frame-card-Articles .card-Rectangle.all");

switcherLis.forEach((li) => {
  li.addEventListener("click", function (e) {
    switcherLis.forEach((li) => li.classList.remove("active"));
    switcherLink.forEach((a) => a.classList.remove("active"));

    this.classList.add("active");
    this.querySelector("a").classList.add("active");

    switchercard.forEach((card) => {
      card.style.display = "none";
    });

    let category = this.querySelector("a").dataset.cat;
    document.querySelectorAll(`.card-Rectangle.${category}`).forEach((el) => {
      el.style.display = "block";
    });
  });
});

window.addEventListener('scroll', function() {
  console.log(window.scrollY + 'px');
});
const images = [
"images/nature1.jpg",
"images/nature2.jpg",
"images/animal1.jpg",
"images/animal2.jpg",
"images/city1.jpg",
"images/city2.jpg"
];

let current = 0;

function openLightbox(index){

current = index;

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightboxImage").src=images[current];

}

function closeLightbox(){

document.getElementById("lightbox").style.display="none";

}

function changeImage(step){

current += step;

if(current < 0){
current = images.length-1;
}

if(current >= images.length){
current = 0;
}

document.getElementById("lightboxImage").src=images[current];

}

function filterImages(category){

let gallery = document.querySelectorAll(".image");

gallery.forEach(function(item){

if(category=="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

}
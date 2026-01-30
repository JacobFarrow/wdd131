const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const thumbnails = document.querySelectorAll(".thumbnail");
const closeBtn = document.querySelector(".close");

thumbnails.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.getAttribute("data-full");
        captionText.innerHTML = img.alt;
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
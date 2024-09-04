const steelItem = document.querySelectorAll(".steel_item");

steelItem.forEach((i) => {
  i.addEventListener("mouseenter", () => {
    const myImage = i.querySelector(".myImage");
    myImage.src = "../images/chevron-right-white.svg";
  });
});

steelItem.forEach((i) => {
  i.addEventListener("mouseleave", () => {
    const myImage = i.querySelector(".myImage");
    myImage.src = "../images/chevron-right.svg";
  });
});

const currentDate = new Date();

const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();

document.getElementById("currentDate").textContent = `${day}.${month}.${year}`;

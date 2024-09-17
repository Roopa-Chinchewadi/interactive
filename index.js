document.querySelectorAll(".info-card").forEach((card) => {
    card.addEventListener("click", () => {
      const modal = document.getElementById("infoModal");
      const modalTitle = document.getElementById("modal-title");
      const modalText = document.getElementById("modal-text");
      modalTitle.innerText = card.getAttribute("data-title");
      modalText.innerText = card.getAttribute("data-info");
      modal.style.display = "block";
    });
  });
  
  document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("infoModal").style.display = "none";
  });
  
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("infoModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
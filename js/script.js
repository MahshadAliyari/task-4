// ================================ 
// DROPDOWN 
// ================================ 
 
const dropdownBtn = document.querySelector("#dropdownBtn"); 
const dropdownMenu = document.querySelector("#dropdownMenu"); 
 
dropdownBtn.addEventListener("click", () => { 
 
    dropdownMenu.classList.toggle("active"); 
    dropdownBtn.classList.toggle("active"); 
 
}); 
 
 
// ================================ 
// TABS 
// ================================ 
 
const tabButtons = document.querySelectorAll(".tab-btn"); 
const tabContents = document.querySelectorAll(".tab-content"); 
 
tabButtons.forEach((button) => { 
 
    button.addEventListener("click", () => { 
 
        const tabId = button.dataset.tab; 
 
        tabButtons.forEach((button) => { 
            button.classList.remove("active"); 
        }); 
 
        tabContents.forEach((content) => { 
            content.classList.remove("active"); 
        }); 
 
        button.classList.add("active"); 
 
        const activeContent = document.querySelector(`#${tabId}`); 
 
        activeContent.classList.add("active"); 
 
    }); 
 
}); 
 
 
// ================================ 
// MODAL 
// ================================ 
 
const openModal = document.querySelector("#openModal"); 
const closeModal = document.querySelector("#closeModal"); 
const modal = document.querySelector("#modal"); 
 
openModal.addEventListener("click", () => { 
 
    modal.classList.add("active"); 
 
}); 
 
 
closeModal.addEventListener("click", () => { 
 
    modal.classList.remove("active"); 
 
}); 
 
 
// ================================ 
// EVENT DELEGATION 
// ================================ 
 
const itemList = document.querySelector("#itemList"); 
 
itemList.addEventListener("click", (e) => { 
 
    if (e.target.matches(".delete-btn")) { 
 
        e.target.closest("li").remove(); 
 
    } 
 
});
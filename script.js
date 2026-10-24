const courses = [
  {
    id: 1,
    titre: "Mathématiques — Fondamentaux",
    matiere: "Mathématiques",
    niveau: "Primaire",
    creneau: "Lun. et mer. · 16h–17h",
    prix: 250,
    places: 1,
  },
  {
    id: 2,
    titre: "Français — Lecture et rédaction",
    matiere: "Français",
    niveau: "Primaire",
    creneau: "Mar. et jeu. · 16h–17h",
    prix: 250,
    places: 0,
  },
  {
    id: 3,
    titre: "Mathématiques — Collège",
    matiere: "Mathématiques",
    niveau: "Collège",
    creneau: "Lun. et mer. · 17h–18h30",
    prix: 300,
    places: 20,
  },
  {
    id: 4,
    titre: "Physique-Chimie — Collège",
    matiere: "Physique-Chimie",
    niveau: "Collège",
    creneau: "Mar. et jeu. · 17h–18h30",
    prix: 300,
    places: 20,
  },
  {
    id: 5,
    titre: "SVT — Collège",
    matiere: "SVT",
    niveau: "Collège",
    creneau: "Mar. et jeu. · 17h–18h30",
    prix: 300,
    places: 20,
  },
  {
    id: 6,
    titre: "Français — Expression écrite",
    matiere: "Français",
    niveau: "Collège",
    creneau: "Mer. et ven. · 16h–17h30",
    prix: 300,
    places: 20,
  },
  {
    id: 7,
    titre: "Anglais — Niveau débutant",
    matiere: "Anglais",
    niveau: "Collège",
    creneau: "Lun. et jeu. · 18h–19h",
    prix: 250,
    places: 20,
  },
  {
    id: 8,
    titre: "Mathématiques — Tronc commun",
    matiere: "Mathématiques",
    niveau: "Lycée",
    creneau: "Lun. et mer. · 18h–20h",
    prix: 350,
    places: 20,
  },
  {
    id: 9,
    titre: "Physique-Chimie — Tronc commun",
    matiere: "Physique-Chimie",
    niveau: "Lycée",
    creneau: "Mar. et ven. · 18h–20h",
    prix: 350,
    places: 20,
  },
  {
    id: 10,
    titre: "SVT — Tronc commun",
    matiere: "SVT",
    niveau: "Lycée",
    creneau: "Mar. et ven. · 18h–20h",
    prix: 350,
    places: 20,
  },
  {
    id: 11,
    titre: "Mathématiques — 1re Bac",
    matiere: "Mathématiques",
    niveau: "Lycée",
    creneau: "Lun. et mer. · 16h–18h",
    prix: 350,
    places: 20,
  },
  {
    id: 12,
    titre: "Physique-Chimie — 1re Bac",
    matiere: "Physique-Chimie",
    niveau: "Lycée",
    creneau: "Mar. et jeu. · 16h–18h",
    prix: 350,
    places: 20,
  },
  {
    id: 13,
    titre: "SVT — 1re Bac",
    matiere: "SVT",
    niveau: "Lycée",
    creneau: "Mar. et jeu. · 16h–18h",
    prix: 350,
    places: 20,
  },
  {
    id: 14,
    titre: "Anglais — Conversation",
    matiere: "Anglais",
    niveau: "Lycée",
    creneau: "Mer. et ven. · 17h–18h30",
    prix: 300,
    places: 20,
  },
  {
    id: 15,
    titre: "Français — Préparation aux examens",
    matiere: "Français",
    niveau: "Lycée",
    creneau: "Sam. · 10h–12h",
    prix: 400,
    places: 20,
  },
  {
    id: 16,
    titre: "Mathématiques — 2eme Bac",
    matiere: "Mathématiques",
    niveau: "Lycée",
    creneau: "Mar. et jeu. · 18h–20h",
    prix: 400,
    places: 20,
  },
  {
    id: 17,
    titre: "Physique-Chimie — 2eme Bac",
    matiere: "Physique-Chimie",
    niveau: "Lycée",
    creneau: "Mar. et jeu. · 18h–20h",
    prix: 400,
    places: 20,
  },
  {
    id: 18,
    titre: "SVT — 2eme Bac",
    matiere: "SVT",
    niveau: "Lycée",
    creneau: "Mar. et jeu. · 18h–20h",
    prix: 400,
    places: 20,
  },
];

const selectedCourses = [];

const savedSelectedCourses = localStorage.getItem("selectedCourses");
if (savedSelectedCourses) {
  selectedCourses.push(...JSON.parse(savedSelectedCourses));
}

updateCart();

const courseList = document.querySelector("#course-list");
const dropdown = document.querySelector("#dropdown");

function createCourse(course) {
  let isSelected = selectedCourses.includes(`course-${course.id}`);
  let placesLeft = course.places;
  if (isSelected) {
    placesLeft -= 1;
  }

  let isFull = placesLeft === 0;

  const article = document.createElement("article");
  article.classList.add("course-card");
  article.id = `course-${course.id}`;

  const title = document.createElement("h3");
  title.classList.add("course-title");
  title.textContent = course.titre;

  const subject = document.createElement("span");
  subject.classList.add("course-subject");
  subject.textContent = course.matiere;

  const level = document.createElement("span");
  level.classList.add("course-level");
  level.textContent = `Niveau : ${course.niveau}`;

  const details = document.createElement("ul");
  details.classList.add("course-details");

  const schedule = document.createElement("li");
  schedule.textContent = `Horaires : ${course.creneau}`;

  const places = document.createElement("li");
  places.textContent = `Places disponibles : ${placesLeft}`;

  details.append(schedule, places);

  const bottom = document.createElement("div");
  bottom.classList.add("course-bottom");

  const price = document.createElement("p");
  price.classList.add("course-price");
  price.textContent = `${course.prix} MAD / mois`;

  const status = document.createElement("p");
  status.classList.add("course-status");

  if (isFull) {
    status.textContent = "Complet";
    status.classList.add("full");
  } else {
    status.textContent = "Places disponibles";
  }

  bottom.append(price, status);

  const button = document.createElement("button");
  button.classList.add("button", "button-primary", "course-button");
  button.type = "button";
  button.textContent = isFull ? "Cours complet" : "Choisir ce cours";

  button.disabled = (isFull && !isSelected);
  button.addEventListener("click", () => selectCourse(article.id));

  article.append(title, subject, level, details, bottom, button);

  if (isSelected) {
    article.classList.add("selected");
    button.textContent = "Cours sélectionné";
    button.classList.add("is-selected");
  }

  return article;
}

function selectCourse(courseId) {
  console.log(`Course selected: ${courseId}`);
  const courseElement = document.getElementById(courseId);

  let selected = courseElement.classList.contains("selected");

  if (!selected) {
    courseElement.childNodes.forEach((child) => {
      if (child.tagName === "BUTTON") {
        child.textContent = "Cours sélectionné";
        child.classList.add("is-selected");
      }

      if (child.classList.contains("course-status")) {
        child.classList.add("full");
      }

      if (child.tagName === "UL") {
        const placesLi = child.querySelector("li:last-child");

        let placesText = placesLi.textContent;
        let placesMatch = placesText.match(/(\d+)/);

        if (placesMatch) {
          let placesNumber = parseInt(placesMatch[1], 10);
          if (placesNumber > 0) {
            placesNumber -= 1;
            placesLi.textContent = `Places disponibles : ${placesNumber}`;
          }

          if (placesNumber === 0) {
            const status = courseElement.querySelector(".course-status");
            status.textContent = "Complet";
            status.classList.add("full");
          }
        }
      }
    });

    courseElement.classList.add("selected");
    selectedCourses.push(courseId);
  } else {
    courseElement.childNodes.forEach((child) => {
      if (child.tagName === "BUTTON") {
        child.textContent = "Choisir ce cours";
        child.classList.remove("is-selected");
      }

      if (child.tagName === "UL") {
        const placesLi = child.querySelector("li:last-child");

        let placesText = placesLi.textContent;
        let placesMatch = placesText.match(/(\d+)/);

        if (placesMatch) {
          let placesNumber = parseInt(placesMatch[1], 10);
          placesNumber++;
          placesLi.textContent = `Places disponibles : ${placesNumber}`;

          if (placesNumber === 1) {
            const status = courseElement.querySelector(".course-status");
            status.textContent = "Places disponibles";
            status.classList.remove("full");
          }
        }
      }
    });

    courseElement.classList.remove("selected");

    const index = selectedCourses.indexOf(courseId);
    if (index > -1) selectedCourses.splice(index, 1);
  }

  updateCart();
}

courseList.innerHTML = "";
courses.forEach((course) => {
  courseList.appendChild(createCourse(course));
});

dropdown.addEventListener("change", () => {
  courseList.innerHTML = "";

  courses.forEach((course) => {
    if (
      dropdown.querySelector("#niveau").value !== "" &&
      course.niveau !== dropdown.querySelector("#niveau").value
    ) {
      return;
    }

    if (
      dropdown.querySelector("#matiere").value !== "" &&
      course.matiere !== dropdown.querySelector("#matiere").value
    ) {
      return;
    }

    courseList.appendChild(createCourse(course));
  });

  if (courseList.childNodes.length === 0) {
    const noCoursesMessage = document.createElement("p");
    noCoursesMessage.textContent =
      "Aucun cours disponible pour les critères sélectionnés.";
    courseList.appendChild(noCoursesMessage);
    console.log(courseList);
  }
});


const cartToggle = document.querySelector("#cart-toggle");
const cartPanel = document.querySelector("#cart-panel");
const cartOverlay = document.querySelector("#cart-overlay");
const cartClose = document.querySelector("#cart-close");
const cartBadge = document.querySelector("#cart-badge");

function openCart() {
  cartPanel.classList.add("is-open");
  cartOverlay.hidden = false;
  cartPanel.setAttribute("aria-hidden", "false");
  cartPanel.inert = false;
  cartToggle.setAttribute("aria-expanded", "true");
  cartToggle.setAttribute("aria-label", "Fermer le panier");
  document.body.classList.add("cart-open");
  cartClose.focus();
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartOverlay.hidden = true;
  cartPanel.setAttribute("aria-hidden", "true");
  cartPanel.inert = true;
  cartToggle.setAttribute("aria-expanded", "false");
  cartToggle.setAttribute("aria-label", "Ouvrir le panier");
  document.body.classList.remove("cart-open");
  cartToggle.focus();
}

cartToggle.addEventListener("click", () => {
  if (cartPanel.classList.contains("is-open")) {
    closeCart();
  } else {
    openCart();
  }
});

cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    cartPanel.classList.contains("is-open")
  ) {
    closeCart();
  }
});

function updateCart() {
  const cartItemsContainer = document.querySelector("#cart-items");
  const cartTotal = document.querySelector("#cart-total");
  const cartBadge = document.querySelector("#cart-badge");

  let amount = 0;

  cartItemsContainer.innerHTML = "";

  if (selectedCourses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "votre panier est vide.";
    emptyMessage.classList.add("cart-empty");
    cartItemsContainer.appendChild(emptyMessage);
  }

  for (const courseId of selectedCourses) {
    const course = courses.find((c) => c.id === parseInt(courseId.split("-")[1]));
    if (course) {
      amount += course.prix;
    }

    const cartItem = document.createElement("p");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `${course.titre} <br/> ${course.prix} MAD / mois`;
    cartItemsContainer.appendChild(cartItem);
  }
  cartTotal.textContent = `${amount} MAD / mois`;
  cartBadge.textContent = selectedCourses.length;
}

const saveButton = document.querySelector(".cart-continue");

saveButton.addEventListener("click", () => {
  localStorage.setItem("selectedCourses", JSON.stringify(selectedCourses));
});

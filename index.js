let backed = document.querySelector(".js-backed");
let backers = document.querySelector(".js-backers");
let days = document.querySelector(".js-days");
let bookmarked = false;

const rootElm = document.querySelector("html");
const modalElm = document.querySelector(".modal");
const modalPledgeElm = document.querySelector(".modal-pledge");
const modalSuccessElm = document.querySelector(".modal-success");

function toggleBookmark() {
  let bookmark = document.querySelector(".bookmark-toggle");

  if (bookmark) {
    let text = document.querySelector(".bookmark-toggle__text");

    if (bookmarked) {
      bookmark.classList.add("bookmark-toggle--disabled");
      text.innerText = "Bookmark";
      bookmarked = false;
    } else {
      bookmark.classList.remove("bookmark-toggle--disabled");
      text.innerText = "Bookmarked";
      bookmarked = true;
    }
  }
}

function selectReward(e) {
  let id = e.target.value;

  rewardInnerDOM = document.querySelectorAll(".reward-selection__inner");
  dividersDOM = document.querySelectorAll(".reward-selection__divider");
  controlsDOM = document.querySelectorAll(".reward-selection__controls");

  for (let i = 0; i < rewardInnerDOM.length; i++) {
    if (i == id) {
      rewardInnerDOM[i].classList.add("reward-selection__inner--selected");
      dividersDOM[i].style.display = "block";
      controlsDOM[i].style.display = "grid";
    } else {
      rewardInnerDOM[i].classList.remove("reward-selection__inner--selected");
      dividersDOM[i].style.display = "none";
      controlsDOM[i].style.display = "none";
    }
  }
}

function pledgeReward(e) {
  let id = e.target.value;
  let input = document.querySelector(".js-pledge-input__input" + id);

  if (input && data["rewards"][id]["count"] > 0) {
    data["backed"] += Number(input.value);
    data["backers"] += 1;

    if (data["rewards"][id]["showCount"]) {
      data["rewards"][id]["count"] -= 1;
    }

    openSuccessModal();

    setupComponents();
  }
}

function closeModal() {
  modalElm.style.display = "none";
  modalPledgeElm.style.display = "none";
  modalSuccessElm.style.display = "none";
  rootElm.style.overflow = "auto";
}

function openPledgeModal(id) {
  modalElm.style.display = "block";
  modalPledgeElm.style.display = "block";
  modalSuccessElm.style.display = "none";
  rootElm.style.overflow = "hidden";

  let reward = document.querySelector("#reward-selection" + id);

  if (reward) {
    reward.click();
  }
}

function openSuccessModal() {
  modalElm.style.display = "block";
  modalPledgeElm.style.display = "none";
  modalSuccessElm.style.display = "block";
  rootElm.style.overflow = "hidden";
}

function setupComponents() {
  for (let i = 0; i < data["rewards"].length; i++) {
    let reward = data["rewards"][i];
    let rewardAboutDOM = document.querySelector(".js-reward-about" + i);
    let rewardSelectionDOM = document.querySelector(".js-reward-selection" + i);

    if (rewardAboutDOM) {
      rewardAboutDOM.innerHTML = Handlebars.templates["reward-about"]({
        id: i,
        title: reward["title"],
        pledge: reward["pledge"],
        desc: reward["desc"],
        count: reward["count"],
      });

      if (reward["count"] == 0) {
        rewardAboutDOM.classList.add("reward-about--disabled");
      }
    }

    if (rewardSelectionDOM) {
      rewardSelectionDOM.innerHTML = Handlebars.templates["reward-selection"]({
        id: i,
        title: reward["title"],
        pledge: reward["pledge"],
        desc: reward["desc"],
        count: reward["count"],
        showCount: reward["showCount"],
      });

      if (reward["count"] == 0) {
        rewardSelectionDOM.classList.add("reward-selection--disabled");
      }

      document.querySelector("#reward-selection" + i).addEventListener("click", selectReward);

      document
        .querySelector(".js-reward-selection__button" + i)
        .addEventListener("click", pledgeReward);
    }
  }

  backed.innerHTML = Handlebars.templates["value-tracker"]({
    value: "$" + data["backed"].toLocaleString(undefined, { maximumFractionDigits: 2 }),
    text: "of $" + data["targetValue"].toLocaleString(undefined) + " backed",
  });

  backers.innerHTML = Handlebars.templates["value-tracker"]({
    value: data["backers"].toLocaleString(undefined),
    text: "total backers",
  });

  days.innerHTML = Handlebars.templates["value-tracker"]({
    value: data["days"],
    text: "days left",
  });

  let progress = (data["backed"] / data["targetValue"]) * 100;
  if (progress > 100) {
    progress = 100;
  }

  document.querySelector(".progress__value").style.width = progress + "%";
}

setupComponents();

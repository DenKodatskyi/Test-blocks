// find all stars
let stars = findAllStars();

// bind click listeners to stars
bindClickListener(stars);

// restore previous value
restorePreviousValue(stars);

function findAllStars() {
    let stars = document.querySelectorAll(".js-stars img");
    return stars;
}

function bindClickListener(stars) {
    stars.forEach(star => {
        star.addEventListener("click", (e) => {
            // remove all active classes
            let activeStars = document.querySelectorAll(".js-stars img.active");
            activeStars.forEach(star => star.classList.remove("active"))
            //  add active class to clicked img
            let clickedStar = e.currentTarget;
            let clickedImageIndex = 0;

            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];
                star.classList.add("active");
                if (star === clickedStar) {
                    clickedImageIndex = i;
                    break;
                }
            }
            // save clicked image number
            localStorage.setItem("rating-value", clickedImageIndex);
        });
    });
}

function restorePreviousValue() {
    let savedValue = localStorage.getItem("rating-value");
    if (!!savedValue) {
        savedValue = +savedValue;
        for (let i = 0; i < stars.length; i++) {
            const star = stars[i];
            star.classList.add("active");
            if (i === savedValue) {
                break;
            }
        }
    }
}
















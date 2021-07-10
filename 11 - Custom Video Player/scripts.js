// 1. Get our elements
// 2. Build our functions


const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

function togglePlay() {
    if (video.paused) {
        toggle.textContent = "||";
        video.play();

    } else {
        toggle.textContent = "►";
        video.pause();
    }
}

function skip() {
    console.log("Skipping!");
    console.log(this.dataset.skip);
    console.log(video.currentTime);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handlesProgress() {
    const percent = (video.currentTime  / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

// 3. Hook up event listeners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handlesProgress);
skipButtons.forEach(button => button.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
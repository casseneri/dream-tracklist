const TRACK_COUNT = 12;

const tracksDiv = document.getElementById("tracks");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nameInput = document.getElementById("name");
const downloadBtn = document.getElementById("download");

const template = new Image();
template.src = "template.png";

const trackInputs = [];

// Create track input boxes
for (let i = 1; i <= TRACK_COUNT; i++) {

    const label = document.createElement("label");
    label.textContent = `Track ${i}`;

    const input = document.createElement("input");
    input.placeholder = `Track ${i}`;
    input.className = "trackInput";
    input.placeholder = `Track ${i}`;
    input.maxLength = 40;

    tracksDiv.appendChild(label);
    tracksDiv.appendChild(input);

    trackInputs.push(input);
input.addEventListener("keydown", (e)=>{

    if(e.key==="Enter"){

        e.preventDefault();

        if(i<TRACK_COUNT){

            trackInputs[i].focus();

        }else{

            downloadBtn.focus();

        }

    }

});
    input.addEventListener("input", drawCanvas);

}

nameInput.addEventListener("input", drawCanvas);

template.onload = drawCanvas;


// Automatically shrink text if it's too long
function fitText(text, maxWidth, startingSize) {

    let size = startingSize;

    while (size > 16) {

        ctx.font = `${size}px Arial`;

        if (ctx.measureText(text).width <= maxWidth) {
            return size;
        }

        size--;

    }

    return 16;

}


// Draw everything
function drawCanvas() {

    // Background
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    // ------------------------
    // NAME
    // ------------------------

    let name = nameInput.value.trim().toUpperCase();

    if (name !== "") {
        name += "'S";
    }

    ctx.fillStyle = "#dfdfdf";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "italic bold 46px Arial";

    ctx.fillText(
        `${name} DREAM TRACKLIST`,
        540,
        910
    );

    // ------------------------
    // SONGS
    // ------------------------

    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

  const trackPositions = [
    { x: 95, y: 980 },   // Track 1
    { x: 95, y: 1041 },  // Track 2
    { x: 95, y: 1102 },  // Track 3
    { x: 95, y: 1163 },  // Track 4
    { x: 95, y: 1225 },  // Track 5
    { x: 95, y: 1287 },  // Track 6
    { x: 623, y: 980 },  // Track 7
    { x: 623, y: 1041 }, // Track 8
    { x: 623, y: 1102 }, // Track 9
    { x: 623, y: 1163 }, // Track 10
    { x: 623, y: 1225 }, // Track 11
    { x: 623, y: 1287 }  // Track 12
];

const maxWidth = 440;

trackInputs.forEach((input, index) => {

    const song = input.value.toUpperCase();

    const fontSize = fitText(song, maxWidth, 45);

    ctx.font = `bold ${size}px Arial`;

    ctx.fillText(
        song,
        trackPositions[index].x,
        trackPositions[index].y
    );

});

}


// Download image
downloadBtn.addEventListener("click", () => {

    const link = document.createElement("a");

    const filename = (nameInput.value.trim() || "dream-tracklist")
        .replace(/[^a-z0-9]/gi, "-")
        .toLowerCase();

    link.download = `${filename}.png`;

    link.href = canvas.toDataURL("image/png");

    link.click();

});
const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click",()=>{

    nameInput.value="";

    trackInputs.forEach(input=>{

        input.value="";

    });

    drawCanvas();

});

// Några grundläggande inställningar
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = "100%";
canvas.style.height = "100%";

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext("2d");
const midX = canvas.width / 2;
const midY = canvas.height / 2;

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  //Trädstam, svart kant
  c.fillStyle = "black";
  c.fillRect(midX* 0.95, midY*1.5, midX *0.1, midY);

  //Trädstam, brun färg
  c.fillStyle = "#aa9577";
  c.fillRect(midX* 0.955, midY*1.5, midX *0.09, midY);
}

function drawLeaves(circleRadius, dotRadius, randomness, color){
  //Funktion för trädets löv
  c.fillStyle = color;
  let x; // Kommer att lagra respektive pricks läge i x-led
  let y; // Kommer att lagra respektive pricks läge i y-led
  for (let i = 1; i <= 12; i++) {
    // Beräknar läget på resp. prick
    x = midX + circleRadius * Math.cos((((Math.PI * 360) / randomness) * i) / 180);
    y = midY + circleRadius * Math.sin((((Math.PI * 360) / 10) * i) / 180);

    // Ritar prickarna
    c.beginPath();
    c.arc(x, y, dotRadius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }
}

function paintCircle(x, y, r, color) {
  c.fillStyle = color;
  c.beginPath();
  // c.arc(x, y, radie, startvinkel, slutvinkel)
  c.arc(midX * x, midY * y, r, 0, 2 * Math.PI); // En cirkel är en "arc" som går mellan 0 och 2pi
  c.closePath();
  c.fill();
}

//Trädform
drawPicture();
drawLeaves(150, 150, 9, "black");
drawLeaves(145, 150, 9, "#63e58e");

//Träd detaljer
paintCircle(0.92, 1, 100, "black");
paintCircle(0.93, 1.02, 110, "#63e58e");

//Träd detaljer
paintCircle(1.15, 1, 100, "black");
paintCircle(1.135, 1, 110, "#63e58e");

//Träd detaljer
paintCircle(0.93, 1.1, 100, "black");
paintCircle(0.935 , 1.07, 110, "#63e58e");

//Äpplen
drawLeaves(220, 15, 9, "black");
drawLeaves(220, 13, 9, "red");

//Vänster hus
c.beginPath();
c.rect(midX*0.1, midY, midX*0.5, midY);
c.stroke();

//Höger hus
c.beginPath();
c.rect(midX*1.4, midY, midX*0.5, midY);
c.stroke();

//Vänster taket
c.beginPath();
c.moveTo(midX*0.1, midY);
c.lineTo(midX*0.35, midY/2);
c.stroke();

c.beginPath();
c.moveTo(midX*0.6, midY);
c.lineTo(midX*0.35, midY/2);
c.stroke();

//Höger taket
c.beginPath();
c.moveTo(midX*1.4, midY);
c.lineTo(midX*1.65, midY/2);
c.stroke();

c.beginPath();
c.moveTo(midX*1.9, midY);
c.lineTo(midX*1.65, midY/2);
c.stroke();
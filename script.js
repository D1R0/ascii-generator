const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

src =
  "data:image/jpeg;base64,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";

const inputSlider = document.getElementById("resolution");
const inputScale = document.getElementById("scale");
const inputBrightness = document.getElementById("brightness");
const selectAlphabet = document.getElementById("alphabet");
console.log(selectAlphabet);
const inputLabel = document.getElementById("resolutionLabel");
inputSlider.addEventListener("change", handlerSlider);
selectAlphabet.addEventListener("change", handleAlphabet);
inputScale.addEventListener("change", handlerScale);
inputBrightness.addEventListener("change", handlerBrightness);

class Cell {
  constructor(x, y, symbol, color, size) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
    this.color = color;
    this.size = size;
  }
  draw(ctx) {
    // ctx.font = `normal normal bold  ${this.size}px 'VT323', monospace`;
    ctx.font = `normal  normal  ${this.size}px  monospace`;
    ctx.fillStyle = this.color;
    ctx.fillText(this.symbol, this.x, this.y);
  }
}

class AsciiEffect {
  #imageCellArry = [];
  #pixels = [];
  #ctx;
  #width;
  #brightnessAdjustment;
  #height;
  hueRotationAdjustment;
  saturationAdjustment;
  alphabetTypece;
  constructor(
    ctx,
    width,
    height,
    image1,
    brightnessAdjustment = 1,
    hueRotationAdjustment = 300,
    saturationAdjustment = 1,
    alphabetType = "latin"
  ) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.hueRotationAdjustment = +hueRotationAdjustment;
    this.#brightnessAdjustment = +brightnessAdjustment;
    this.saturationAdjustment = +saturationAdjustment;
    this.alphabetType = alphabetType;
    this.#ctx.drawImage(image1, 0, 0, this.#width, this.#height);
    this.#pixels = this.#ctx.getImageData(0, 0, this.#width, this.#height);
  }
  scanImage(cellSize) {
    this.#imageCellArry = [];
    const width = this.#pixels.width;
    const data = this.#pixels.data;

    for (let y = 0; y < this.#pixels.height; y += cellSize) {
      for (let x = 0; x < width; x += cellSize) {
        const pos = (y * width + x) * 4;
        const red = data[pos];
        const green = data[pos + 1];
        const blue = data[pos + 2];
        const alpha = data[pos + 3];
        const total = red + green + blue;
        const adjustedRed = Math.min(255, red + this.#brightnessAdjustment);
        const adjustedGreen = Math.min(255, green + this.#brightnessAdjustment);
        const adjustedBlue = Math.min(255, blue + this.#brightnessAdjustment);
        if (alpha > 200 && total > 80) {
          const symbol = this.convertToSymbol(
            (adjustedRed + adjustedGreen + adjustedBlue) / 3,
            this.alphabetType
          );
          const color = `rgb(${adjustedRed}, ${adjustedGreen}, ${adjustedBlue})`;
          // const color = `rgb(255,255,255)`;
          this.#imageCellArry.push(new Cell(x, y, symbol, color, cellSize));
          // const rotatedColor = this.hueRotate(
          //   `rgb(${adjustedRed}, ${adjustedGreen}, ${adjustedBlue})`,
          //   this.hueRotationAdjustment
          // );
          // console.log(rotatedColor);
          // const saturatedColor = this.saturate(
          //   rotatedColor,
          //   this.saturationAdjustment
          // );
          // this.#imageCellArry.push(
          //   new Cell(x, y, symbol, rotatedColor, cellSize)
          // );
        }
      }
    }
  }
  setBrightnessAdjustment(value) {
    this.brightnessAdjustment = value;
  }
  setAlphabet(value) {
    this.alphabetType = value;
  }
  hueRotate(color, degrees) {
    const rgb = color.match(/\d+/g).map(Number);
    const max = Math.max(...rgb);
    const min = Math.min(...rgb);
    const delta = max - min;

    let h, s, l;

    if (delta === 0) {
      // Gray color, hue rotation has no effect
      return color;
    }

    h = Math.acos((rgb[0] - (max + min) / 2) / (delta / 2)) / Math.PI;
    if (rgb[1] > rgb[2]) {
      h = 2 * Math.PI - h;
    }

    s = delta / max;
    l = (max + min) / 2;

    h = (h + degrees / 360) % 1;
    const max_new = l + s * Math.cos(h * Math.PI);
    const mid_new = l + s * Math.cos((h + 120 / 360) * Math.PI);
    const min_new = l + s * Math.cos((h + 240 / 360) * Math.PI);

    const r = 255 * clamp(max_new - l, 0, 1);
    const g = 255 * clamp(mid_new - l, 0, 1);
    const b = 255 * clamp(min_new - l, 0, 1);
    return `rgb(${r}, ${g}, ${b})`;
  }
  saturate(color, factor) {
    const rgb = color.match(/\d+/g).map(Number);
    const gray = (rgb[0] + rgb[1] + rgb[2]) / 3;
    for (let i = 0; i < 3; i++) {
      const delta = rgb[i] - gray;
      rgb[i] += delta * factor;
    }

    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
  }
  convertToSymbol(g, alphabetType) {
    if (alphabetType === "latin") {
      const density = "$@B%8&WM#*oahkbzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\"^`'. ";

      let max = 255;
      g = g > 254 ? 254 : g;
      let charaterIndex = Math.floor(
        (((g * 100) / max) * density.length) / 100
      );
      return density[density.length - charaterIndex - 1];
    } else {
      const density =
        "的一是不了人我在有他这个上们来到时大地为子中你说生国年着就那和要她出也得里后自以会家可下而过天去能对小多然于心学么之都好看起发当没成只如事把还用第样道想作种开美总从无情己面最女但现前些所同日手又行意动方期它头经长儿回位分爱老因很给名法间斯知世什两次使身者被高已亲其进此话常与活正感见明问力理尔点文几定本公特做外孩相西果准先真再力果准先真再字其从此开飞呢转更单跟加无记处队因找立手场马管意王快决音找其着政步强由更保证南造百规热领且八谈统引历则首心六量城际光今直题那感国消器张信见新说军很感表接条队身安排件车维";

      let max = 255;
      g = g > 254 ? 254 : g;
      let charaterIndex = Math.floor(
        (((g * 100) / max) * density.length) / 100
      );
      return density[density.length - charaterIndex - 1];
    }
  }
  drawAsscii() {
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    for (let i = 0; i < this.#imageCellArry.length; i++) {
      this.#imageCellArry[i].draw(this.#ctx);
    }
  }
  draw(cellSize) {
    this.scanImage(cellSize);
    this.drawAsscii();
  }
  exportToText(cellSize) {
    let asciiText = "";
    for (let i = 0; i < this.#imageCellArry.length; i++) {
      asciiText += this.#imageCellArry[i].symbol;
      if (((i + 1) * cellSize) % this.#pixels.width < cellSize) {
        asciiText += "<br>"; // Use <br> instead of \n for line breaks
      }
    }
    return asciiText;
  }
}
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
let effect;
function exportCanvasAsImage(canvas, format = "png") {
  // Get the data URL of the canvas content
  const dataURL = canvas.toDataURL(`image/${format}`);

  // Create a temporary anchor element to download the image
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = `image.${format}`;

  // Append the anchor element to the document and trigger a click event to download the image
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function handlerSlider() {
  if (inputSlider.value == 1) {
    inputLabel.innerHTML = "Origianl image";
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
  } else {
    inputLabel.innerHTML = "Resolution: " + inputSlider.value + "px";
    effect.draw(parseInt(inputSlider.value));
  }
}
function handlerScale() {
  asciiImage(src, inputScale.value, inputBrightness.value);
}

function handleAlphabet() {
  asciiImage(src, inputScale.value, inputBrightness.value);
}
function handlerBrightness() {
  asciiImage(src, inputScale.value, inputBrightness.value);
}
function asciiImage(src, imgSizeMultiplier, brightnessAdjustment) {
  const image1 = new Image();
  image1.src = src;
  image1.onload = function initialize() {
    canvas.width = image1.width * imgSizeMultiplier;
    canvas.height = image1.height * imgSizeMultiplier;
    console.log(selectAlphabet.value);
    effect = new AsciiEffect(
      ctx,
      image1.width * imgSizeMultiplier,
      image1.height * imgSizeMultiplier,
      image1,
      brightnessAdjustment
    );
    effect.setAlphabet(selectAlphabet.value);

    effect.draw(+inputSlider.value);
  };
}
let multiplie = 1;

inputScale.value = multiplie;
asciiImage(src, multiplie, inputBrightness.value);
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      src = e.target.result;
      asciiImage(src, multiplie, inputBrightness.value);
    };
    reader.readAsDataURL(file);
  }
}

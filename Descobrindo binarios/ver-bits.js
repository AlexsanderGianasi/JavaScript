const fs = require("fs");

const caminho = "./Imagem do WhatsApp de 2026-01-09 à(s) 18.19.53_b015551e.jpg"; // ajusta o nome se precisar
const buffer = fs.readFileSync(caminho);

// Mostra os primeiros 64 bytes em binário
const primeiros = buffer.subarray(0, 64);

const bits = Array.from(primeiros, (byte) => byte.toString(2).padStart(8, "0"));

console.log(bits.join(" "));
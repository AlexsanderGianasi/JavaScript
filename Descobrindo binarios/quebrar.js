const fs = require("fs");

// lê a imagem original
const original = fs.readFileSync("./Imagem do WhatsApp de 2026-01-09 à(s) 18.19.53_b015551e.jpg");

// copia o conteúdo
const copia = Buffer.from(original);

// muda os primeiros bytes (assinatura)
copia[0] = 0x89;
copia[1] = 0x50;
copia[2] = 0x4E;
copia[3] = 0x47;
// salva nova imagem quebrada
fs.writeFileSync("imagem_quebrada.png", copia);

console.log("Imagem quebrada criada.");
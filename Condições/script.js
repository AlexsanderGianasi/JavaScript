let btn = document.getElementById("btn");
let nation = document.getElementById("country-select");
let result = document.getElementById("country-info");

btn.addEventListener("click", () => {
  let selectedCountry = nation.value;
  let info = "";

    if (selectedCountry === "brasil") {
      info = `<h2>Brasil</h2>
                <p><strong>Idioma oficial:</strong> Português</p>
                <p><strong>Moeda:</strong> Real (BRL)</p>
                <p><strong>Sobre:</strong> O Brasil é o maior país da América do Sul e possui grande diversidade cultural. É conhecido pelo futebol, carnaval e pela Floresta Amazônica.</p>`;
    }
    else if (selectedCountry === "argentina") { 
        info = `<h2>Argentina</h2>
                <p><strong>Idioma oficial:</strong> Espanhol</p>
                <p><strong>Moeda:</strong> Peso argentino (ARS)</p>
                <p><strong>Sobre:</strong> A Argentina é o segundo maior país da América do Sul e é conhecida por sua cultura rica, música tango e paisagens impressionantes.</p>`;
    }
    else if (selectedCountry === "australia") { 
        info = `<h2>Austrália</h2>
                <p><strong>Idioma oficial:</strong> Inglês</p>
                <p><strong>Moeda:</strong> Dólar australiano</p>
                <p><strong>Sobre:</strong> A Austrália é um país que também é um continente. É famosa por sua natureza única, praias e animais como cangurus e coalas.</p>`;
    }
    else if (selectedCountry === "canada") { 
        info = `<h2>Canadá</h2>
                <p><strong>Idioma oficial:</strong> Inglês e Francês</p>
                <p><strong>Moeda:</strong> Dólar canadense</p>
                <p><strong>Sobre:</strong> O Canadá é conhecido por sua qualidade de vida, grandes florestas e paisagens naturais impressionantes. É um dos maiores países do mundo.</p>`;
    }
    else if (selectedCountry === "china") { 
        info = `<h2>China</h2>
                <p><strong>Idioma oficial:</strong> Mandarim</p>
                <p><strong>Moeda:</strong> Yuan chinês</p>
                <p><strong>Sobre:</strong> A China possui uma das civilizações mais antigas do mundo e hoje é uma das maiores potências econômicas e tecnológicas.</p>`;
    }
    else if (selectedCountry === "coreia_do_sul") { 
        info = `<h2>Coreia do Sul</h2>
                <p><strong>Idioma oficial:</strong> Coreano</p>
                <p><strong>Moeda:</strong> Won sul-coreano</p>
                <p><strong>Sobre:</strong> A Coreia do Sul é conhecida por sua tecnologia avançada e pela cultura pop coreana, como K-pop, filmes e séries.</p>`;
    }
    else if (selectedCountry === "espanha") { 
        info = `<h2>Espanha</h2>
                <p><strong>Idioma oficial:</strong> Espanhol</p>
                <p><strong>Moeda:</strong> Euro</p>
                <p><strong>Sobre:</strong> A Espanha possui uma cultura rica, com tradições como o flamenco e festivais populares. Suas cidades mais famosas incluem Madri e Barcelona.</p>`;
    }
    else if (selectedCountry === "estados_unidos") { 
        info = `<h2>Estados Unidos</h2>
                <p><strong>Idioma oficial:</strong> Inglês</p>
                <p><strong>Moeda:</strong> Dólar americano</p>
                <p><strong>Sobre:</strong> Os Estados Unidos são conhecidos por sua diversidade cultural, tecnologia avançada e indústria. Cidades como Nova York, Los Angeles e Washington D.C. são importantes centros econômicos e políticos.</p>`;
    }
    else if (selectedCountry === "franca") { 
        info = `<h2>França</h2>
                <p><strong>Idioma oficial:</strong> Francês</p>
                <p><strong>Moeda:</strong> Euro</p>
                <p><strong>Sobre:</strong> A França é famosa por sua arte, gastronomia e moda. A capital Paris é um dos destinos turísticos mais visitados do mundo.</p>`;
    }
    else if (selectedCountry === "italia") { 
        info = `<h2>Itália</h2>
                <p><strong>Idioma oficial:</strong> Italiano</p>
                <p><strong>Moeda:</strong> Euro</p>
                <p><strong>Sobre:</strong> A Itália é famosa por sua história, arte e culinária. Cidades como Roma, Veneza e Florença são importantes centros históricos.</p>`;
    }
    else if (selectedCountry === "japao") { 
        info = `<h2>Japão</h2>
                <p><strong>Idioma oficial:</strong> Japonês</p>
                <p><strong>Moeda:</strong> Iene</p>
                <p><strong>Sobre:</strong> O Japão mistura tradição e tecnologia. É conhecido por templos antigos, cultura pop e cidades modernas como Tóquio.</p>`;
    }
    else if (selectedCountry === "mexico") { 
        info = `<h2>México</h2>
                <p><strong>Idioma oficial:</strong> Espanhol</p>
                <p><strong>Moeda:</strong> Peso mexicano</p>
                <p><strong>Sobre:</strong> O México é conhecido por sua cultura vibrante, culinária tradicional e sítios arqueológicos das civilizações maia e asteca.</p>`;
    }
    else if (selectedCountry === "portugal") { 
        info = `<h2>Portugal</h2>
                <p><strong>Idioma oficial:</strong> Português</p>
                <p><strong>Moeda:</strong> Euro</p>
                <p><strong>Sobre:</strong> Portugal teve grande importância nas navegações e descobertas marítimas. A capital Lisboa é uma das cidades mais antigas da Europa.</p>`;
    }
    else if (selectedCountry === "reino_unido") { 
        info = `<h2>Reino Unido</h2>
                <p><strong>Idioma oficial:</strong> Inglês</p>
                <p><strong>Moeda:</strong> Libra esterlina</p>
                <p><strong>Sobre:</strong> O Reino Unido é conhecido por sua rica história, cultura e tradições. Cidades como Londres, Manchester e Edimburgo são importantes centros culturais e econômicos.</p>`;
    }

    result.innerHTML = info;
});
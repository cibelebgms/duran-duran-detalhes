const dados = [
  {
    "id": 1,
    "titulo": "Duran Duran",
    "ano": 1981,
    "descricao": "O álbum de estreia da banda, que apresenta o som new wave e sintetizado do grupo.",
    "conteudo": "Lançado em 1981, o álbum de estreia do Duran Duran apresentou ao mundo a mistura de new wave, sintetizadores e ritmo dançante que se tornaria a marca da banda. O disco trouxe músicas como Planet Earth e Girls on Film, que ajudaram a colocar o grupo no centro da cena pop britânica.",
    "genero": "New Wave / Synth-pop",
    "gravadora": "EMI",
    "produtor": "Colin Thurston",
    "singles": ["Planet Earth", "Careless Memories", "Girls on Film"],
    "imagem": "1981.D.jpg"
  },
  {
    "id": 2,
    "titulo": "Rio",
    "ano": 1982,
    "descricao": "O segundo álbum, que levou a banda ao sucesso mundial.",
    "conteudo": "Rio, de 1982, é considerado um dos discos mais importantes da carreira do Duran Duran. Com videoclipes ousados e refrões marcantes, o álbum projetou a banda internacionalmente e reúne músicas como Hungry Like the Wolf, Save a Prayer e a faixa-título.",
    "genero": "New Wave / Synth-pop",
    "gravadora": "EMI",
    "produtor": "Colin Thurston",
    "singles": ["My Own Way", "Hungry Like the Wolf", "Save a Prayer", "Rio"],
    "imagem": "RIO.jpg"
  },
  {
    "id": 3,
    "titulo": "Seven and the Ragged Tiger",
    "ano": 1983,
    "descricao": "O terceiro álbum, lançado no auge da popularidade da banda.",
    "conteudo": "Lançado em 1983, Seven and the Ragged Tiger veio no auge da fama do Duran Duran. O disco tem um som mais polido e sofisticado e inclui o sucesso The Reflex, que chegou ao topo das paradas no Reino Unido e nos Estados Unidos.",
    "genero": "New Wave / Synth-pop",
    "gravadora": "EMI",
    "produtor": "Alex Sadkin e Ian Little",
    "singles": ["Union of the Snake", "New Moon on Monday", "The Reflex"],
    "imagem": "Seven.ARTR.jpg"
  }
];

// ---------- HOME: monta os cards ----------
function criarCard(album) {
  return `
    <div class="col-md-4">
      <article class="card item-album h-100">
        <a href="detalhes.html?id=${album.id}">
          <img src="${album.imagem}" class="card-img-top" alt="Capa do álbum ${album.titulo}">
        </a>
        <div class="card-body text-center">
          <h3 class="card-title h5">
            <a href="detalhes.html?id=${album.id}">${album.titulo}</a>
          </h3>
          <p class="card-text">${album.ano}</p>
          <p class="card-text small">${album.descricao}</p>
        </div>
      </article>
    </div>
  `;
}

const listaAlbuns = document.getElementById("lista-albuns");

if (listaAlbuns) {
  listaAlbuns.innerHTML = dados.map(criarCard).join("");
}

// ---------- DETALHES: mostra o álbum cujo id veio na URL ----------
const areaDetalhe = document.getElementById("detalhe-album");

if (areaDetalhe) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const album = dados.find(item => item.id === id);

  if (album) {
    document.title = `${album.titulo} - Duran Duran`;

    areaDetalhe.innerHTML = `
      <div class="card mb-4 detalhe-principal">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${album.imagem}" class="img-fluid detalhe-capa" alt="Capa do álbum ${album.titulo}">
          </div>
          <div class="col-md-7">
            <div class="card-body p-4">
              <h1 class="h2">${album.titulo}</h1>
              <p class="text-muted">${album.ano}</p>
              <p>${album.conteudo}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card detalhe-extra">
        <div class="card-body p-4">
          <h2 class="h4 mb-3">Outras informações</h2>
          <ul class="list-unstyled mb-0">
            <li><strong>Gênero:</strong> ${album.genero}</li>
            <li><strong>Gravadora:</strong> ${album.gravadora}</li>
            <li><strong>Produtor:</strong> ${album.produtor}</li>
            <li><strong>Singles:</strong> ${album.singles.join(", ")}</li>
          </ul>
        </div>
      </div>
    `;
  } else {
    areaDetalhe.innerHTML = `
      <div class="text-center py-5">
        <h2>Álbum não encontrado</h2>
        <a href="index.html" class="btn btn-enviar mt-3">Voltar para a home</a>
      </div>
    `;
  }
}
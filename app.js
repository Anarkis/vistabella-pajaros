const birds = [
  { id: "mirlo", name: "Mirlo común", short: "Mirlo", latin: "Turdus merula", group: "AVE URBANA", season: "Todo el año", status: "Preocupación menor", sex: true, curiosity: "El macho suele cantar desde un punto elevado, sobre todo al amanecer y al atardecer.", identify: "Macho negro con pico amarillo; hembra parda. Busca su silueta entre jardines y arbolado." },
  { id: "petirrojo", name: "Petirrojo europeo", short: "Petirrojo", latin: "Erithacus rubecula", group: "AVE URBANA", season: "Residente e invernante; más común en invierno", status: "Preocupación menor", statusSource: "España · SEO/BirdLife (Lista Roja 2021)", sex: false, curiosity: "En invierno llegan ejemplares del centro y norte de Europa. Cada uno defiende su propio territorio.", identify: "La mancha naranja cubre la cara, la garganta y el pecho. Machos y hembras tienen el mismo aspecto." },
  { id: "gorrión", name: "Gorrión común", short: "Gorrión", latin: "Passer domesticus", group: "AVE URBANA", season: "Todo el año", status: "Preocupación menor", sex: true, curiosity: "Es un vecino muy ligado a las personas: aprovecha edificios y pequeños huecos para criar.", identify: "El macho tiene babero negro y píleo gris; la hembra es parda y más uniforme." },
  { id: "vencejo", name: "Vencejo común", short: "Vencejo", latin: "Apus apus", group: "AVE VIAJERA", season: "Primavera y verano", status: "Vulnerable", sex: false, curiosity: "Pasa casi toda su vida en el aire; incluso puede dormir mientras vuela.", identify: "Silueta oscura en forma de hoz, alas muy largas y vuelo rápido. No suele posarse en el suelo." },
  { id: "golondrina", name: "Golondrina común", short: "Golondrina", latin: "Hirundo rustica", group: "AVE VIAJERA", season: "Primavera y verano", status: "Vulnerable", sex: false, curiosity: "Construye nidos de barro en forma de cuenco, a menudo en construcciones humanas.", identify: "Dorso oscuro, garganta rojiza y cola ahorquillada; suele cazar insectos volando bajo." },
  { id: "avion", name: "Avión común", short: "Avión", latin: "Delichon urbicum", group: "AVE VIAJERA", season: "Primavera y verano", status: "Preocupación menor", sex: false, curiosity: "Sus nidos de barro suelen formar pequeñas colonias bajo aleros y balcones.", identify: "Tiene el obispillo blanco y una cola menos larga que la de la golondrina." },
  { id: "autillo", name: "Autillo europeo", short: "Autillo", latin: "Otus scops", group: "AVE NOCTURNA", season: "Primavera y verano", status: "Vulnerable", sex: false, curiosity: "Su reclamo nocturno es un silbido breve y repetido, fácil de confundir con un sonido mecánico.", identify: "Pequeño búho de plumaje críptico y penachos cortos; suele pasar el día inmóvil junto al tronco." },
  { id: "cernicalo", name: "Cernícalo vulgar", short: "Cernícalo", latin: "Falco tinnunculus", group: "AVE RAPAZ", season: "Todo el año", status: "En peligro", sex: true, curiosity: "Puede quedarse suspendido en el aire, batiendo las alas, mientras busca presas.", identify: "Fíjate en el vuelo cernido. El macho tiene la cabeza gris; la hembra presenta tonos más pardos." },
  { id: "carbonero", name: "Carbonero común", short: "Carbonero", latin: "Parus major", group: "AVE DE JARDÍN", season: "Todo el año", status: "Preocupación menor", sex: true, curiosity: "Su canto suele repetirse en frases claras y rítmicas; tiene muchas variaciones locales.", identify: "Cabeza negra con mejillas blancas y vientre amarillo. La franja negra del macho suele ser más ancha." },
  { id: "lavandera", name: "Lavandera blanca", short: "Pajarita", latin: "Motacilla alba", group: "AVE URBANA", season: "Todo el año", status: "Preocupación menor", sex: false, curiosity: "Mueve la cola constantemente mientras camina, de ahí su nombre popular de aguzanieves en algunos lugares.", identify: "Ave esbelta de tonos blancos, negros y grises, que camina por el suelo con la cola en movimiento." },
  { id: "estornino", name: "Estornino negro", short: "Estornino", latin: "Sturnus unicolor", group: "AVE URBANA", season: "Todo el año", status: "Preocupación menor", sex: false, curiosity: "Puede imitar sonidos y otras aves; en grupo, sus bandadas dibujan formas cambiantes en el cielo.", identify: "Plumaje oscuro con reflejos y pico amarillento en época reproductora. En invierno aparece moteado." },
  { id: "jilguero", name: "Jilguero europeo", short: "Jilguero", latin: "Carduelis carduelis", group: "AVE DE JARDÍN", season: "Todo el año", status: "Preocupación menor", sex: false, curiosity: "Su pico fino le ayuda a extraer semillas, especialmente de los cardos.", identify: "La cara roja y las bandas amarillas de las alas destacan incluso cuando vuela." },
  { id: "verdecillo", name: "Verdecillo", short: "Verdecillo", latin: "Serinus serinus", group: "AVE DE JARDÍN", season: "Todo el año", status: "Preocupación menor", sex: false, curiosity: "Su canto es un trino muy rápido y agudo que puede parecer un zumbido.", identify: "Pequeño fringílido; el macho muestra amarillo intenso en la cara y el pecho." },
  { id: "verderon", name: "Verderón común", short: "Verderón", latin: "Chloris chloris", group: "AVE DE JARDÍN", season: "Todo el año", status: "Preocupación menor", sex: true, curiosity: "Su pico grueso está especializado en partir semillas duras.", identify: "Cuerpo robusto y tonos verdosos; en vuelo se aprecia una franja amarilla en el ala." },
  { id: "colirrojo", name: "Colirrojo tizón", short: "Colirrojo", latin: "Phoenicurus ochruros", group: "AVE URBANA", season: "Todo el año; más visible en invierno", status: "Preocupación menor", statusSource: "España · SEO/BirdLife (Lista Roja 2021)", sex: true, curiosity: "Cuando se posa, agita la cola rojiza arriba y abajo; el macho suele cantar desde tejados y muros.", identify: "El macho es oscuro, con una mancha blanca en el ala; la hembra, parda. Ambos tienen la cola rojiza." },
  { id: "grajilla", name: "Grajilla occidental", short: "Grajilla", latin: "Corvus monedula", group: "AVE URBANA", season: "Todo el año; suele ir en grupos", status: "En peligro", statusSource: "España · SEO/BirdLife (Lista Roja 2021)", sex: false, curiosity: "Aunque forma bandos visibles, la población española ha caído con fuerza; no está incluida en el Catálogo Español de Especies Amenazadas.", identify: "Córvido pequeño de nuca gris clara y ojo pálido. Suele volar y buscar alimento en grupo." },
  { id: "garcilla-bueyera", name: "Garcilla bueyera", short: "Garcilla", latin: "Bubulcus ibis", group: "AVE DE RIBERA", season: "Todo el año; cerca del río y zonas abiertas", status: "Preocupación menor", statusSource: "España · SEO/BirdLife (Lista Roja 2021)", sex: false, curiosity: "Sigue a vacas y tractores para atrapar los insectos que levantan al caminar.", identify: "Garza pequeña de plumaje blanco. En plumaje nupcial muestra tonos ocres y anaranjados en la cabeza y la espalda." }
];

const mediaCatalog = window.MEDIA_CATALOG || {};
const els = Object.fromEntries(["birdNav", "heroPhoto", "photoLoading", "photoSource", "birdGroup", "birdName", "birdLatin", "sexControl", "playAudio", "playIcon", "audioLabel", "audioPlayer", "audioCredit", "audioSeek", "audioCurrentTime", "audioDuration", "replayAudio", "season", "status", "statusSource", "curiosityText", "identificationText", "positionCount", "previousBird", "nextBird"].map(id => [id, document.getElementById(id)]));
let currentIndex = 0;
let currentSex = "male";
let activeImageRequest = 0;

function getBirdMedia(bird) { return mediaCatalog[bird.id] || {}; }
function addAttribution(container, media, prefix = "") {
  container.replaceChildren();
  if (!media) return;
  if (prefix) container.append(document.createTextNode(prefix));
  const link = document.createElement("a");
  link.href = media.page; link.target = "_blank"; link.rel = "noopener";
  link.textContent = media.mime?.startsWith("audio/") && media.publisher === "SEO/BirdLife" ? "SEO/BirdLife · ficha oficial" : `${media.creator} · ${media.license}${media.mime?.startsWith("image/") ? " · adaptada" : ""}`;
  container.append(link);
}
function renderNav() {
  els.birdNav.replaceChildren();
  birds.forEach((bird, index) => {
    const button = document.createElement("button");
    button.className = "bird-choice"; button.type = "button"; button.dataset.index = index;
    button.setAttribute("aria-current", index === currentIndex ? "true" : "false");
    button.setAttribute("aria-label", `Mostrar ${bird.name}`);
    const image = document.createElement("img"); image.alt = ""; image.loading = index < 5 ? "eager" : "lazy";
    const media = getBirdMedia(bird).male;
    if (media?.local) image.src = media.local;
    else image.classList.add("no-photo");
    const label = document.createElement("span"); label.textContent = bird.short;
    button.append(image, label);
    button.addEventListener("click", () => selectBird(index));
    els.birdNav.append(button);
  });
}
function renderSexControl(bird) {
  const media = getBirdMedia(bird);
  const enabled = bird.sex && Boolean(media.male?.local && media.female?.local);
  els.sexControl.replaceChildren();
  els.sexControl.classList.toggle("is-hidden", !enabled);
  if (!enabled) return;
  for (const [label, value] of [["Macho", "male"], ["Hembra", "female"]]) {
    const button = document.createElement("button"); button.type = "button"; button.className = "sex-button"; button.textContent = label;
    button.setAttribute("aria-pressed", value === currentSex ? "true" : "false");
    button.addEventListener("click", () => selectSex(value));
    els.sexControl.append(button);
  }
}
function setAudioState(playing) {
  els.playAudio.classList.toggle("is-playing", playing);
  els.playIcon.textContent = playing ? "Ⅱ" : "▶";
  els.audioLabel.textContent = playing ? "Pausar sonido" : "Escuchar sonido";
  els.playAudio.setAttribute("aria-label", playing ? "Pausar el sonido" : "Escuchar el sonido");
}
function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}
function updateAudioTimeline() {
  const duration = els.audioPlayer.duration;
  const current = Number.isFinite(els.audioPlayer.currentTime) ? els.audioPlayer.currentTime : 0;
  const knownDuration = Number.isFinite(duration) && duration > 0;
  els.audioCurrentTime.textContent = formatTime(current);
  els.audioDuration.textContent = knownDuration ? formatTime(duration) : "0:00";
  els.audioSeek.disabled = !knownDuration;
  els.audioSeek.value = knownDuration ? String(Math.round((current / duration) * 1000)) : "0";
  els.audioSeek.setAttribute("aria-valuetext", `${formatTime(current)} de ${knownDuration ? formatTime(duration) : "duración desconocida"}`);
}
function showImage(media, bird, sex, request) {
  if (!media?.local) {
    els.photoLoading.textContent = "No hay una foto local para esta ave.";
    els.photoLoading.classList.remove("is-hidden");
    return;
  }
  els.heroPhoto.onload = () => {
    if (request !== activeImageRequest) return;
    els.heroPhoto.classList.add("is-visible"); els.photoLoading.classList.add("is-hidden");
  };
  els.heroPhoto.onerror = () => {
    if (request !== activeImageRequest) return;
    els.photoLoading.textContent = "No se pudo abrir la foto incluida en el paquete.";
    els.photoLoading.classList.remove("is-hidden");
  };
  els.heroPhoto.alt = `${bird.name}${sex ? `, ${sex === "male" ? "macho" : "hembra"}` : ""}`;
  els.heroPhoto.src = media.local;
  addAttribution(els.photoSource, media);
  if (els.heroPhoto.complete && els.heroPhoto.naturalWidth) {
    els.heroPhoto.classList.add("is-visible"); els.photoLoading.classList.add("is-hidden");
  }
}
function showBird() {
  const bird = birds[currentIndex];
  const media = getBirdMedia(bird);
  currentSex = "male";
  els.birdName.textContent = bird.name; els.birdLatin.textContent = bird.latin; els.birdGroup.textContent = bird.group;
  els.season.textContent = bird.season; els.status.textContent = bird.status; els.statusSource.textContent = bird.statusSource || "España · SEO/BirdLife (Lista Roja 2021)"; els.curiosityText.textContent = bird.curiosity;
  els.identificationText.textContent = bird.identify; els.positionCount.textContent = `${currentIndex + 1} / ${birds.length}`;
  els.previousBird.disabled = currentIndex === 0; els.nextBird.disabled = currentIndex === birds.length - 1;
  [...els.birdNav.querySelectorAll(".bird-choice")].forEach((button, i) => button.setAttribute("aria-current", i === currentIndex ? "true" : "false"));
  els.birdNav.querySelector(`[data-index="${currentIndex}"]`)?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  renderSexControl(bird);
  els.photoLoading.textContent = "Cargando foto…"; els.photoLoading.classList.remove("is-hidden"); els.heroPhoto.classList.remove("is-visible");
  const request = ++activeImageRequest; showImage(media.male, bird, "male", request);
  els.audioPlayer.pause(); els.audioPlayer.removeAttribute("src"); els.audioPlayer.load(); setAudioState(false);
  els.audioSeek.value = "0"; els.audioSeek.disabled = true; els.audioCurrentTime.textContent = "0:00"; els.audioDuration.textContent = "0:00";
  if (media.audio?.url) {
    els.audioPlayer.src = media.audio.url; els.audioPlayer.load(); updateAudioTimeline();
    addAttribution(els.audioCredit, media.audio, "Fuente del audio: "); els.playAudio.disabled = false; els.replayAudio.disabled = false;
  } else {
    els.audioCredit.textContent = "No hay una grabación disponible para esta ave."; els.playAudio.disabled = true; els.replayAudio.disabled = true;
  }
}
function selectSex(sex) {
  const bird = birds[currentIndex]; const media = getBirdMedia(bird)[sex];
  if (!media) return;
  currentSex = sex; renderSexControl(bird);
  els.photoLoading.textContent = `Cargando foto del ${sex === "male" ? "macho" : "hembra"}…`;
  els.photoLoading.classList.remove("is-hidden"); els.heroPhoto.classList.remove("is-visible");
  showImage(media, bird, sex, ++activeImageRequest);
}
function selectBird(index) {
  if (index < 0 || index >= birds.length || index === currentIndex) return;
  currentIndex = index; showBird();
}
async function toggleAudio() {
  if (!els.audioPlayer.src) return;
  if (els.audioPlayer.paused) {
    try {
      if (els.audioPlayer.ended) els.audioPlayer.currentTime = 0;
      await els.audioPlayer.play();
    }
    catch (_) { showAudioError(); }
  } else { els.audioPlayer.pause(); }
}
function showAudioError() {
  if (!els.audioCredit.querySelector(".audio-error")) {
    const message = document.createElement("span");
    message.className = "audio-error";
    message.textContent = " · No se pudo cargar el audio. Comprueba la conexión.";
    els.audioCredit.append(message);
  }
}
function replayAudio() {
  if (!els.audioPlayer.src) return;
  els.audioPlayer.currentTime = 0;
  els.audioPlayer.play().catch(showAudioError);
}

els.previousBird.addEventListener("click", () => selectBird(currentIndex - 1));
els.nextBird.addEventListener("click", () => selectBird(currentIndex + 1));
els.playAudio.addEventListener("click", toggleAudio);
els.replayAudio.addEventListener("click", replayAudio);
els.audioSeek.addEventListener("input", () => {
  if (!Number.isFinite(els.audioPlayer.duration) || !els.audioPlayer.duration) return;
  els.audioPlayer.currentTime = (Number(els.audioSeek.value) / 1000) * els.audioPlayer.duration;
  updateAudioTimeline();
});
els.audioPlayer.addEventListener("play", () => setAudioState(true));
els.audioPlayer.addEventListener("pause", () => setAudioState(false));
els.audioPlayer.addEventListener("timeupdate", updateAudioTimeline);
els.audioPlayer.addEventListener("loadedmetadata", updateAudioTimeline);
els.audioPlayer.addEventListener("durationchange", updateAudioTimeline);
els.audioPlayer.addEventListener("ended", () => { setAudioState(false); updateAudioTimeline(); });
els.audioPlayer.addEventListener("error", showAudioError);
document.getElementById("scrollLeft").addEventListener("click", () => els.birdNav.scrollBy({ left: -260, behavior: "smooth" }));
document.getElementById("scrollRight").addEventListener("click", () => els.birdNav.scrollBy({ left: 260, behavior: "smooth" }));
document.addEventListener("keydown", event => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.target.matches("button, input, textarea")) return;
  if (event.key === "ArrowRight") selectBird(currentIndex + 1);
  if (event.key === "ArrowLeft") selectBird(currentIndex - 1);
  if (event.key === " ") { event.preventDefault(); toggleAudio(); }
});
renderNav();
showBird();
const offlineNote = document.querySelector(".source-note");
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").then(() => navigator.serviceWorker.ready).then(() => {
    offlineNote.textContent = "Fotos y guía guardadas en esta tablet. Para escuchar los cantos de SEO/BirdLife hace falta conexión a Internet.";
  }).catch(() => {
    offlineNote.textContent = "Las fotos están incluidas en la guía. Los cantos se reproducen desde SEO/BirdLife y requieren conexión a Internet.";
  });
}

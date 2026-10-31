/**
 * Carte Google Maps de la zone d'Abidjan et de ses environs.
 *
 * L'adresse d'intégration est une vue centrée sur la zone, SANS requête de recherche : Google n'y affiche donc
 * ni marqueur rouge ni adresse. Ne pas ajouter de paramètre de recherche ou de lieu (`!2m1!1s...`), sinon un
 * repère peut apparaître.
 */
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d254278.83825907108!2d-4.050604315001487!3d5.245901533321079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sci!4v1793459382776!5m2!1sfr!2sci";

export function ZonesMap() {
  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-white lg:aspect-auto lg:h-[26rem]">
      <iframe
        src={MAP_SRC}
        title="Carte d'Abidjan et de ses environs : zone d'intervention"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

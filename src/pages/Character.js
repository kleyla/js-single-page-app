import { getData } from "../utils/getData";
import { getHash } from "../utils/getHash";

export const Character = async () => {
  const id = getHash();
  const character = await getData(id);

  const view = `
        <div class="character-card">
            <article class="">
                <img src="${character.image}" alt="${character.name}" />
            </article>
            <article class="character-body" >
                <h2>Name: <span>${character.name}</span></h2>
                <h3>Episodios: <span>${character.episode.length}</span></h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last Location: <span>${character.location.name}</span></h3>
            </article>
        </div>
    `;
  return view;
};

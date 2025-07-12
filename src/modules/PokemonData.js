export const extractData = pokemonData => {
    const { id, name, sprites, types } = pokemonData;
    return {
        id,
        name,
        img: sprites.front_default,
        types: types.map(t => t.type.name),
    };
};

export const showData = data => {
    const html = `
    <dl>
      <dt>Name: ${data.name}</dt>
      <dd><img src="${data.img}" alt=""></dd>
      <dd>ID: ${data.id}</dd>
      <dt>Types: ${data.types.join(", ")}</dt>
    </dl>`;
    document.querySelector("#js-result").innerHTML = html;
};

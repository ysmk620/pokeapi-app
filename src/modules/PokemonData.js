export const extractData = pokemonData => {
    const { id, name, sprites, types, stats } = pokemonData;
    const baseStats = stats.reduce((acc, s) => {
        acc[s.stat.name] = s.base_stat;
        return acc;
    }, {});

    return {
        id,
        name,
        img: sprites.front_default,
        types: types.map(t => t.type.name),
        stats: baseStats,
    };
};

export const showData = data => {
    const statsRows = Object.entries(data.stats)
        .map(([key, val]) => `<tr><th>${key}</th><td>${val}</td></tr>`)
        .join("");

    const html = `
    <dl>
      <dt>Name: ${data.name}</dt>
      <dd><img src="${data.img}" alt=""></dd>
      <dt>ID: ${data.id}</dt>
      <dt>Types: ${data.types.join(", ")}</dt>
       <table class="stats">
        <tbody>
          ${statsRows}
        </tbody>
      </table>
    </dl>`;
    document.querySelector("#js-result").innerHTML = html;
};

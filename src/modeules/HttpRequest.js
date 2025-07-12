import axios from "axios";

const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
    timeout: 1000,
});

export const getPokemonData = async pokeName => {
    try {
        const { data } = await instance.get(pokeName);
        return data;
    } catch (error) {
        console.error(error);
        alert("Pokemon not found");
        throw error;
    }
};

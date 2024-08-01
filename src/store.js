// importo componenete reactive da vue
import { reactive } from 'vue';

export const store = reactive({
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    // array vuoto da popolare con le carte che recupero
    charactersList: [],
    // array vuoto da popolare con la tipologia di carta
    archetypes: [],
});
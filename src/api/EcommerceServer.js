import axios from "axios";
import config from "./config";

const getProducts = async () =>
  axios
    .create(config.axiosConfig)
    .get(`/sites/MLA/search?seller_id=${config.sellerId}&sort=price_asc`)
    .then(({ data: { results } }) =>
      Promise.all(
        results.map(result =>
          axios
            .create(config.axiosConfig)
            .get(`/items/${result.id}`)
            .then(({ data: { pictures } }) => ({
              ...result,
              pictures
            }))
        )
      ).then(result => result)
    );

export { getProducts };

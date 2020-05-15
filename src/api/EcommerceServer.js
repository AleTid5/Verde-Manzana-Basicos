import axios from "axios";
import config from "./config";

const getProducts = async (offset, limit, productsToSearch) => {
  let query = `/sites/MLA/search?seller_id=${config.sellerId}&offset=${offset}&limit=${limit}`;

  if (productsToSearch !== null && productsToSearch !== "") {
    query += `&q=${productsToSearch}`;
  }

  return axios
    .create(config.axiosConfig)
    .get(query)
    .then(({ data: { results, paging } }) =>
      Promise.all(
        results.map(result =>
          axios
            .create(config.axiosConfig)
            .get(`/items/${result.id}`)
            .then(({ data: { pictures } }) => ({
              ...result,
              pictures: pictures.map(picture => ({
                url: picture.secure_url.replace("-O.jpg", "-F.jpg")
              }))
            }))
        )
      ).then(products => ({ products, paging }))
    );
};

export { getProducts };

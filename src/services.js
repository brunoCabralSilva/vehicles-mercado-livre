export async function getVehicles() {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB1743`);
    const responseJson = await response.json();
    return responseJson.results;
  } catch (error) {
    return error;
  }
}

export async function getProductsById(id) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}
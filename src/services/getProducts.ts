import axios from 'axios';

export async function getProducts() {
  try {
    const response = await axios.get('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

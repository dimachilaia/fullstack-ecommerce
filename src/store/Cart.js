import axios from "axios";

export async function fetchCartItems(userId) {
  const response = await axios.get(`/api/users/${userId}/cart`);
  return response.data;
}

export async function removeFromCart(userId, productId) {
  const response = await axios.delete(`/api/users/${userId}/cart/${productId}`);
  return response.data;
}

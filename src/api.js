const BASE_URL = 'https://api.github.com';

/**
 * Busca dados do usuário no GitHub
 * @param {string} username - Nome do usuário do GitHub
 * @returns {Promise<Object>} Dados do usuário
 * @throws {Error} Se a requisição falhar
 */
export async function fetchUserData(username) {
  const response = await fetch(`${BASE_URL}/users/${username}`);
  
  if (!response.ok) {
    throw new Error('Usuário não encontrado!');
  }
  
  return await response.json();
}

import { fetchUserData } from './src/api.js';
import { elements, getSearchInput, clearSearchInput, clearResults } from './src/dom.js';
import { showLoading, renderProfile, showError } from './src/ui.js';

/**
 * Manipula o evento de busca de usuário
 */
async function handleSearch() {
  const username = getSearchInput();

  // Validação de entrada
  if (!username) {
    showError('Nenhum valor foi digitado.');
    return;
  }

  try {
    showLoading();
    const userData = await fetchUserData(username);
    renderProfile(userData);
  } catch (error) {
    console.error('Erro na requisição:', error);
    showError('Ocorreu um erro ao buscar o usuário.');
  }
}

// Event Listeners
elements.btnSearch.addEventListener('click', handleSearch);

// Permitir busca ao pressionar Enter
elements.inputSearch.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});

//vamos refatorar esses codigo do index.js usando modulos do es6 de forma que as responsabilidades sejam dividas
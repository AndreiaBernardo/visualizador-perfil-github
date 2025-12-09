/**
 * Seleciona elementos do DOM de forma centralizada
 */

export const elements = {
  inputSearch: document.getElementById('input-search'),
  btnSearch: document.getElementById('btn-search'),
  profileResults: document.querySelector('.profile-results'),
};

/**
 * Obtém o valor da entrada de busca
 * @returns {string} Valor do input
 */
export function getSearchInput() {
  return elements.inputSearch.value.trim();
}

/**
 * Limpa o campo de entrada
 */
export function clearSearchInput() {
  elements.inputSearch.value = '';
}

/**
 * Limpa a área de resultados
 */
export function clearResults() {
  elements.profileResults.innerHTML = '';
}

import { elements } from './dom.js';

/**
 * Exibe indicador de carregamento
 */
export function showLoading() {
  elements.profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
}

/**
 * Renderiza o perfil do usuário
 * @param {Object} userData - Dados do usuário do GitHub
 */
export function renderProfile(userData) {
  elements.profileResults.innerHTML = `
    <div class="profile-card">
      <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="avatar">
      <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'Não possui bio cadastrada🙁.'}</p>
      </div>
    </div>
    
    <div class="profile-counter">
      <div class="followers">
        <h4>👥 Seguidores</h4>
        <span>${userData.followers}</span>
      </div>
      <div class="following">
        <h4>👥 Seguindo</h4>
        <span>${userData.following}</span>
      </div>
    </div>
  `;
}

/**
 * Exibe mensagem de erro
 * @param {string} message - Mensagem de erro a exibir
 */
export function showError(message) {
  alert(message);
  elements.profileResults.innerHTML = '';
}

const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results ');



const BASE_URL = 'https://api.github.com';

btnSearch.addEventListener('click', async () => {
    const username = inputSearch.value;

    if (username) {

    profileResults.innerHTML = `<p class="loading">Carregando...</p>`//carregamento

        try {
            const response = await fetch(`${BASE_URL}/users/${username}`)

            if (!response.ok) {
                alert('Usuário não encontrado!');
                profileResults.innerHTML = '';//limpa a área de resultados
                return;
            }

        const userData = await response.json();

        profileResults.innerHTML = `<div>
        <img src="${userData.avatar_url}" alt="Avatar de ${userData.login}" class="avatar">
        <div class="profile-info">
        <h2>${userData.name}</h2>
        <p>${userData.bio || 'Não possui bio cadastrada🙁.'}</p>
        </div>
    </div>`;
    } catch (error) {
        console.log('Erro na requisição:', error);
        alert('Ocorreu um erro ao buscar o usuário.');
        profileResults.innerHTML = '';//limpa a área de resultados
    }
    }

else {
        alert('Nenhum valor foi digitado.');
        profileResults.innerHTML = '';//limpa a área de resultados
    }}
);

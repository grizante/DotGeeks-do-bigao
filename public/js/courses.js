// Script para carregar os cursos da API
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('courses-container');

    try {
        const response = await fetch('/api/courses'); // Rota do backend para obter cursos
        const courses = await response.json();

        container.innerHTML = ''; // Limpa o carregando

        if (courses.length === 0) {
            container.innerHTML = '<p>Nenhum curso disponível no momento.</p>';
            return;
        }

        courses.forEach(course => {
            const courseDiv = document.createElement('div');
            courseDiv.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            `;
            container.appendChild(courseDiv);
        });
    } catch (error) {
        console.error('Erro ao carregar os cursos:', error);
        container.innerHTML = '<p>Erro ao carregar os cursos. Tente novamente mais tarde.</p>';
    }
});

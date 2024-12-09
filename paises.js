
export async function carregarPaises() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/puccinellilua/TrabalhoAPI/main/paises.json'); // Link correto
        const data = await response.json();
        
   
        const paises = data.map(({ nome_pais, sigla }) => ({
            nome: nome_pais,
            sigla: sigla
        }));


        const selectElement = document.getElementById('paisSelect');
        paises.forEach(pais => {
            const option = document.createElement('option');
            option.value = pais.sigla;
            option.textContent = pais.nome;
            selectElement.appendChild(option);
        });
    } catch (error) {
        console.error('Erro ao carregar os países:', error);
    }
}

export function exibirDadosPais(sigla) {
 
    fetch('https://raw.githubusercontent.com/puccinellilua/TrabalhoAPI/main/paises.json')  
        .then(response => response.json())
        .then(data => {
            const pais = data.find(p => p.sigla === sigla);
            if (pais) {
                const { nome_pais, gentilico, nome_pais_int } = pais;
                const infoDiv = document.getElementById('paisInfo');
                infoDiv.innerHTML = `
                    <h3>${nome_pais}</h3>
                    <p><strong>Gentílico:</strong> ${gentilico}</p>
                    <p><strong>Nome Internacional:</strong> ${nome_pais_int}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao exibir os dados do país:', error);
            alert('Erro ao carregar os dados do país.');
        });
}

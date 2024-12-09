import { carregarPaises, exibirDadosPais } from './paises.js';
import { consultarCep } from './api.js';


document.addEventListener('DOMContentLoaded', () => {
    carregarPaises();

   
    const selectPais = document.getElementById('paisSelect');
    selectPais.addEventListener('change', (event) => {
        const sigla = event.target.value;
        if (sigla) {
            exibirDadosPais(sigla);
        } else {
            document.getElementById('paisInfo').innerHTML = '';
        }
    });

 
    const formularioCep = document.getElementById('consultaForm');
    formularioCep.addEventListener('submit', async (event) => {
        event.preventDefault();
        const cep = document.getElementById('cepInput').value.trim();
        
  
        const cepRegex = /^\d{5}-\d{3}$/;
        if (!cepRegex.test(cep)) {
            alert('Por favor, insira um CEP válido no formato 00000-000.');
            return;
        }

        const resultado = await consultarCep(cep);
        const resultadoDiv = document.getElementById('apiResult');
        if (resultado) {
            resultadoDiv.innerHTML = `
                <h4>Resultado da Consulta:</h4>
                <p><strong>Logradouro:</strong> ${resultado.street}</p>
                <p><strong>Bairro:</strong> ${resultado.neighborhood}</p>
                <p><strong>Cidade:</strong> ${resultado.city}</p>
                <p><strong>Estado:</strong> ${resultado.state}</p>
            `;
        } else {
            resultadoDiv.innerHTML = '<p>Não foi possível obter informações para o CEP informado.</p>';
        }
    });
});


export async function consultarCep(cep) {
    try {
        const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
        if (!response.ok) {
            throw new Error('Erro ao consultar o CEP');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao consultar a API:', error);
        alert('Erro ao consultar a API.');
        return null;
    }
}

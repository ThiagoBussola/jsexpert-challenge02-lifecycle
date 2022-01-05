class ReferencesService {
  getCounterCopyingReferences(object) {
    const newObject = object

    return newObject;
  }

  getCounterWithoutCopyingReferences(object) {
    // força a cópia do valor independente da referencia em memória

    let newObject = Object.create(object)

    return newObject;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    // Json stringfy converte o valor para uma string json, e depois aplicamos o parse, quando transformarmos em string ele se torna um valor primitivo
    // No meu entendimento ao aplicar o parse em cima da nova string, ele está agora alocado em outro endereço de memória
    const newObject = JSON.parse(JSON.stringify(object))
    return newObject;
  }
}

module.exports = ReferencesService;

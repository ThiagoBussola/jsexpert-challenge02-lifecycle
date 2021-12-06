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
    const newObject = JSON.parse(JSON.stringify(object))
    return newObject;
  }
}

module.exports = ReferencesService;

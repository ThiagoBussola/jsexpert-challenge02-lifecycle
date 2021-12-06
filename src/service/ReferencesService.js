class ReferencesService {
  getCounterCopyingReferences(object) {
    const newObject = object

    return newObject;
  }

  getCounterWithoutCopyingReferences(object) {
    // força a cópia do valor independente da referencia em memória
    // ainda não entendi a resolução do terceiro teste

    let newObject = Object.create(object)

    return newObject;
  }

  /*
  // @TIP: if you want to do the extra sub-challenge, uncomment and implement the following function:
  getCounterWithoutDeepCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    return null;
  }
  */
}

module.exports = ReferencesService;

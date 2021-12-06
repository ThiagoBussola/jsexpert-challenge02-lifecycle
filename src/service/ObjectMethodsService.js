class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // exemplo do que foi feito em aula, 
    return {
      // se for number o value of não retornar um tipo primitivo ele chama o toString
      valueOf() {
        return rawObject.age
      },
      // se o tipo da conversão for string ai ele chama o toString primeiro e depois o valueOf
      toString() {
        return rawObject.name
      }
    }

    // resolução com arrow funciton
    // return {
    //   valueOf: () => rawObject.age,
    //   toString: () => rawObject.name
    // }
  }

  getEnhancedObject2(rawObject) {
    return {
      valueOf: () => `[name="${rawObject.name}",age=${rawObject.age}]`,
      toString: () => `[name="${rawObject.name}",age=${rawObject.age}]`,
    };
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const modifiedObject = {  
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${rawObject.name}",age=${rawObject.age}]`,
          number: rawObject.age
        }
        return types[coercionType] || types.string
      }
    }
    return modifiedObject  
  }
}

module.exports = ObjectMethodsService;

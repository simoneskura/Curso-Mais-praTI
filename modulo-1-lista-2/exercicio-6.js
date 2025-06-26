function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("Resultado do cache usado para:", args);
      return cache[key];
    } else {
    const resultado = fn(...args);
      cache[key] = resultado;
      return resultado;
    }
  };
}  

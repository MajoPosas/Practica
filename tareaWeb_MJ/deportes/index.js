import tablaDeportes from "./tablas/deportes";

export const generarContenido = (page)=>{
  console.log('page', page);
  const contextObject = {
      ...navData,
  };
  let pageObject = {}
  switch(page){
      case '/index.html':
          pageObject = {
            ...pageObject,
            ...tablaDeportes
          };
          break;
      default:
          pageObject = {};
  }
  return {
      ...contextObject,
      ...pageObject
  }
}
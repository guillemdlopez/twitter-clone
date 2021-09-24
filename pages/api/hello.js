// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// Equiparable a crear una API en Express
// Podemos crear una conexión con una DB
// Un archivo equivale a una ruta, por cada ruta tenemos un endpoint
// Ventaja y desventaja a la misma vez, tener api dentro del propio proyecto
// cada endpoint va a ser independiente uno del otro
// MALO: te estás casando con el sistema de deployment de Vercel

// Fetch del server al mismo server, pero puedes crear llamadas a otros servidores

export default function handler(req, res) {
  res.status(200).json({ userName: '@guillemdl', age: 24 })
}
 
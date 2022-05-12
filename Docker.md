# Generando imagen (docker)

## crear file : .dockerignore

## crear file: Dockerfile

## generar imagen :

1. Docker sektop corriendo (engine running en verde)
2. En un a terminal: (-t es para añadirun tag ej nextjs-initial )
   docker build -t nextjs-initial .

## levantar la app

1. en una terminal ejecutar el siguiente comando:
   docker run --name=next-app -p 3000:3000 nextjs-initial

# Generando imagen recomendada (mas liegra)

## en el next.config.js -> configurar standalone

const nextConfig = {
reactStrictMode: true,
experimental: {
outputStandalone:true,
}
}

module.exports = nextConfig

## en el package.json - <script start> configurar puerto:

"start":"next start -p ${PORT:=300}"

# Imagem base oficial com Node + navegadores + Cypress
FROM cypress/browsers:node-22.17.0-chrome-138.0.7204.49-1-ff-140.0-edge-137.0.3296.93-1

# Define diretório de trabalho
WORKDIR /app

# Copia todos os arquivos do projeto para dentro do container
COPY . .

# Instala dependências de desenvolvimento
RUN npm install -D

# Instala o binário do Cypress
RUN npx cypress install

# Executa testes de API
RUN npx cypress run --spec "cypress/e2e/api/**/*"

# Executa testes de Frontend
RUN npx cypress run --spec "cypress/e2e/application/**/*"

# Define comando default para rodar todos os testes caso o container seja executado diretamente
CMD ["npx", "cypress", "run"]

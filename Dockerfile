# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файл package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем остальной исходный код
COPY . .

# Открываем порт для доступа
EXPOSE 5000

# Запускаем приложение
CMD ["npm", "start"]
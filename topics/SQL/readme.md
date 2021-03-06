# SQL

### Основные команды

```mysql
# Создание кластера
CREATE DATABASE shop;
# Создание таблицы; PRIMARY KEY - уникальное значение
CREATE TABLE users( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30), email VARCHAR(30), info TEXT, birth DATE, PRIMARY KEY(id));
# Удаление таблицы
DROP TABLE users;
# Добавление полей в таблице
ALTER TABLE users ADD pass VARCHAR(32);
#Удалить поле в таблице
ALTER TABLE users DROP COLUMN pass;
#Изменить поле в таблице
ALTER TABLE users CHANGE birth birth DATE NOT NULL;

#ВЫбор всё из таблицы
SELECT * FROM users;
#ВЫбор чего-то конкретного. Тут можно прописать вместо условия BETWEEN 6 AND 7; 
# IN(1,2,3) - выбыорка данных вместо условий сравнения;
SELECT `id`, `name` FROM users WHERE id > 5 AND id < 8;
#Выбор уникальных данных 
SELECT DISTINCT name FROM users;
#Выбор определнного количества данных; LIMIT работает как slice для массивов 
SELECT * FROM users LIMIT 2;
#Сортировка данных ; ORDER ставится после WHERE; ASC - по возрастание; DESC - по убыванию
SELECT * FROM users ORDER BY id
# Оператор LIKE
# % - после или перд неважно, что будет
SELECT * FROM users WHERE name LIKE 'И%'


#Вставить в таблицу
INSERT INTO users (name, info, birth, email) 
    VALUES
    ('Николай', 'Информация', '2050-04-04', 'test@mail.ru'),
    ('Иван', 'Информация', '2050-04-04', 'test@mail.ru');
#Обновление данных ячейки
UPDATE `users` SET `name` = 'Антон', email = 'test2@mail.ru' WHERE id = 5;
#Удаление данных из таблицы
DELETE FROM users WHERE id > 4;
    #Полностью очисть можно двумя способами, лучше использовать второй:
    DELETE FROM users;
    TRUNCATE users;
```

### Индексы
Позволяют выполнять различные SQL команды намного быстрее, нежели без добавления индексов
Везде расставлять не нужно. Кейс - поиск по сайту названию, описанию (Добавляем индексы для названия и описания)
```mysql
CREATE TABLE users( id INT NOT NULL AUTO_INCREMENT, name VARCHAR(30), email VARCHAR(30), info TEXT, birth DATE, PRIMARY KEY(id));

#Создание индекса
CREATE INDEX SearchByName ON users(name);
# Благодаря индексу следующий запрос выполнится быстрее
SELECT name FROM users;

# Удаление индекса
DROP INDEX SearchByName ON users;
```

### Создание двух таблиц и объединения
```mysql
CREATE TABLE users( 
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30), 
    email VARCHAR(30), 
    info TEXT, 
    birth DATE, 
    PRIMARY KEY(id)
);

CREATE TABLE shop(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(30),
   price INT,
   PRIMARY KEY(id)
);

CREATE TABLE orders(
  id INT NOT NULL AUTO_INCREMENT,
  orderNumber INT,
  shopId INT,
  userId INT,
  date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  FOREIGN KEY (shopId) REFERENCES shop,
  FOREIGN KEY (userId) REFERENCES users;
);

#Прописание значений 
INSERT INTO shop (title, price) 
    VALUES ('iPhone', 300), ('TV', 320), ('PS5', 320), ('Mac', 400), ('Fridge', 200);

INSERT INTO orders (orderNumber, shopId, userId) 
    VALUES (1, 2, 4), (2, 1, 3), (3, 2, 3);

# INNER JOIN: объединение таблицы пользователей с таблицей заказов и таблицей товаров
SELECT shop.title, users.name, users.email FROM users
    INNER JOIN orders ON users.id = orders.userId
    INNER JOIN shop ON shop.id = orders.shopId
    ORDER BY DESC;

# LEFT JOIN: объединение таблицы пользователей с таблицей заказов
# Отличие от Inner join - будут взяты все эелементы из таблицы пользоватлей , только без данных (если нет объединения)
SELECT users.name, orders.orderNumber FROM users
    LEFT JOIN orders ON users.id = orders.userId
    ORDER BY users.name DESC

# RIGHT JOIN: объединение таблицы пользователей с таблицей заказов
# Тот же самый запрос, как запрос выше, только с объединением справа
SELECT users.name, orders.orderNumber FROM orders
RIGHT JOIN users ON users.id = orders.userId
ORDER BY users.name DESC 
```
Илюстрация join:
![](../../source/sql-join.png)


### Псевдонимы, ф-ии и groupBy
```mysql
CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  email VARCHAR(30),
  info TEXT,
  birth DATE,
  PRIMARY KEY(id)
);

CREATE TABLE shop(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(30),
   price INT,
   PRIMARY KEY(id)
);

SELECT name AS 'Имя' FROM users;

SELECT CONCAT('Имя: ', name , ' День рождения: ', birth) AS 'Информация' FROM users;

# Не объедитнение , а просто выборка из двух таблиц
SELECT u.id, u.name, s.title, s.price FROM users AS u, shop AS s;

# ф-ии для подсчета COUNT, MAX, AVG, MIN, SUM
# ф-ии для работы с текстом  LCASE, UCASE
SELECT COUNT(id) FROM shop;

SELECT MAX(price) FROM shop;

# Группировка по определенном полю
SELECT price AS 'Цена', COUNT(price) AS 'Количество' FROM shop GROUP BY price 
HAVING COUNT(price) > 1;


```
#SQL

###Основные команды

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
#ВЫбор чего-то конкретного. Тут можно прописать вместо условия BETWEEN 6 AND 7; IN(1,2,3) - выбыорка данных вместо условий сравнения 
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
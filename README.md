Данный README содержит описание проекта и инструкции по запуску приложения. Процент покрытия кода тестами составляет 95%.

## Описание проекта
### Регистрация и авторизация
Сайт на Django с функционалом, доступным только для зарегистрированных и авторизованных пользователей. Пользователи могут регистрироваться с помощью ввода своих данных или использования авторизации через почту Google. В случае забытого пароля, пользователи могут восстановить его, получив ссылку на смену пароля через свою почту.

После успешной авторизации, пользователи попадают на главную страницу, где могут просмотреть доступные разделы, ознакомиться с "Помощью и поддержкой", "Правилами пользования" и найти контактную информацию для связи. Также на главной странице пользователи могут подписаться на ежедневные новости, вводя свой адрес электронной почты в форму.

### Личный кабинет
В личном кабинете пользователи могут просмотреть и изменить свою персональную информацию, включая имя, фамилию, логин и почту.

### Раздел "Одежда"
На странице "Одежда" пользователи могут добавлять элементы одежды, указывая категорию, подкатегорию, описание и загружая изображение. Они также могут удалять или редактировать элементы одежды. Добавленные элементы гардероба сохраняются на странице, а пользователю предлагаются рекомендации по категории и подкатегории.

### Раздел "Образы"
В разделе "Образы" пользователи могут создавать подборки из элементов одежды, добавленных в гардероб. Они могут называть образы и публиковать их для своих подписчиков, при этом оставляя комментарии к образу.

### Раздел "Новости"
На странице "Новости" пользователи могут просматривать новости из мира моды без необходимости обновления страницы. Они также могут переходить на сайты с более подробной информацией о новостях.

### Раздел "Подписки"
В разделе "Подписки" пользователи могут находить и подписываться на аккаунты других пользователей по логину. На этой странице они могут видеть образы, опубликованные пользователями, на которых они подписаны, а также ставить лайки и комментировать посты.


## Установка

Для установки и запуска проекта вам потребуется Python версии не ниже 3.6 и установленный фреймворк Django.

### Склонируйте репозиторий
`git clone https://github.com/ITIS-2-course/semestrovka-karinaKhairullina.gi`


Создайте виртуальное окружение и активируйте его:
`python3 -m venv venv
source venv/bin/activate`

Установите зависимости:
`pip install -r requirements.txt`

Запустите миграции:
`python manage.py migrate`

Создайте администратора:
`python manage.py createsuperuser`

Запустите сервер:
`python manage.py runserver`

Запустите Celery:
`celery -A myapp worker --loglevel=info`

Перейдите в браузере на страницу 
`http://localhost:8000` 
и начните пользоваться сайтом.

### Автор

Хайруллина Карина 

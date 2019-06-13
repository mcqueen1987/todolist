<img src="https://www.rotoruanz.com/RNZ/media/Image-Library/Rainbow-Springs-kiwi.jpg?width=800" width="300" align="right">

## TODO-List

It's a simple todo list web application that allows users to register, login, and create tasks that are saved against their account. also, users could built/complete their tasks.

## Demo

You can access the final project at: [built your todo list](http://dongboxu.com/home) 👈

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
- [Google Cloud Platform]
- [Debian GNU/Linux 9]
- [PHP 7.0]
- [Laravel 5.5]
- [mysql Ver 15.1 Distrib 10.2.6-MariaDB]
- [phpunit 5]
- [vue 2.5.17]
- [vue-router 3.0.6]
- [nginx 1.12.0]

### Installing
here is step by step series of examples that can be followed to get the development env running

System deploy:

- [Creating and Starting a Google VM Instance](https://cloud.google.com/compute/docs/instances/create-start-instance)

Install PHP7 + Laravel 5.5 + mysql 15.1:

- [PHP7 + Laravel 5.5 + mysql 15.1](https://tecadmin.net/install-laravel-on-debian-9-stretch/)

Install Nginx and Configuration:
- [Nginx](https://www.cyberciti.biz/faq/howto-install-setup-nginx-on-debian-linux-9/)
- [Nginx conifg](https://www.linode.com/docs/web-servers/nginx/how-to-configure-nginx/)

Install Vue.js:

- [Vue.js](https://laraveldaily.com/quick-start-laravel-5-5-vue-js-simple-crud-project/)


## Running the simple Unit Test

Here is one unit test demo to test the API getting all tasks by user from database. 

Testing: Getting Started:
- [Unit test tutorial](https://laravel.com/docs/5.8/testing)

```php
php artisan make:test GetAllTaskByUserTest --unit
./vendor/bin/phpunit tests/Unit/GetAllTaskByUserTest.php
```

## Deployment

To deploy this on a live system easily for cumtomers, it's better deploy the whole env with Doc, or we make it a VM image file on GCP.

## Authors

* **Dongbo Xu** - *Initial work*

## License

[MIT](https://choosealicense.com/licenses/mit/)

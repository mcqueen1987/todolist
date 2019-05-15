<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

<!-- Footer -->
<footer class="page-footer font-small mdb-color pt-4" style="margin-top: 100px;">
    <div class="container text-center text-md-left">
        <hr>
        <div class="row text-center text-md-left mt-3 pb-3" style="font-size: 17px;
    font-weight: 200;">

            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <div>
                    <img src="../../assets/images/_ionicons_svg_ios-person.svg" style="width: 17px; margin: 0 5px 4px 0;">
                    <p style="display: inline-block;">About Me</p>
                </div>
                <p>Full Stack Developer</p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <img src="../../assets/images/_ionicons_svg_logo-github.svg" style="width: 17px; margin: 0 5px 4px 0;">
                <p style="display: inline-block;">GitHub</p>
                <p>
                    <a href="https://github.com/mcqueen1987/todolist">Git</a>
                </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <img src="../../assets/images/_ionicons_svg_ios-mail.svg" style="width: 17px; margin: 0 5px 4px 0;">
                <p style="display: inline-block;">Email</p>
                <p>xdb1987@gmail.com</p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <img src="../../assets/images/_ionicons_svg_ios-home.svg" style="width: 17px; margin: 0 5px 4px 0;">
                <p style="display: inline-block;">Address</p>
                <p>Falkirk St, Blockhouse Bay, Auckland, NZ</p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <img src="../../assets/images/_ionicons_svg_ios-contact.svg" style="width: 17px; margin: 0 5px 4px 0;">
                <p style="display: inline-block;">Author(Linkedin)</p>
                <p class="text-center text-md-left">
                    <a href="https://www.linkedin.com/in/dongboxu/">Dongbo Xu</a>
                </p>
            </div>
        </div>
    </div>
</footer>

<script type="application/javascript">
    var USERID = {{{Auth::user() ? Auth::user()->id : -1}}};
    var USERNAME = "{{{Auth::user() ? Auth::user()->name : ""}}}";
</script>
<script type="text/javascript" src="/js/app.js"></script>
</html>

@extends('layouts.app')

@section('content')
<body>
<div id="app" >
    <div class="container main">
        <router-view/>
    </div>

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

</div>
</body>
@endsection

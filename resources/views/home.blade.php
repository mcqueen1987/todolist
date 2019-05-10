<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="@{{ csrf_token }}">
    <title>TODO</title>
    <link rel="stylesheet" type="text/css" href="/css/app.css">
</head>
<body>
<div id="app">
    <nav class="navbar navbar-inverse">
        <div class="navbar-container container">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">HOME</a>
            </div>
        </div>
    </nav>
    <div class="container main">
        <router-view/>
    </div>
</div>
<script>
    var USERID = {{{Auth::user()->id}}};
    var USERNAME = "{{{Auth::user()->name}}}";
</script>
<script type="text/javascript" src="/js/app.js"></script>
</body>
</html>

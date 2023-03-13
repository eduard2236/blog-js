//se ingresa dentro de un if para condicionar el documento que utiliza estos metodos
if (window.location.href.indexOf('index') > -1) {
    /* hora */
// se formatea la horaa en español cambiando solo el locale de la funcion
    moment.locale("es");

    var post = [
        {
            title: 'prueba titulo 1',
            date: moment().format("MMMM DD YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum alias minima, soluta totam reiciendis cumque dolores fuga veniam voluptate odit rerum voluptatum, corporis mollitia error odio maxime voluptates molestiae similique culpa asperiores est explicabo ullam hic. Veritatis eaque debitis quia odit nostrum aliquid eum repudiandae repellendus accusamus assumenda, quos non aperiam suscipit saepe unde ea dolorem pariatur. Vitae, rem?'
        },
        {
            title: 'prueba titulo 2',
            date: moment().format("MMMM DD YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum alias minima, soluta totam reiciendis cumque dolores fuga veniam voluptate odit rerum voluptatum, corporis mollitia error odio maxime voluptates molestiae similique culpa asperiores est explicabo ullam hic. Veritatis eaque debitis quia odit nostrum aliquid eum repudiandae repellendus accusamus assumenda, quos non aperiam suscipit saepe unde ea dolorem pariatur. Vitae, rem?'
        },
        {
            title: 'prueba titulo 3',
            date: moment().format("MMMM DD YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum alias minima, soluta totam reiciendis cumque dolores fuga veniam voluptate odit rerum voluptatum, corporis mollitia error odio maxime voluptates molestiae similique culpa asperiores est explicabo ullam hic. Veritatis eaque debitis quia odit nostrum aliquid eum repudiandae repellendus accusamus assumenda, quos non aperiam suscipit saepe unde ea dolorem pariatur. Vitae, rem?'
        },
        {
            title: 'prueba titulo 4',
            date: moment().format("MMMM DD YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum alias minima, soluta totam reiciendis cumque dolores fuga veniam voluptate odit rerum voluptatum, corporis mollitia error odio maxime voluptates molestiae similique culpa asperiores est explicabo ullam hic. Veritatis eaque debitis quia odit nostrum aliquid eum repudiandae repellendus accusamus assumenda, quos non aperiam suscipit saepe unde ea dolorem pariatur. Vitae, rem?'
        },
        {
            title: 'prueba titulo 5',
            date: moment().format("MMMM DD YYYY"),
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum alias minima, soluta totam reiciendis cumque dolores fuga veniam voluptate odit rerum voluptatum, corporis mollitia error odio maxime voluptates molestiae similique culpa asperiores est explicabo ullam hic. Veritatis eaque debitis quia odit nostrum aliquid eum repudiandae repellendus accusamus assumenda, quos non aperiam suscipit saepe unde ea dolorem pariatur. Vitae, rem?'
        }

    ];
    /* bucle que recorre el json post*/
    post.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="fecha">${item.date}</span>
        <p>${item.content}</p>
        <a href="" class="buntton-more">Leer mas</a>
        </article>
        `;
        $("#post").append(post);
    });



    /* slider */
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

}




/* change theme */
var theme = $('#theme');

$('#to-green').click(function () {
    theme.attr('href', 'css/green.css');
});
$('#to-red').click(function () {
    theme.attr('href', 'css/red.css');
});
$('#to-blue').click(function () {
    theme.attr('href', 'css/blue.css');
});
/* scroll arriba de la web */
$('.subir').click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 500);
    return false;
});

//login falso
$('#login form').submit(function () {
    var userName = $('#name').val();

    localStorage.setItem('userName', userName);
});
//oculta formulario y crea boton de cerrar sesion

var userName = localStorage.getItem('userName');

if (userName != null && userName != "udenfined") {
    var aboutParrafo = $("#about p");

    aboutParrafo.html(`<br><strong>Bienvenido: ${userName}</strong> `);
    aboutParrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
    $('#login').hide();
    $('#logout').click(function () {
        localStorage.clear();
        location.reload();
    });
}

//acordeon
if (window.location.href.indexOf('about') > -1){
    $('#acordeon').accordion();
}

//reloj
if (window.location.href.indexOf('reloj') > -1){
    moment.locale("es");
            
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        },1000);
};

//contacto validacion de formulario
if (window.location.href.indexOf('contact') > -1){
    $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
    });

    $.validate({
        language:"es",
    });
    

    
}

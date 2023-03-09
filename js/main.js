/* hora */
// se formatea la horaa en español cambiando solo el locale de la funcion
moment.locale("es");

    var post= [
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
    post.forEach((item,index) => {
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

    /* change theme */
    var theme = $('#theme');

    $('#to-green').click(function(){
        theme.attr('href','css/green.css');
    });
    $('#to-red').click(function(){
        theme.attr('href','css/red.css');
    });
    $('#to-blue').click(function(){
        theme.attr('href','css/blue.css');
    });

  
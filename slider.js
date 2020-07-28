$(function(){
    var curSlide = 0;
    var maxSlide = $('.slide-single').length - 1;

    playSlide();
    changeSlide();

    

    //inicializa meu slide
    function playSlide(){
        //oculta todos os slides
        $('.slide-single').hide();
        //mostra apenas ooprimneiro slide
        $('.slide-single').eq(0).show();

        for(var i = 0; i < maxSlide+1; i++){
            var content = $('.bullets').html();
            if(i == 0){
                content+="<span class='active-slide'></span>";
            }else{
                content +='<span></span>';
            }
            $('.bullets').html(content); 
        }
    }
    //faz a troca dos sliders
    function changeSlide(){
        setInterval(function(){
            //desaparece com o primeior slide
           $('.slide-single').eq(curSlide).stop().fadeOut(2000);
            //adiciona mais um a posição
           curSlide++;
           //valida a posição do slide
           if(curSlide > maxSlide){
               curSlide = 0;
           } 
           //mostra os sliders
           $('.slide-single').eq(curSlide).stop().fadeIn(2000);

           $('.bullets span').removeClass('active-slide');
            $('.bullets span').eq(curSlide).addClass('active-slide');
        }, 6000);
        //trocando bullets
    }
    $('.bullets span').click(function(){
        //pega o bullet clicado
        var bullet = $(this);
        //esconde o slide que esta rodando
        $('.slide-single').eq(curSlide).fadeOut(200);
        //pegando posição do bullet clicado
        curSlide = bullet.index();
        //mostra a imagem do bullet clicado
        $('.slide-single').eq(curSlide).fadeIn(200);
        //remove a classe de todos os spans
        $('.bullets span').removeClass('active-slide');
        //adiciona a classe no elemento da vez
        bullet.addClass('active-slide');
    });
});
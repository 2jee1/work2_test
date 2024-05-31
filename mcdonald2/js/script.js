// 아래와 같은 코드 window.onload = function(){}

window.addEventListener('load', function () {
    //gnb

    const header = document.querySelector('.header')
    const hMenu = document.querySelector('.hMenu .depth1 > li > a')
    const topSearch = document.querySelector('.topSearch')
    const srch = document.querySelector('.topSearch .srch')
    const close = document.querySelector('.topSearch .close')
    const aside = document.querySelector('.aside')
    const btnTop = document.querySelector('.btnTop')

    // hmenu에 마우스가 들어가면 , header에 open 클래스 적용
    hMenu.addEventListener('mouseenter', function () {
        header.classList.add('open')
    })

    // hmenu에 마우스가 떠나면 , header에 open 클래스 제거
    header.addEventListener('mouseleave', function () {
        header.classList.remove('open')
    })

    // srch를 클릭하면 , topSearch 에 open 클래스 적용
    srch.addEventListener('click', function () {
        topSearch.add('open')
    })

    // close를 클릭하면 , topSearch에 open 클래스 제거
    close.addEventListener('click', function () {
        topSearch.remove('open')
    })

    // windosw 스트롤되면
    this.window.addEventListener('scroll', function () {
        // html 문서를 수직으로 얼마나 스크롤 했는지 값을 구해서 변수에 담는다
        const docScrollTop = document.querySelector('html').scrollTop

        if (docScrollTop > 100) {
            aside.style.display = 'block'
            header.classList.add('fixed')
        } else {
            aside.style.display = 'none'
            header.classList.remove('fixed')
        }
        // console.log("html 문서를 수직으로 얼마나 스크롤 했는지" , docScrollTop)
        // console.log("윈도우를 수직으로 얼마나 스크롤했는지" , window.scrollY)
    })  // window 스크롤 끝부분

    // btnTop을 클릭하면 윈도우 맨 위로 가기 smooth 움직임
    btnTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    })
    var swiper = new Swiper(".mainSlide", {
        autoplay:{
            delay: 2500, // 시간 설정
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,   // 클릭할 수 있게 ㅅ러정
        },
    })
})  // window load 끝부분
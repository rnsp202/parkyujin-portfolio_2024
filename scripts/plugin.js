//--------------------------------------fullpage
$('#wrap').fullpage({
    scrollBar:true,
    scrollingSpeed:600,
    //nav
    // navigation:true,
    // navigationTooltips:['표지','소개','sns'],
    showActiveTooltip:false,
    // showActiveTooltip:true,
    // menu:'nav',
    // anchors:['cover','profile','sns'],
    // //fullpage(구) 제이쿼리 기능으로 애니메이션도 제이쿼리로 연결해야한다!!
    // onLeave:function(index, nextIndex, direction){
    //     console.log(index, nextIndex, direction)
    //     if(index==2){
    //         // $('.s3 h1').css('color','lightblue')
    //         $('.s3 h1').addClass('ani')
    //     }
    // }
})

//sns swiper
const snsS = new Swiper('.sns .swiper',{
    slidesPerView:2, //한번에 보이는 슬라이드 수(모바일 기본)
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},
    loop:true,
    speed:9000,
    freemode:true,
    //반응형 슬라이드 수
    breakpoints:{
        800:{slidesPerView:3,},//800이상일때
        1200:{slidesPerView:4,},//1200이상일때
    }
})

//detail swiper
const detailS = new Swiper('.detail .swiper',{
    slidesPerView:3, //한번에 보이는 슬라이드 수
    spaceBetween:80, //슬라이드 사이 여백
    autoplay:{delay:2000,},
    loop:true,
    //반응형 슬라이드 수
})

//detail swiper
const card1S = new Swiper('.cardNews01 .swiper',{
    slidesPerView:1, //한번에 보이는 슬라이드 수
    spaceBetween:1, //슬라이드 사이 여백
    autoplay:{delay:2000,},
    loop:true,
    speed:1000,
    freemode:true,
    navigation:{
        nextEl:'.cardNews01 .swiper-button-next',
        prevEl:'.cardNews01 .swiper-button-prev',
    },
    //반응형 슬라이드 수
})
const card2S = new Swiper('.cardNews02 .swiper',{
    slidesPerView:1, //한번에 보이는 슬라이드 수
    spaceBetween:1, //슬라이드 사이 여백
    autoplay:{delay:2000,},
    loop:true,
    speed:1000,
    freemode:true,
    navigation:{
        nextEl:'.cardNews02 .swiper-button-next',
        prevEl:'.cardNews02 .swiper-button-prev',
    },
    //반응형 슬라이드 수
})
const ectS = new Swiper('.picture .swiper',{
    slidesPerView:2, //한번에 보이는 슬라이드 수
    spaceBetween:20, //슬라이드 사이 여백
    autoplay:{delay:1,desableOnInteration:true,},
    loop:true,
    speed:14000,
    freemode:true,
    navigation:{
        nextEl:'.cardNews02 .swiper-button-next',
        prevEl:'.cardNews02 .swiper-button-prev',
    },
    //반응형 슬라이드 수
})

// //detail popup
// //1. 팝업 숨기기(big_bg)
// //2. swiper img 클릭 시
// //3. 팝업 보이기
// const big_bg = document.querySelector('.big_bg')
// const detail_img = document.querySelectorAll('.detail .swiper-slide img')
// const big_img = document.querySelector('.big_bg img')
// console.log(big_bg, detail_img, big_img)
// big_bg.style.display = 'none'

// for(let detail of detail_img){//6개 이미지 반복문 접근
//     detail.addEventListener('click',(e)=>{
//         //클릭한 대상에 a 있을 시 스크롤 맨위로 올려버리는 기능 막기
//         e.preventDefault()
//         //큰이미지 부모 보이기
//         big_bg.style.display = 'block'
//         //팝업 실행 시 body 스크롤 막기
//         document.body.style.overflow = 'hidden'
//         //클릭한 이미지의 경로(src)를 큰 이미지 팝업의 src로 대입하기
//         console.log(detail.src)
//         big_img.src = detail.src
//         //이전 팝업에서 내린 스크롤을 기억하지 않도록 항상 스크롤 위로 올리기
//         big_bg.children[0].scrollTo(0,0)
//     })
// }

// //팝업 출력 시 팝업닫기
// big_bg.addEventListener('click',()=>{
//     big_bg.style.display = 'none'
//     document.body.style.overflow = ''
// })

$(document).ready(function() {
    // fullPage.js 초기화
    $('#fullpage').fullpage({
        // 기타 옵션들...
    });

    const big_bg = document.querySelector('.big_bg');
    const detail_img = document.querySelectorAll('.detail .swiper-slide img');
    const big_img = document.querySelector('.big_bg img');

    big_bg.style.display = 'none';
    big_bg.style.overflow = 'auto'; // 팝업 내부 스크롤 활성화

    for (let detail of detail_img) {
        detail.addEventListener('click', (e) => {
            e.preventDefault();
            big_bg.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // HTML overflow도 설정
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
            big_img.src = detail.src;
            big_bg.children[0].scrollTo(0, 0);
        });
    }

    big_bg.addEventListener('click', () => {
        big_bg.style.display = 'none';
        document.body.style.overflow = '';
        document.documentElement.style.overflow = ''; // HTML overflow도 원래대로
        $.fn.fullpage.setAllowScrolling(true);
        $.fn.fullpage.setKeyboardScrolling(true);
    });
});

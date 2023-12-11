/**
 * Swiper Slide 설정 객체 선언
 * @type {Swiper}
 */
let swiper;


/**
 * 변수에 현재 화면 너비를 저장
 * @type {number}
 */
let windowWidth = $(window).width();


/**
 * 초기 반응형 Swiper Slide 설정을 위해 함수 호출
 */
responsiveSwiper();


/**
 * 함수: 스크롤 위치에 따른 Swiper Slide 재생 동작
 */
function scrollSwiper() {
    let scrollValue = $(window).scrollTop();

    // 현재 스크롤 위치 확인
    console.log(scrollValue);

    // 현재 스크롤 위치가 1300 이상일 때 재생 시작
    if (scrollValue >= 1300) {
        swiper.autoplay.start();
    } else {
        swiper.autoplay.stop();
    }
}


/**
 * 함수: Swiper Slide 초기화
 * @param {string} effect - 슬라이드 전환 효과
 * @param {string} direction - 슬라이드 이동 방향
 * @param {number} slidesPerView - 한 번에 표시되는 슬라이드 수
 */
function initSwiper(effect, direction, slidesPerView) {
    // Swiper Slide 객체가 이미 존재하는 경우 파괴
    if (typeof swiper === "object") {
        swiper.destroy();
    }

    // 새로운 Swiper Slide 객체 생성
    swiper = new Swiper(".swiper-container", {
        grabCursor: true,
        centeredSlides: true,
        loop: false,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        effect: effect,
        direction: direction,
        slidesPerView: slidesPerView,

        coverflowEffect: {
            shadow: false,
            slideShadows: false,
        },
    });
}



/**
 * 함수: 화면 너비 변경에 따른 반응형 Swiper Slide
 */
function resizeSwiper() {
    windowWidth = $(window).width();
    responsiveSwiper();
}


/**
 * 함수: 반응형 Swiper Slide 설정
 */
function responsiveSwiper() {
    if (windowWidth >= 1025) {
        // PC 버전
        initSwiper("coverflow", "horizontal", 3);
    } else {
        // 모바일 버전
        initSwiper("coverflow", "horizontal", 1);
    }
}



/**
 * 이하 이벤트 핸들러 등록
 */
// 스크롤 위치에 따른 Swiper Slide 재생 동작 함수를 등록
$(window).scroll(scrollSwiper);

// 화면 너비 변경에 따른 반응형 Swiper Slide 함수를 등록
$(window).resize(resizeSwiper);
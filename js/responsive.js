/**
 * 함수: 페이지 상단으로 스크롤
 */
function scrollToTop() {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        400
    );
}

/**
 * 함수: 반응형 메뉴를 열기
 */
function r_openMenu() {
    $(".responsive_menu").css("right", "0");
    $(".overlay").show();
}

/**
 * 힘수: 반응형 메뉴를 닫기
 */
function r_closeMenu() {
    $(".responsive_menu").css("right", "-100%");
    $(".overlay").hide();
}

/**
 * 함수: 반응형 서브메뉴 아코디언 동작
 */
function r_sub() {
    $(".r_submenu").not($(this).siblings(".r_submenu")).slideUp();
    $(this).siblings(".r_submenu").stop().slideDown(500);
}

/**
 * 이하 이벤트 핸들러 등록
 */

// 홈 버튼 클릭 시 페이지 상단으로 스크롤
$("#goHomeBtn").on("click", scrollToTop);

// 반응형 메뉴 열기
$("#menuShowBtn").on("click", r_openMenu);

// 반응형 메뉴 닫기
$("#menuHideBtn, .overlay").on("click", r_closeMenu);

// 반응형 서브메뉴 아코디언 동작
$(".r_menuTitle").on("click", r_sub);

/**
 * 함수: 페이지 새로고침
 */
function reloadPage() {
    location.reload();
}

/**
 * 함수: 메뉴 열기
 */
function openMenu() {

    // 서브메뉴와 배경을 슬라이드 다운하여 표시
    $(".submenu, .submenu_bg").slideDown(500);

    // 서브메뉴의 높이값을 가져와 정수형으로 변환
    const SUB_HEIGHT = parseInt($(".submenu").css("height").split("px")[0]);

    // 배경 높이(여백)를 동적으로 설정하여 서브메뉴와 배경을 함께 표시
    $(".submenu_bg").css("height", 25 + SUB_HEIGHT + "%");

    // 바탕에 오버레이(투명) 표시
    $(".overlay").show();
}

/**
 * 함수: 메뉴 닫기
 */
function closeMenu() {
    // 서브메뉴와 배경을 슬라이드 업하여 숨김
    $(".submenu, .submenu_bg").slideUp(1000);

    // 오버레이 숨김
    $(".overlay").hide();
}



/**
 * 이하 이벤트 핸들러 등록
 */

// 로고 클릭 시 페이지 새로고침
$(".logo_area img").on("click", reloadPage);

// 함수: 메뉴 그룹 클릭 시 메뉴 열림
$(".menuGroup").on("click", openMenu);

// 서브메뉴 접기 버튼 또는 오버레이 클릭 시 메뉴 닫힘
$("#subHideBtn, .overlay").on("click", closeMenu);

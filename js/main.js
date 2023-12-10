/**
 * 함수: 게시판 post(게시물) 제목에 마우스 진입 시 title 속성을 추가
 */
function postAddTitle() {
    // 현재 요소에 title 속성을 추가하고 해당 내용으로 설정
    $(this).attr("title", $(this).html());
}


/**
 * 함수: 배너 색상을 반전
 */
function reverseBannerColor() {
    // 현재 요소의 배경색을 검은색으로, 글자 색상을 data-color 속성에 저장된 값으로 변경
    $(this).css("background-color", "#000000");
    $(this).css("color", $(this).attr("data-color"));
}


/**
 * 함수: 배너 색상을 리셋
 */
function resetBannerColor() {
    // 현재 요소의 배경색을 data-color 속성에 저장된 값으로, 글자 색상을 검은색으로 변경
    $(this).css("background-color", $(this).attr("data-color"));
    $(this).css("color", "#000000");
}


/**
 * 함수: PC 버전 배너 이미지 팝업을 열기
 */
function openImagePopup() {
    if (window.innerWidth >= 1025) {
        // 오버레이의 배경색을 반투명 검은색으로 설정하고 표시
        $(".overlay").css("background-color", "rgba(0, 0, 0, 0.6)");
        $(".overlay").show();

        // 현재 요소의 배경 이미지를 가져와 팝업 이미지로 설정하고 표시
        let backgroundImage = $(this).css("background-image");
        $("#popup_banner_img").css("background-image", backgroundImage);
        $("#popup_banner_img").fadeIn();
    }
}


/**
 * 함수: PC 버전 배너 이미지 팝업을 닫기
 */
function closeImagePopup() {
    if (window.innerWidth >= 1025) {
        // 팝업 이미지와 오버레이를 숨김
        $("#popup_banner_img").fadeOut();
        $(".overlay").hide();
    }
}



/**
 * 이하 이벤트 핸들러 등록
 */
// 게시판 post(게시물) 제목에 마우스 진입 시 title 속성 추가
$(".post li a").on("mouseenter", postAddTitle);

// 배너에 마우스 진입 시 색상 반전, 마우스 이탈 시 색상 리셋
$("[class^=banner_typo]").on("mouseenter", reverseBannerColor);
$("[class^=banner_typo]").on("mouseleave", resetBannerColor);

// PC 버전 배너 이미지 클릭 시 팝업 열기
$('[class^="banner_img"]').on("click", openImagePopup);

// 팝업 이미지 또는 오버레이 클릭 시 팝업 닫기
$("#popup_banner_img, .overlay").on("click", closeImagePopup);

// AOS(Animate On Scroll) 라이브러리 초기화
AOS.init();


/**
 * 임시 링크 클릭 시 이벤트 핸들러
 * @param {Event} event - 클릭 이벤트 객체
 */
$('a[href="#"]').on("click", function (event) {
    // 기본 링크 동작을 막음
    event.preventDefault();
});

// JSDoc 주석
/**
 * @author Esantomi <pilinnasa@gmail.com>
 */


// 우측 버튼 비활성
$(document).bind("contextmenu", function (e) {
    return false;
});


// 낙화 효과
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);


// Parallax 효과
const images = document.getElementsByClassName('couple-drawing');
new simpleParallax(images, {
    delay: 1.8,
    transition: "cubic-bezier(0,0,0,1)",
    orientation: "up",
    scale: 1.1
});


// 음악 토글
var player = document.getElementById('player');
     
function togglePlayPause() {
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}


// // fslightbox를 활용한 갤러리 기능 (참고: "https://codepen.io/inpaSkyrim/pen/yLxBYNL")
// function wrap(el) {
//     const wrappingElement = document.createElement('a');
//     wrappingElement.href = el.src;
//     wrappingElement.setAttribute('data-fslightbox', 'gallery');
    
//     // class="gallery" 내부 elements만 가져오기
//     if (el.closest('.gallery')) {
//         el.parentElement.insertBefore(wrappingElement, el);
//         wrappingElement.appendChild(el);
//     }
// }
// document.querySelectorAll('img').forEach(el => {
//     wrap(el);
// })
// // To incorporate new galleries or updates of existing ones (through adding or modifying <a> elements)
// refreshFsLightbox();


// 선물 예약 메시지
$(document).ready(function () {
    $(".gift-send").click(function () {
        $("#gift-name").text($(this).data("name"));
    })

    $("#reserveGiftButton").click(function () {
        let name = $("#sender-name").val();
        let message = $("#sender-message").val();
        $("#reserveGiftButton").text("전송 중...");
        $("#reserveGiftButton").prop("disabled", true);

        emailjs.init("laZD2hrfI3vsCPBU3");
        emailjs.send("wedding-mail", "gift_send", {
            name: name,
            gift: $("#gift-name").text(),
            message: message
        }).then(function (response) {
            $('#giftMailModal').modal('hide');
            alert(name + " 님의 메시지가 성공적으로 전송되었습니다.");

            $("#reserveGiftButton").text("예약 완료");
            $("#sender-name").val('');
            $("#sender-message").val('');
            $("#reserveGiftButton").prop("disabled", true);
        }, function (err) {
            console.error("메시지 전송이 실패했습니다.", err);
            alert("메시지 전송이 실패했습니다. 다시 시도해 주세요.");
        });
    })
})


// console log 출력
console.log('우리 결혼합니다.');
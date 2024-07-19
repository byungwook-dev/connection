// 좋아요 버튼 구현
var btn = document.getElementById("like")

btn.addEventListener('click',function(){
    btn.classList.toggle('active')
})

// 게시글 메뉴 버튼 눌렀을때 목록 나오게하기
document.getElementById('leaguePost-showListButton').addEventListener('click', function() {
    var list = document.getElementById('leaguePost-list');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});
// 댓글 메뉴 버튼 눌렀을때 목록 나오게하기
document.getElementById('leaguePost-commentButton').addEventListener('click', function() {
    var list = document.getElementById('leaguePost-commentHidden');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});
document.getElementById('leaguePost-commentButton2').addEventListener('click', function() {
    var list = document.getElementById('leaguePost-commentHidden2');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});
document.getElementById('leaguePost-commentButton3').addEventListener('click', function() {
    var list = document.getElementById('leaguePost-commentHidden3');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
});

// 헤더
$(".header-menu").on("click", checkMenuOn);

let $headerCommunityHiddenMenu = $(".header-communityHiddenMenu");

function checkMenuOn() {
    // 현재 display 속성을 가져와서 "none"인지 확인
    if ($headerCommunityHiddenMenu.css("display") === "none") {
        $headerCommunityHiddenMenu.css("display", "block");
    } else {
        $headerCommunityHiddenMenu.css("display", "none");
    }
};
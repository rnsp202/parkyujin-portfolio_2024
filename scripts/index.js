const pst = $('nav');
const btn = $('nav a');
const bg = $('.section');

btn.each(function(i) {
    $(this).on('click', function() {
        btn.removeClass('on').addClass('off');
        $(this).addClass('on');
    });
});

const line = $('#deco3 img');

line.hide();
line.eq(0).show();
$(window).on('scroll', function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var windowBottom = windowTop + windowHeight;
    bg.each(function(index) {
        var bgTop = $(this).offset().top;
        var bgBottom = bgTop + $(this).outerHeight();

        // 화면 중앙 근처 범위 설정 (예: 중앙에서 100px 범위)
        var threshold = 100;
        var centralTop = windowTop + (windowHeight / 2) - threshold;
        var centralBottom = windowTop + (windowHeight / 2) + threshold;

        if (bgBottom > centralTop && bgTop < centralBottom) {
            line.eq(index).show();  // 특정 요소 나타내기
        } else {
            line.eq(index).hide();  // 특정 요소 숨기기
        }
    });
});

$(window).on('scroll', function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var windowCenterTop = windowTop + (windowHeight / 2) - 50; // 중앙 근처 범위 설정 (상단)
    var windowCenterBottom = windowTop + (windowHeight / 2) + 50; // 중앙 근처 범위 설정 (하단)

    // var bg2 = $('.bg2');
    // var decoImg = $('#deco3 img');

    bg.each(function(index) {
        var bgTop = $(this).offset().top;
        var bgBottom = bgTop + $(this).outerHeight();

        // 첫번째 배경 요소는 클래스가 들어갈 요소가 없음
        if (index === 0) return;

        // 특정 배경 요소에 따라 클래스 추가/제거
        var imgIndex;
        if (index >= 1 && index <= 5) {
            imgIndex = index - 1;
        } else if (index === 6) {
            imgIndex = 5;
        } else if (index === 7 || index === 8) {
            imgIndex = 6;
        } else if (index >= 9) {
            imgIndex = 7;
        }

        if (index <= 5 || index === 6) {
            if (bgBottom > windowCenterTop && bgTop < windowCenterBottom) {
                btn.eq(imgIndex).addClass('on');  // 특정 클래스 추가
            } else {
                btn.eq(imgIndex).removeClass('on');  // 특정 클래스 제거
                btn.eq(imgIndex).addClass('off');
            }
        } else if (index === 7 || index === 8) {
            var bgTop7 = bg.eq(7).offset().top;
            var bgBottom7 = bgTop7 + bg.eq(7).outerHeight();
            var bgTop8 = bg.eq(8).offset().top;
            var bgBottom8 = bgTop8 + bg.eq(8).outerHeight();

            if ((bgBottom7 > windowCenterTop && bgTop7 < windowCenterBottom) ||
                (bgBottom8 > windowCenterTop && bgTop8 < windowCenterBottom)) {
                btn.eq(imgIndex).addClass('on');  // 특정 클래스 추가
            } else {
                btn.eq(imgIndex).removeClass('on');  // 특정 클래스 제거
                btn.eq(imgIndex).addClass('off');
            }
        } else if (index >= 9) {
            var bgTop9 = bg.eq(9).offset().top;
            var bgBottom9 = bgTop9 + bg.eq(9).outerHeight();

            if (bgBottom9 > windowCenterTop && bgTop9 < windowCenterBottom) {
                btn.eq(imgIndex).addClass('on');  // 특정 클래스 추가
            } else {
                btn.eq(imgIndex).removeClass('on');  // 특정 클래스 제거
                btn.eq(imgIndex).addClass('off');
            }
        }
        // if ((index < 7 && bgBottom > windowCenterTop && bgTop < windowCenterBottom) ||
        //     (index === 7 && bgBottom > windowCenterTop && bgTop < windowCenterBottom) ||
        //     (index === 8 && bgBottom > windowCenterTop && bgTop < windowCenterBottom) ||
        //     (index === 9 && bgBottom > windowCenterTop && bgTop < windowCenterBottom)) {
        //     btn.eq(imgIndex).addClass('on');  // 특정 클래스 추가
        // } else {
        //     btn.eq(imgIndex).removeClass('on');  // 특정 클래스 제거
        //     btn.eq(imgIndex).addClass('off');
        // }
    });
});
$(document).ready(function() {
    // YouTube IFrame API를 비동기로 로드
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var players = [];

    // onYouTubeIframeAPIReady 함수는 YouTube API가 준비되면 호출됨
    window.onYouTubeIframeAPIReady = function() {
        $('.youtube-video').each(function(index) {
            var player = new YT.Player(this, {
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
            players.push(player);
        });
    };

    // Intersection Observer를 설정
    function onPlayerReady(event) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    // 요소가 뷰포트에 들어왔을 때 비디오 재생
                    event.target.playVideo();
                } else {
                    // 요소가 뷰포트를 벗어났을 때 비디오 일시 중지
                    event.target.pauseVideo();
                }
            });
        });

        observer.observe(event.target.getIframe());
    }

    // 비디오 상태가 변경될 때 호출되는 함수
    function onPlayerStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
            // 비디오가 끝났을 때 다시 재생
            event.target.playVideo();
        }
    }
});

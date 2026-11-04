document.addEventListener('DOMContentLoaded', function () {
    // 헤더 스크롤 제어 효과
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#5c0000'; // 스크롤 시 한 단계 어두운 레드
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        } else {
            header.style.backgroundColor = '#8b0000';
            header.style.boxShadow = 'none';
        }
    });

    // 메뉴 카드 호버 인터랙션 보완
    const menuItems = document.querySelectorAll('.menu_list li');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.borderColor = '#8b0000';
        });
        item.addEventListener('mouseleave', () => {
            item.style.borderColor = 'transparent';
        });
    });
});

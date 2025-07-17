// CV 페이지 탭 전환 기능
window.showTab = function(tabName) {
    // 모든 탭 콘텐츠 숨기기
    var contents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
        contents[i].classList.remove('active');
    }
    
    // 모든 탭 버튼에서 active 클래스 제거
    var buttons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    
    // 선택된 탭 보이기
    var selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = 'block';
        selectedTab.classList.add('active');
    }
    
    // 클릭된 버튼에 active 클래스 추가
    event.target.classList.add('active');
};

// 페이지 로드 시 초기 설정
window.onload = function() {
    // 기본 탭이 제대로 표시되도록 설정
    var resumeTab = document.getElementById('resume');
    if (resumeTab) {
        resumeTab.style.display = 'block';
        resumeTab.classList.add('active');
    }
}; 
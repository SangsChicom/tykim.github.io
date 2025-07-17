---
# title: "CV & Resume"
hideMeta: true
hideTitle: true
---

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button active" onclick="openTab(event, 'resume')">Resume</button>
    <button class="tab-button" onclick="openTab(event, 'cv')">CV</button>
  </div>

  <div id="resume" class="tab-content active">
    <div class="pdf-container">
      <iframe src="/resume.pdf" class="pdf-iframe"></iframe>
    </div>
  </div>

  <div id="cv" class="tab-content">
    <div class="pdf-container">
      <iframe src="/cv.pdf" class="pdf-iframe"></iframe>
    </div>
  </div>
</div>

<script>
// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    // 탭 기능 함수
    window.openTab = function(evt, tabName) {
        try {
            // 모든 탭 콘텐츠를 숨김
            var tabcontent = document.getElementsByClassName("tab-content");
            for (var i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // 모든 탭 버튼에서 active 클래스 제거
            var tablinks = document.getElementsByClassName("tab-button");
            for (var i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            // 클릭된 탭을 보여주고 버튼에 active 클래스 추가
            var targetTab = document.getElementById(tabName);
            if (targetTab) {
                targetTab.style.display = "block";
            }
            
            if (evt && evt.currentTarget) {
                evt.currentTarget.className += " active";
            }
        } catch (error) {
            console.error('Tab switching error:', error);
        }
    };

    // 초기 탭 설정
    var defaultTab = document.getElementById('resume');
    if (defaultTab) {
        defaultTab.style.display = "block";
    }
});
</script>

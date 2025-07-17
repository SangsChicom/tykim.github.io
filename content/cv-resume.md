---
# title: "CV & Resume"
hideMeta: true
hideTitle: true
---

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button active" onclick="openTab(event, 'resume')">Resume</button>
    <button class="tab-button " onclick="openTab(event, 'cv')">CV</button>
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
function openTab(evt, tabName) {
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
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}
</script>

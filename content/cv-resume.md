---
# title: "CV & Resume"
hideMeta: true
hideTitle: true
---

<style>
/* 탭 스타일 */
.tab-container {
    margin: 20px 0;
    max-width: 100%;
    padding: 0;
}

.tab-buttons {
    display: flex;
    border-bottom: 2px solid #ddd;
    margin-bottom: 20px;
    justify-content: center;
}

.tab-button {
    background: none;
    border: none;
    padding: 12px 24px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    border-bottom: 3px solid transparent;
    transition: all 0.3s ease;
}

.tab-button:hover {
    color: #0066cc;
    background-color: #f8f9fa;
}

.tab-button.active {
    color: #0066cc;
    border-bottom-color: #0066cc;
    background-color: #f8f9fa;
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.pdf-container {
    margin-top: 20px;
    width: 100%;
    max-width: 100%;
    padding: 0;
}

.pdf-iframe {
    width: 100%;
    height: 800px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 0;
}

/* 라디오 버튼을 사용한 탭 구현 */
.tab-radio {
    display: none;
}

.tab-radio:checked + .tab-button {
    color: #0066cc;
    border-bottom-color: #0066cc;
    background-color: #f8f9fa;
}

/* 각 라디오 버튼이 해당하는 탭 콘텐츠만 제어 */
#tab-resume:checked ~ .tab-content:first-of-type {
    display: block;
}

#tab-cv:checked ~ .tab-content:last-of-type {
    display: block;
}

/* 기본적으로 첫 번째 탭이 보이도록 */
#tab-resume:checked ~ .tab-content:first-of-type {
    display: block;
}
</style>

<div class="tab-container">
  <input type="radio" name="tab" id="tab-resume" class="tab-radio" checked>
  <label for="tab-resume" class="tab-button">Resume</label>
  
  <input type="radio" name="tab" id="tab-cv" class="tab-radio">
  <label for="tab-cv" class="tab-button">CV</label>
  
  <div class="tab-content">
    <div class="pdf-container">
      <iframe src="/resume.pdf" class="pdf-iframe" type="application/pdf" allowfullscreen></iframe>
    </div>
  </div>
  
  <div class="tab-content">
    <div class="pdf-container">
      <iframe src="/cv.pdf" class="pdf-iframe" type="application/pdf" allowfullscreen></iframe>
    </div>
  </div>
</div>

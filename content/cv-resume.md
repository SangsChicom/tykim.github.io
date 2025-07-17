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
</style>

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button active" onclick="showTab('resume')">Resume</button>
    <button class="tab-button" onclick="showTab('cv')">CV</button>
  </div>
  
  <div id="resume" class="tab-content active">
    <div class="pdf-container">
      <iframe src="/resume.pdf" class="pdf-iframe" type="application/pdf" allowfullscreen></iframe>
    </div>
  </div>
  
  <div id="cv" class="tab-content">
    <div class="pdf-container">
      <iframe src="/cv.pdf" class="pdf-iframe" type="application/pdf" allowfullscreen></iframe>
    </div>
  </div>
</div>

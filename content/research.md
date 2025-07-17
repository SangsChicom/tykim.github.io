---
title: "Research Projects"
date: 2024-01-01
draft: false
hideMeta: true
hideTitle: false
---


<!--

<style>
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
  flex-wrap: wrap;
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
  margin: 0 5px;
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

.project-item {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
}

.project-title {
  font-size: 1.3em;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.project-description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.project-links {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.project-link {
  display: inline-block;
  padding: 8px 16px;
  background-color: #0066cc;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #0052a3;
  color: white;
  text-decoration: none;
}

.project-image {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin: 15px 0;
}
</style>

<div class="tab-container">
  <div class="tab-buttons">
    <button class="tab-button active" onclick="openTab(event, 'ml')">Machine Learning</button>
    <button class="tab-button" onclick="openTab(event, 'nlp')">NLP</button>
    <button class="tab-button" onclick="openTab(event, 'cv')">Computer Vision</button>
    <button class="tab-button" onclick="openTab(event, 'robotics')">Robotics</button>
  </div>

  <div id="ml" class="tab-content active">
    <div class="project-item">
      <div class="project-title">Deep Learning for Time Series Analysis</div>
      <div class="project-description">
        연구 설명: 시계열 데이터 분석을 위한 딥러닝 모델 개발. LSTM과 Transformer 아키텍처를 활용하여 예측 성능을 향상시켰습니다.
      </div>
      <img src="/images/ml-project.png" alt="ML Project" class="project-image">
      <div class="project-links">
        <a href="/papers/ml-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/ml-project" class="project-link">💻 Code</a>
        <a href="/presentations/ml-presentation.pdf" class="project-link">📊 Presentation</a>
      </div>
    </div>

    <div class="project-item">
      <div class="project-title">Reinforcement Learning for Autonomous Systems</div>
      <div class="project-description">
        연구 설명: 자율 시스템을 위한 강화학습 알고리즘 개발. Q-learning과 Policy Gradient 방법을 결합하여 효율적인 의사결정 시스템을 구축했습니다.
      </div>
      <div class="project-links">
        <a href="/papers/rl-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/rl-project" class="project-link">💻 Code</a>
        <a href="/conferences/icml-2024" class="project-link">🎯 Conference</a>
      </div>
    </div>
  </div>

  <div id="nlp" class="tab-content">
    <div class="project-item">
      <div class="project-title">Transformer-based Text Classification</div>
      <div class="project-description">
        연구 설명: BERT와 RoBERTa를 활용한 텍스트 분류 시스템 개발. 한국어 텍스트 데이터에 특화된 모델을 구축했습니다.
      </div>
      <img src="/images/nlp-project.png" alt="NLP Project" class="project-image">
      <div class="project-links">
        <a href="/papers/nlp-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/nlp-project" class="project-link">💻 Code</a>
        <a href="/datasets/korean-text" class="project-link">📊 Dataset</a>
      </div>
    </div>

    <div class="project-item">
      <div class="project-title">Multilingual Sentiment Analysis</div>
      <div class="project-description">
        연구 설명: 다국어 감정 분석 모델 개발. 영어, 한국어, 중국어 텍스트를 동시에 처리할 수 있는 통합 모델을 개발했습니다.
      </div>
      <div class="project-links">
        <a href="/papers/sentiment-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/sentiment-project" class="project-link">💻 Code</a>
        <a href="/conferences/acl-2024" class="project-link">🎯 Conference</a>
      </div>
    </div>
  </div>

  <div id="cv" class="tab-content">
    <div class="project-item">
      <div class="project-title">Object Detection with YOLO</div>
      <div class="project-description">
        연구 설명: YOLO 아키텍처를 활용한 실시간 객체 탐지 시스템 개발. 자동차, 보행자, 신호등 등을 정확하게 탐지합니다.
      </div>
      <img src="/images/cv-project.png" alt="CV Project" class="project-image">
      <div class="project-links">
        <a href="/papers/cv-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/cv-project" class="project-link">💻 Code</a>
        <a href="/datasets/traffic-detection" class="project-link">📊 Dataset</a>
      </div>
    </div>

    <div class="project-item">
      <div class="project-title">Image Segmentation for Medical Imaging</div>
      <div class="project-description">
        연구 설명: 의료 영상 분할을 위한 U-Net 기반 모델 개발. MRI 영상에서 종양 영역을 정확하게 분할합니다.
      </div>
      <div class="project-links">
        <a href="/papers/medical-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/medical-project" class="project-link">💻 Code</a>
        <a href="/conferences/miccai-2024" class="project-link">🎯 Conference</a>
      </div>
    </div>
  </div>

  <div id="robotics" class="tab-content">
    <div class="project-item">
      <div class="project-title">Autonomous Navigation System</div>
      <div class="project-description">
        연구 설명: 자율주행 로봇을 위한 경로 계획 및 장애물 회피 시스템 개발. SLAM 알고리즘을 활용하여 실시간 맵핑을 수행합니다.
      </div>
      <img src="/images/robotics-project.png" alt="Robotics Project" class="project-image">
      <div class="project-links">
        <a href="/papers/robotics-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/robotics-project" class="project-link">💻 Code</a>
        <a href="/videos/robot-demo.mp4" class="project-link">🎥 Demo</a>
      </div>
    </div>

    <div class="project-item">
      <div class="project-title">Human-Robot Interaction</div>
      <div class="project-description">
        연구 설명: 인간-로봇 상호작용을 위한 제스처 인식 시스템 개발. 손동작과 표정을 인식하여 자연스러운 상호작용을 구현했습니다.
      </div>
      <div class="project-links">
        <a href="/papers/hri-paper.pdf" class="project-link">📄 Paper</a>
        <a href="https://github.com/username/hri-project" class="project-link">💻 Code</a>
        <a href="/conferences/icra-2024" class="project-link">🎯 Conference</a>
      </div>
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
</script>  -->
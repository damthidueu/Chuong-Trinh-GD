const stagesData = [
    { code: "IPA", duration: "162 hours", level: "CAMBRIDGE STARTERS" },
    { code: "IPB", duration: "192 hours", level: "CAMBRIDGE ENGLISH: PET" },
    { code: "IPC", duration: "220 hours", level: "CAMBRIDGE ENGLISH: FCE" },
    { code: "IPD", duration: "250 hours", level: "CAMBRIDGE ENGLISH: CAE" },
    { code: "IPE", duration: "280 hours", level: "CAMBRIDGE ENGLISH: CPE" },
    { code: "IPF", duration: "310 hours", level: "CAMBRIDGE ENGLISH: Proficiency" },
  ];
  
  const stagesContainer = document.querySelector('.stages-container');
  
  stagesData.forEach(stageData => {
    const stageElement = createStageElement(stageData);
    stagesContainer.appendChild(stageElement);
  });
  
  function createStageElement(stageData) {
    const stage = document.createElement('div');
    stage.classList.add('stage');
  
    const stageBox = document.createElement('div');
    stageBox.classList.add('stage-box');
  
    const stageCode = document.createElement('span');
    stageCode.classList.add('stage-code');
    stageCode.textContent = stageData.code;
  
    const stageDuration = document.createElement('span');
    stageDuration.classList.add('stage-duration');
    stageDuration.textContent = stageData.duration;
  
    const stageNumber = document.createElement('span');
    stageNumber.classList.add('stage-number');
    stageNumber.textContent = stageData.index + 1; //
  }
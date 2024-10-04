


//只能上傳三支檔案
const uploadContainer = document.querySelector('.upload-container');
const duplicateButton = document.querySelector('.btn-duplicateUploadFile');
const template = document.querySelector('.ModaleachUploadFile'); // 模板元素

// 增加一組檔案上傳區塊
duplicateButton.addEventListener('click', function () {
  const uploadFiles = document.querySelectorAll('.ModaleachUploadFile');

  if (uploadFiles.length < 3) {
    const newUpload = template.cloneNode(true); // 複製模板
    const fileInputs = newUpload.querySelectorAll('input[type="file"]');
    fileInputs.forEach(input => {
      input.value = ''; // 確保每次增加的檔案上傳區塊 input 值是空的
    });
    uploadContainer.appendChild(newUpload);

    // 每次增加區塊後，重新綁定取消按鈕事件
    updateCancelButtons();
  }

  // 控制增加按鈕的顯示與隱藏
  checkUploadLimit();
});

// 移除檔案上傳區塊
function updateCancelButtons() {
  const cancelButtons = document.querySelectorAll('.btn-cancelFile');

  cancelButtons.forEach(button => {
    button.addEventListener('click', function () {
      this.closest('.ModaleachUploadFile').remove();
      checkUploadLimit();
    });
  });
}

// 檢查當前的檔案區塊數量，決定是否顯示增加按鈕
function checkUploadLimit() {
  const uploadFiles = document.querySelectorAll('.ModaleachUploadFile');
  if (uploadFiles.length >= 3) {
    duplicateButton.style.display = 'none';
  } else {
    duplicateButton.style.display = 'inline-block';
  }
}

// 初始化取消按鈕事件
updateCancelButtons();
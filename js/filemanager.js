// 監聽所有的 a.fileManagerFunc 點擊事件
document.querySelectorAll('.fileManagerFunc').forEach(function (fileManagerFunc) {
  fileManagerFunc.addEventListener('click', function () {
    // 更改 filefuncIcon 的 innerHTML 在 "arrow_drop_down" 和 "menu" 之間切換
    const icon = this.querySelector('.filefuncIcon');
    // 切換 filefuncIcon 的 active 類別
    icon.classList.toggle('active');

    // 切換對應的 tr.fileManagerFuncTd 的 open 類別
    const nextRow = this.closest('tr').nextElementSibling;
    if (nextRow && nextRow.classList.contains('fileManagerFuncTd')) {
      nextRow.classList.toggle('open');
    }
  });
});

const selectAll = document.querySelector('#selectAll');

// 取得所有 .eachCheckBox 元素
const checkboxes = document.querySelectorAll('.eachCheckBox');

// 監聽 #selectAll 的變化
selectAll.addEventListener('change', function () {


  // 如果 #selectAll 被勾選，勾選所有 .eachCheckBox
  // 否則，取消勾選所有 .eachCheckBox
  checkboxes.forEach(function (checkbox) {

    checkbox.checked = selectAll.checked;
  });
});

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
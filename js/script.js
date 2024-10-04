
// 選取 #mask 元素
const mask = document.querySelector('#mask');

// 選取 #closeSidebar 的 checkbox
const closeSidebar = document.querySelector('input[type="checkbox"]#closeSidebar');

// selectAllc v2
document.querySelectorAll('[class*="selectAll["]').forEach(function (selectAll) {
  selectAll.addEventListener('click', function () {
    // 取得 `selectAll` 按鈕上的唯一標籤 [***]
    const identifier = Array.from(selectAll.classList).find(className =>
      className.startsWith('selectAll[')
    ).match(/\[(.*?)\]/)[1];

    // 使用反斜杠 `\` 轉義 `[` 和 `]`，組合選擇器
    const selector = `.eachCheckBox\\[${identifier}\\]`;

    // 選取所有帶有 eachCheckBox[***] 的元素
    const checkboxes = document.querySelectorAll(selector);

    // 切換 checked 狀態
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = !checkbox.checked;
    });
  });
});


// selectAllc v1
const selectAll = document.querySelector('#selectAll');
if (selectAll) {
  // 取得所有 .eachCheckBox 元素
  const checkboxes = document.querySelectorAll('.eachCheckBox');
  // 監聽 #selectAll 的變化
  selectAll.addEventListener('click', function () {
    // 如果 #selectAll 被勾選，勾選所有 .eachCheckBox
    // 否則，取消勾選所有 .eachCheckBox
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = selectAll.checked;
    });
  });
}

// 綁定 touchstart 事件
mask.addEventListener('touchstart', function () {
  // 取消 #closeSidebar 的勾選狀態
  closeSidebar.checked = false;
});

// 監聽所有的 a.fileManagerFunc 點擊事件
// 檢查網頁上是否有 .fileManagerFunc 元素
const fileManagerFuncElements = document.querySelectorAll('.fileManagerFunc');
if (fileManagerFuncElements.length > 0) {
  fileManagerFuncElements.forEach(function (fileManagerFunc) {
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
}

const masterMenus = document.querySelectorAll('.masterMenu');
// 為每個 .masterMenu 元素綁定點擊事件
masterMenus.forEach(menu => {
  menu.addEventListener('click', function () {
    // 移除其他 .masterMenu 元素的 active 類別
    masterMenus.forEach(item => item.classList.remove('active'));

    // 為當前點擊的元素添加 active 類別
    this.classList.add('active');
  });
});

// 等待效果
const btnSubmitData = document.querySelectorAll('.btn-submitData')
const spinnerCode = `<div class="spinner-border text-site-primary" role="status"><span class="visually-hidden">Loading...</span></div>`
btnSubmitData.forEach(button => {
  button.addEventListener('click', function () {
    button.classList.add("disabled")
    const modal = this.closest('.modal'); // 找到當前按鈕所在的 modal
    const modalMask = modal.querySelector('.modalMask'); // 找到 modal 裡的 modalMask
    // 移除 .d-none 顯示 loading mask
    modalMask.classList.remove('d-none');
    modalMask.innerHTML = spinnerCode;
    // 3 秒後自動關閉 modal 並隱藏 loading mask
    setTimeout(() => {
      modalMask.classList.add('d-none'); // 隱藏 loading mask
      const bootstrapModal = bootstrap.Modal.getInstance(modal); // 獲取 bootstrap modal 實例
      bootstrapModal.hide(); // 關閉 modal
      button.classList.remove("disabled")
    }, 3000);
  });
});
const btnSubmitDataOutside = document.querySelectorAll('.btn-submitData-outside')
const loadingMask = document.querySelector("#loadingMask")
if (btnSubmitDataOutside.length > 0) {
  btnSubmitDataOutside.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add("disabled")
      loadingMask.classList.remove('d-none');
      loadingMask.innerHTML = spinnerCode;
      setTimeout(() => {
        loadingMask.classList.add('d-none'); // 隱藏 loading mask
        button.classList.remove("disabled")
      }, 3000);
    })
  })
}



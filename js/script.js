
// 選取 #mask 元素
const mask = document.querySelector('#mask');

// 選取 #closeSidebar 的 checkbox
const closeSidebar = document.querySelector('input[type="checkbox"]#closeSidebar');

// 綁定 touchstart 事件
mask.addEventListener('touchstart', function () {
  // 取消 #closeSidebar 的勾選狀態
  closeSidebar.checked = false;
});



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
const spinnerCode=`<div class="spinner-border text-site-primary" role="status"><span class="visually-hidden">Loading...</span></div>`
btnSubmitData.forEach(button => {

  button.addEventListener('click', function () {
    button.classList.add("disabled")
    const modal = this.closest('.modal'); // 找到當前按鈕所在的 modal
    const modalMask = modal.querySelector('.modalMask'); // 找到 modal 裡的 modalMask
    // 移除 .d-none 顯示 loading mask
    modalMask.classList.remove('d-none');
    modalMask.innerHTML=spinnerCode;
    // 3 秒後自動關閉 modal 並隱藏 loading mask
    setTimeout(() => {
      modalMask.classList.add('d-none'); // 隱藏 loading mask
      const bootstrapModal = bootstrap.Modal.getInstance(modal); // 獲取 bootstrap modal 實例
      bootstrapModal.hide(); // 關閉 modal
      button.classList.remove("disabled")
    }, 3000);
  });
});

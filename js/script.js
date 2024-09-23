
// 選取 #mask 元素
const mask = document.querySelector('#mask');

// 選取 #closeSidebar 的 checkbox
const closeSidebar = document.querySelector('input[type="checkbox"]#closeSidebar');

// 綁定 touchstart 事件
mask.addEventListener('touchstart', function() {
    // 取消 #closeSidebar 的勾選狀態
    closeSidebar.checked = false;
});



const masterMenus = document.querySelectorAll('.masterMenu');
// 為每個 .masterMenu 元素綁定點擊事件
masterMenus.forEach(menu => {
  menu.addEventListener('click', function() {
    // 移除其他 .masterMenu 元素的 active 類別
    masterMenus.forEach(item => item.classList.remove('active'));
    
    // 為當前點擊的元素添加 active 類別
    this.classList.add('active');
  });
});
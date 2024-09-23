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
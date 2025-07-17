function setupSingleSelect() {
    // 為所有 checkbox 添加事件監聽器
    const checkboxes = document.querySelectorAll('.tree-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                // 取消所有其他 checkbox 的選取
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.checked = false;
                    }
                });

                // 為選取的項目添加特殊 class，用於 CSS 控制父層級展開
                this.classList.add('selected');

                // 移除其他項目的 selected class
                checkboxes.forEach(otherCheckbox => {
                    if (otherCheckbox !== this) {
                        otherCheckbox.classList.remove('selected');
                    }
                });

                // 獲取對應的 label 文字並設定到輸入欄位
                const labelElement = this.nextElementSibling;
                if (labelElement && labelElement.tagName === 'LABEL') {
                    const labelText = labelElement.textContent.trim();
                    
                    // 尋找 ModalMove 中的輸入欄位
                    const modalMoveInput = document.querySelector('#ModalMove input[type="text"]');
                    if (modalMoveInput) {
                        modalMoveInput.value = labelText;
                    }
                }
            } else {
                // 如果取消勾選，也移除 selected class
                this.classList.remove('selected');
                
                // 清空輸入欄位
                const modalMoveInput = document.querySelector('#ModalMove input[type="text"]');
                if (modalMoveInput) {
                    modalMoveInput.value = '';
                }
            }
        });
    });
}

// 頁面載入完成後設置單選行為
document.addEventListener('DOMContentLoaded', function() {
    setupSingleSelect();
});
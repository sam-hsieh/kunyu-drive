let idCounter = 0;

function createTreeHTML(node) {
    let html = '<ul>';
    function walk(node, isRoot = false) {
        let currentId = "tree-node-" + (idCounter++);

        if (node.children && node.children.length > 0) {
            // 如果是根節點，不需要 checkbox，直接顯示子層
            if (isRoot) {
                html += `<li>
                    <label>${node.label}</label>`;
                html += '<ul class="root-children">';
                node.children.forEach(child => {
                    walk(child);
                });
                html += '</ul>';
                html += '</li>';
            } else {
                html += `<li>
                    <input type="checkbox" id="${currentId}" class="tree-checkbox">
                    <label for="${currentId}">${node.label}</label>`;
                html += '<ul>';
                node.children.forEach(child => {
                    walk(child);
                });
                html += '</ul>';
                html += '</li>';
            }
        } else {
            // 即使沒有子項目，也用 label 包住保持一致性
            html += `<li>
                <input type="checkbox" id="${currentId}" class="tree-checkbox">
                <label for="${currentId}">${node.label}</label>
                </li>`;
        }
    }

    walk(node, true);
    html += '</ul>';
    return html;
}

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
            } else {
                // 如果取消勾選，也移除 selected class
                this.classList.remove('selected');
            }
        });
    });
}

// 載入外部 JSON
fetch('tree-data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('tree').innerHTML = createTreeHTML(data);
        setupSingleSelect(); // 設置單選行為
    })
    .catch(err => {
        document.getElementById('tree').innerHTML = '載入失敗：' + err;
    });

//btnAllPmsiSearch按下後，網頁內所有的input:checkbox.pmsi-search都checked
const btnAllPmsiSearch = document.querySelector("#btn-all-pmsi-search");
// 檢查網頁上是否存在 .btn-all-pmsi-search
if (btnAllPmsiSearch) {
  btnAllPmsiSearch.addEventListener("click", function () {
    // 找到網頁中所有的 input[type="checkbox"].pmsi-search
    const checkboxes = document.querySelectorAll('input[type="checkbox"].pmsi-search');

    // 檢查是否目前所有的 checkbox 都已經被選取
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    // 根據 allChecked 來切換狀態，若全選則取消全選，否則全選
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = !allChecked;
    });
  });
}

//btnAllPmsiCrd按下後，網頁內所有的input:checkbox.pmsi-search都checked
const btnAllPmsiCrd= document.querySelector("#btn-all-pmsi-crd");
// 檢查網頁上是否存在 .btn-all-pmsi-search
if (btnAllPmsiCrd) {
  btnAllPmsiCrd.addEventListener("click", function () {
    // 找到網頁中所有的 input[type="checkbox"].pmsi-search
    const checkboxes = document.querySelectorAll('input[type="checkbox"].pmsi-crd');

    // 檢查是否目前所有的 checkbox 都已經被選取
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    // 根據 allChecked 來切換狀態，若全選則取消全選，否則全選
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = !allChecked;
    });
  });
}

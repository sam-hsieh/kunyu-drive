const canvas = document.getElementById('gauge');
const ctx = canvas.getContext('2d');

// 從 canvas 元素的 percentage 屬性獲取最終的目標百分比
const targetPercentage = parseInt(canvas.getAttribute('percentage'), 10) / 100;

// 動態調整畫布尺寸
function resizeCanvas() {
    // 設定畫布寬高，並確保高度為寬度的 50%
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientWidth * 0.5;
}

// 畫弧線的函數
function drawGauge(currentPercentage) {
    // 清除畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 動態計算 lineWidth 為畫布寬度的 10%
    const lineWidth = canvas.width * 0.08;

    // 中心點、半徑
    const centerX = canvas.width / 2;
    const centerY = canvas.height;
    const radius = canvas.width * 0.4; // 將半徑設置為畫布寬度的 40%

    // 灰色弧線繪製
    function drawArc(startAngle, endAngle, color) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.stroke();
    }

    // 計算弧線起始和結束角度
    const startAngle = Math.PI;
    const endAngle = Math.PI + Math.PI * currentPercentage;

    // 畫灰色的完整半圓弧線
    drawArc(Math.PI, 2 * Math.PI, '#e6e6e6');

    // 畫藍色的部分弧線
    drawArc(startAngle, endAngle, '#4285f4');
}

// 動畫函數
function animateGauge() {
    let currentPercentage = 0;
    const animationSpeed = 0.01; // 動畫速度

    function animate() {
        drawGauge(currentPercentage);

        // 增加當前百分比直到達到目標
        if (currentPercentage < targetPercentage) {
            currentPercentage += animationSpeed;
            if (currentPercentage > targetPercentage) {
                currentPercentage = targetPercentage; // 確保不超過目標百分比
            }
            requestAnimationFrame(animate);
        }
    }

    // 開始動畫
    requestAnimationFrame(animate);
}

// 初始化畫布尺寸，然後開始動畫
resizeCanvas();
animateGauge();

// 視窗大小變化時更新畫布尺寸並重新繪製
window.addEventListener('resize', () => {
    resizeCanvas();
    drawGauge(targetPercentage); // 保持進度不變，直接重繪到目標百分比
});

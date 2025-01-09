// گرفتن دکمه و پیغام
const button = document.getElementById("changeColorButton");
const message = document.getElementById("message");

// تعریف تابع برای تغییر رنگ پس‌زمینه
function changeBackgroundColor() {
  const colors = ["#f0f8ff", "#ffebcd", "#e6e6fa", "#f5f5dc", "#fff0f5"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;

  // تغییر محتوای پیغام
  message.textContent = `رنگ پس‌زمینه به ${randomColor} تغییر کرد.`;
}

// اضافه کردن event listener به دکمه
button.addEventListener("click", changeBackgroundColor);

// BS-Notify FiveM Notification System

function BSNotifyShow(type, message) {
    const container = document.getElementById('notify-container');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const content = `
      <div class="notification-content">${message}</div>
      <div class="notification-progress">
        <div class="notification-progress-bar"></div>
      </div>
    `;
    
    notification.innerHTML = content;
    container.appendChild(notification);
  
    // Trigger reflow
    notification.offsetHeight;
  
    notification.classList.add('show');
    
    const progressBar = notification.querySelector('.notification-progress-bar');
    progressBar.style.transition = 'width 3s linear';
    progressBar.style.width = '0%';
  
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        container.removeChild(notification);
      }, 300);
    }, 3000);
}

// FiveM integration
window.addEventListener('message', (event) => {
    if (event.data.action === 'bs-notify') {
        BSNotifyShow(event.data.type, event.data.message);
    }
});

// Expose the function to the global scope for direct calls if needed
window.BSNotifyShow = BSNotifyShow;
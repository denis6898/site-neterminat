function checkTheme() {
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    const servicesSection = document.querySelector('.services-section');
    if (document.body.classList.contains('dark-theme')) {
        servicesSection.classList.add('dark-theme');
    } else {
        servicesSection.classList.remove('dark-theme');
    }
}

function activateDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('siteTheme', 'dark');
    checkTheme();
}

function deactivateDarkMode() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('siteTheme', 'light');
    checkTheme();
}

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        deactivateDarkMode();
    } else {
        activateDarkMode();
    }
}

function showServiceInfo(infoId) {
    const allInfos = document.querySelectorAll('.service-info');
    allInfos.forEach(info => info.classList.remove('active'));

    const selectedInfo = document.getElementById(infoId);
    selectedInfo.classList.add('active');
}

function redirectToSite(url) {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', checkTheme);

const themeButtons = document.createElement('div');
themeButtons.classList.add('theme-buttons');
themeButtons.innerHTML = `
    <button class="dark-mode" onclick="toggleTheme()">Dark Mode</button>
    <button class="light-mode" onclick="toggleTheme()">Light Mode</button>
`;

document.body.appendChild(themeButtons);

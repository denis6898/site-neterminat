

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


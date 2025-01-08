// Flyt baggrundsmønsteret lidt, når musen bevæger sig
document.body.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px, ${y * 50}px ${x * 50}px, 0 0, 0 0`;
});

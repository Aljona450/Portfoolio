const pw = document.getElementById('pwInput');
const fill = document.getElementById('strengthFill');
const toggleBtn = document.getElementById('toggleView');
const scoreText = document.getElementById('score-text');

pw.addEventListener('input', () => {
    const val = pw.value;
    let score = 0;

    const rules = [
        { id: 'crit-len', check: val.length >= 8 },
        { id: 'crit-up',  check: /[A-Z]/.test(val) },
        { id: 'crit-num', check: /[0-9]/.test(val) },
        { id: 'crit-spec', check: /[^A-Za-z0-9]/.test(val) }
    ];

    rules.forEach(rule => {
        const el = document.getElementById(rule.id);
        if (rule.check) {
            el.classList.add('ok');
            score += 25;
        } else {
            el.classList.remove('ok');
        }
    });

    fill.style.width = score + '%';
    scoreText.innerText = `Tugevus: ${score}%`;

    // Värvi muutmine
    if (score <= 25) fill.style.background = "#e74c3c";
    else if (score <= 50) fill.style.background = "#f1c40f";
    else if (score <= 75) fill.style.background = "#3498db";
    else fill.style.background = "#2ecc71";
});

toggleBtn.addEventListener('click', () => {
    const isPw = pw.type === 'password';
    pw.type = isPw ? 'text' : 'password';
    toggleBtn.innerText = isPw ? 'Peida' : 'Näita';
});


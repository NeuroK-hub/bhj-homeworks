let successShot = 0;
let bossShot = 0;

for (let i = 1; i < 10; i++) {
    let targetHole = document.getElementById('hole' + i);
    targetHole.onclick = () => {
        if (targetHole.className.includes('hole hole_has-mole')) {
            successShot += 1;
            document.getElementById('dead').textContent = successShot;
            if (successShot === 10) {
                alert('Вы победили!');
                return location.reload();
            }
        }
        else {
            bossShot += 1;
            document.getElementById('lost').textContent = bossShot;
            if (bossShot === 5) {
                alert('Поражение((');
                return location.reload();
            }
        }
    }  
}
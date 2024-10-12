/*
 * [Aug 2023] Fixed the popup mechanism, made it more robust.
 *
 * Requires safe.js & math.js preload.
 */
document.addEventListener("click", async () => {
	fileName = "media/virus.exe.mp4"
    const a = document.createElement('a')
    a.href = fileName
    a.download = "virus.exe.mp4"
    a.click()
	await proCreate(3);
});

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		fileName = "media/virus.exe.mp4"
		const a = document.createElement('a')
		a.href = fileName
		a.download = "virus.exe.mp4"
		a.click()
		await proCreate(3);
		alert("JOE IS VERY VERY HUNGRY");
	}

	return null;
}
window.onbeforeunload = () => "JOSEPH IS STARVING";
/* [Aug 2023] End of amendments. */
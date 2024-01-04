/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
document.getElementById("button").addEventListener("click", function () {
    // Change background to dancing rick
    document.body.style.backgroundImage = "url('rick.gif')"

    // Hide the heading and the button
    document.querySelector(".everything").style.display = "none"

    // Play song
    var song = document.getElementById("song")
    song.play()
})

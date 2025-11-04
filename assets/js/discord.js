document.addEventListener('DOMContentLoaded', () => {
    const userId = "822676526158970892";
    const apiUrl = `https://discord-lookup-api-alpha.vercel.app/v1/user/822676526158970892`;

    const avatarFrame = document.getElementById('avatar-frame');

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data);

            if (data.avatar_decoration && data.avatar_decoration.asset) {
                const asset = data.avatar_decoration.asset;
                const frameUrl = `https://cdn.discordapp.com/avatar-decoration-presets/${asset}.png`;
                avatarFrame.src = frameUrl;
                avatarFrame.style.display = 'block';
            } else {
                console.warn("No avatar frame asset found.");
                avatarFrame.style.display = 'none';
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });
});
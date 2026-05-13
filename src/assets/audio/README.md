# Audio Assets

The current Play Music button uses a lightweight Web Audio romantic pad, so the site does not require a large audio file.

If you later add a licensed music track:
1. Place it in this folder.
2. Update `src/components/MusicControl.jsx` to play the imported audio file.
3. Keep autoplay disabled so iPhone Safari and Android browsers allow playback after user interaction.

# UNSTABLE SMP FFA

A browser-based, single-player voxel PvP arena inspired by the Unstable SMP FFA concept. Multiplayer is intentionally **COMING SOON**; every opponent in this release is AI-controlled.

## Play

Serve this repository with any static web server, or enable GitHub Pages from the repository root. The game uses Three.js from jsDelivr and requires an internet connection for that module and the Google font.

- GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/ (root)`.
- Open the published site and select **Single Player**.
- Choose a mode, arena, factions, bot count, and difficulty.
- Deploy and fight.

## Visual style\n\n- Minecraft-inspired pixel-art menu, stone-button controls, blocky HUD, hotbar, pause screen, and inventory layout.\n- Original procedural 16×16 pixel textures generated at runtime and applied to voxel materials. No copied Minecraft texture files or proprietary asset packs are bundled.\n- Block-shaped projectile visuals, crisp nearest-neighbor texture filtering, and pixel-style typography.\n\n## Features

- First-person 3D voxel-style arenas, generated locally at runtime.
- Six factions with individual palettes, names, combat personalities, and faction relationships.
- Bots select hostile opponents and fight one another as well as the player.
- Faction War, Free For All, Survival Arena, Boss Battles, and Practice.
- Parrot, Wembu, Spoke, and FlameFrags loadouts.
- Sword, axe, mace, bow, crossbow, Ender Pearl, Golden Apple, Totem, Wind Charge, firework boost, cobweb, potion, and utility-item actions.
- Armor, health, knockback, projectiles, fall damage, bot armor, boss phases, waves, combat feed, and match timer.
- Nine-slot hotbar, inventory screen, local statistics, settings, pause/restart, keyboard/mouse and touchscreen controls.
- No account, backend, paid service, or multiplayer server required.

## Controls

| Action | Desktop | Touch |
|---|---|---|
| Move | WASD | Left virtual joystick |
| Look | Mouse | Drag world |
| Jump | Space | Jump |
| Sprint | Shift | Move quickly |
| Sneak | Ctrl | — |
| Attack | Left click | Attack |
| Block | Right click | — |
| Use selected item | R | Use |
| Inventory | E | Bag |
| Drop item | Q | — |
| Select hotbar | 1–9 / wheel | Tap slot |
| Toggle camera | F | — |
| Pause | Esc | Pause via menu |

## Project layout

```
index.html
styles/main.css
src/main.js
src/data.js
README.md
```

## Notes

Faction names, member names, and lore details not supplied as canonical references are original game interpretations. This is an unofficial fan project and is not affiliated with Mojang, Microsoft, Roblox, or any series creator. The game is a browser interpretation, not a full Minecraft engine or a claim of exact Java Edition parity.

## Development

All gameplay assets are procedurally created with Three.js primitives and original canvas-generated pixel textures. There are no external model or texture downloads. The visual language is Minecraft-inspired, but the game does not redistribute Minecraft's copyrighted textures or assets. Keep all paths relative so the project remains deployable from GitHub Pages.

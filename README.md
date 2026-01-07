# nexus-tailwind-preset

This repository contains the portable Tailwind CSS preset for the NexusHub ecosystem. It includes custom colors, utility classes (like glass panels and tech-grids), and design decisions that ensure a consistent look and feel across all "Spoke" apps.

## Usage

1. Install the preset (once published or via git):
   ```bash
   npm install github:Bradshawrc93/nexus-tailwind-preset
   ```

2. Add it to your `tailwind.config.ts`:
   ```typescript
   import type { Config } from "tailwindcss";
   import nexusPreset from "nexus-tailwind-preset";

   export default {
     // ...
     presets: [nexusPreset],
   } satisfies Config;
   ```

## Design Decisions Included

- **Colors**: Primary cyan, secondary magenta, and deep slate backgrounds.
- **Glass Effects**: `.glass-panel` utility for frosted glass surfaces.
- **Tech Grid**: `.tech-grid-bg` for the signature architectural grid background.
- **Animations**: `fade-in-up` for smooth entry transitions.


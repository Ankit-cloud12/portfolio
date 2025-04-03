# Portfolio Website with Fluid Cursor Effect

This repository contains a portfolio website template featuring a fluid, interactive cursor effect that creates a dynamic visual experience as users navigate through the site.

## SplashCursor Component

The core of this project is the `SplashCursor` React component that implements a WebGL-based fluid simulation that follows the mouse cursor. This creates a unique, engaging user experience by adding subtle visual feedback to user interactions.

### Features

- Fluid dynamics simulation using WebGL shaders
- Responsive to mouse movements and clicks
- Customizable properties (colors, intensity, etc.)
- Works on both desktop and mobile devices
- Zero dependencies beyond React
- Optimized for performance

### Usage

To use the SplashCursor component in your React application:

```jsx
import { SplashCursor } from './components/ui/splash-cursor';

function App() {
  return (
    <div>
      <SplashCursor />
      {/* Your application content */}
    </div>
  );
}
```

## Customization

The component accepts various props to customize its behavior:

```jsx
<SplashCursor 
  SIM_RESOLUTION={128}
  DYE_RESOLUTION={1440}
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  SPLAT_RADIUS={0.2}
  SPLAT_FORCE={6000}
  SHADING={true}
  COLOR_UPDATE_SPEED={10}
  BACK_COLOR={{ r: 0.5, g: 0, b: 0 }}
/>
```

## Technology

- React
- WebGL for fluid simulation
- TypeScript for type safety

This component is part of a larger portfolio website template that can be extended with additional features and customizations.

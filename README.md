# Fluid Cursor Portfolio Demo

A minimalist portfolio template featuring an interactive WebGL-based fluid cursor effect. This project demonstrates a visually engaging cursor that creates fluid simulations as you move around the page.

## Features

- **WebGL Fluid Simulation**: Interactive cursor that creates a fluid simulation effect
- **Responsive Design**: Works on all device sizes
- **Optimized Performance**: Efficient rendering even on less powerful devices
- **Customizable**: Easily configurable cursor properties

## Live Demo

Check out the live demo at [https://ankit-cloud12.github.io/portfolio/](https://ankit-cloud12.github.io/portfolio/)

## Technologies Used

- React
- TypeScript
- WebGL for the fluid dynamics simulation
- TailwindCSS for styling
- Vite for fast development and building

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Ankit-cloud12/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## How It Works

The fluid simulation is based on Navier-Stokes equations implemented in WebGL shaders. The cursor movement creates disturbances in the fluid which are then rendered in real-time.

## Customization

You can customize the SplashCursor behavior by modifying the parameters in `src/components/ui/splash-cursor.tsx`.

```tsx
<SplashCursor
  SIM_RESOLUTION={128}
  DENSITY_DISSIPATION={3.5}
  VELOCITY_DISSIPATION={2}
  PRESSURE={0.1}
  PRESSURE_ITERATIONS={20}
  CURL={3}
  SPLAT_RADIUS={0.2}
  SPLAT_FORCE={6000}
  SHADING={true}
  COLORFUL={true}
  COLOR_UPDATE_SPEED={10}
  BACK_COLOR={{ r: 0.5, g: 0, b: 0 }}
  TRANSPARENT={true}
/>
```

## License

This project is open source and available under the MIT license.

## Acknowledgements

- Inspired by various WebGL fluid simulations
- Built with React and Vite

# QuotePaper

**QuotePaper** is a web application that allows users to create custom quote wallpapers. Users can upload background images, adjust overlay properties, and add resizable, draggable text quotes to create personalized wallpapers.

## Features

- **Background Customization**:
  - Upload background images
  - Adjust overlay opacity
  - Change overlay colors
  - **Upcoming**: Add gradient backgrounds
  - **Upcoming**: Use video backgrounds (with and without sound)
- **Quote Management**:
  - Add, edit, and position text quotes on the wallpaper
  - **Upcoming**: Text alignment (left, center, right)
  - **Upcoming**: Change text color
  - **Upcoming**: Change text font and weight
  - **Upcoming**: Add gradient text
  - **Upcoming**: Add text stroke and more
- **Responsive Design**: Automatically adjusts to different device types (laptop, tablet, phone).
- **Draggable and Resizable Text**: Easily move and resize text quotes within the wallpaper.

## Technologies Used

- **Next.js**: For server-side rendering and routing.
- **Zustand**: For state management.
- **react-draggable**: For draggable functionality.
- **react-resizable**: For resizable functionality.
- **shadcn/ui**: For creating UI components.
- **Tailwind CSS**: For styling.

## Installation

1. **Clone the repository**

```sh
git clone https://github.com/yourusername/quotepaper.git
cd quotepaper
```

2. **Install dependencies**

```sh
yarn install
```

3. **Run the development server**

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### 1. Adding a Background Image

1. Click on the "Background" section in the edit panel.
2. Use the file input to upload a background image.
3. Adjust the overlay opacity and color as desired.
4. **Upcoming**: Choose a gradient background.
5. **Upcoming**: Upload a video to use as the background (with or without sound).

### 2. Adding and Customizing Quotes

1. Go to the "Quote" section in the edit panel.
2. Enter your quote text in the provided text area.
3. The quote can be dragged and resized on the wallpaper preview area.
4. **Upcoming**: Align text to the left, center, or right.
5. **Upcoming**: Align text in the center left right of wallaper.
6. **Upcoming**: Change the text color.
7. **Upcoming**: Select different fonts and weights for the text.
8. **Upcoming**: Apply gradient colors to the text.
9. **Upcoming**: Add stroke and other text effects.

### 3. Adjusting for Different Devices

1. The application automatically adjusts the wallpaper aspect ratio based on the selected device type (laptop, tablet, or phone).

## File Structure

```plaintext
src
├── components
│   ├── build
│   │   ├── EditPanel.tsx
│   │   └── OutputWallpaper.tsx
├── app
│   ├── layout
│   ├── page.tsx
│   └── globals.css
├── store
│   ├── useBackgroundStore.ts
│   ├── useDeviceStore.ts
│   └── useQuoteStore.ts
└── ui
    ├── button.tsx
    ├── input.tsx
    ├── label.tsx
    ├── separator.tsx
    ├── slider.tsx
    └── textarea.tsx
```

## Contributing

1. **Fork the repository**
2. **Create a new branch**

```sh
git checkout -b feature-branch
```

3. **Make your changes**
4. **Commit your changes**

```sh
git commit -m "Add some feature"
```

5. **Push to the branch**

```sh
git push origin feature-branch
```

6. **Create a new Pull Request**

## License

This project is licensed under the [MIT](LICENSE) License.

## Contact

For any questions or feedback, please feel free to contact

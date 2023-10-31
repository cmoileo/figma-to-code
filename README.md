# Figma-to-Code

Figma-to-Code is an open-source project aimed at converting Figma mockups into code. With this tool, you can streamline the process of turning your Figma designs into functional code, making your development workflow more efficient.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Getting Started

To get started with Figma-to-Code, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/figma-to-code.git
   cd figma-to-code
   ```

2. Install the required dependencies :

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a .env file with the following keys:

   FIGMA_TOKEN_KEY: Your Figma API token.
   FIGMA_FILE: The Figma file ID you want to convert.
   FRAMES_PAGE: The ID of the page containing the frames you want to convert.

## Usage

To use Figma-to-Code, run the following command:

```bash
npm start
```

This will trigger the conversion process. The tool will connect to Figma using your API token, fetch the specified Figma file, and generate code files for the frames on the specified page.

The generated code files will be located in the ./theme/templates/ directory.

## Contrubuting

We welcome contributions from the community to make Figma-to-Code even better. To contribute:

    1. Fork the repository.
    2. Create a new branch for your feature or bug fix.
    3. Make your changes and commit them.
    4. Submit a pull request.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).

## Acknowledgments

A special thanks to [lemmycaution](https://github.com/lemmycaution/) for contributing to the project by providing Figma types.

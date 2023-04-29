# Mikrofabriken Badgenator

Namebadge generator for members and visitors at [Mikrofabriken](https://www.mikrofabriken.se).

## Usage

1. Enter your name
2. Select the symbols you want
3. Download the .svg file and create your namebadge with the lasercutter!

## Updating symbols

### Updating existing symbols

If you want to update existing symbols simply upload a new [Mikrofabriken.ttf](static/Mikrofabriken.ttf) file.

Do not include the version at the end - it's better to let git handle the versioning for you.

### Updating labels and/or adding new symbols

If you want to update the labels and/or add new symbols, then modify the [symbols.json](src/routes/symbols.json) file instead.

In this .json file - each entry in the array represents a specific symbol complete with its label and its icon/font mapping.

If you are adding a new symbol you might need to update the font as well, refer to the previous section.

## Licence

[MIT](LICENSE)

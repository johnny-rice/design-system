<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Toast Release Notes

<!-- ## [Unreleased] -->
## 2.27.0

### Changed

- Updated the toast close button icon to its default size (14x14) by removing the `slds-button__icon_large` class.

## 2.15.6

### Fixed

- Corrected accessibility information regarding the usage of the `role` attribute.

## 2.13.0

### Added

- Enabled styling hooks for toast. See toast's styling hooks overview table for a full listing of the currently available hooks.

## 2.8.0

### Fixed

- Improved the contrast for focus and hover states on links and buttons in toasts

## 2.7.0

### Changed

- Swapped the `role` value of toasts from `alert` to `status`

### Fixed

- Increased contrast between the icons and the yellow background in warning toasts.
- Buttons with the new BEM syntax used within an inverse themed component no longer have their text color overridden

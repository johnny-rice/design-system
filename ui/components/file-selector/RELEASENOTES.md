<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# File Selector Release Notes

<!-- ## [Unreleased] -->
## 2.27.0

### Changed

- `aria-labelledby` attribute is removed from HTML input file and added to the wrapper div along with `role='group'` as per accessibility requirements.

## 2.10.0

### Changed

- For touch devices, the line-height is increased for a larger tap target size. This change comes from `slds-button` which is used as a child component in file-selector.

## 2.7.0

### Changed

- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
- Reduced height to minimize whitespace

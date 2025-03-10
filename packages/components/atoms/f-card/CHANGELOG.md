# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v4.2.0
------------------------------
*July 15, 2022*

### Added
- Node 16 support.


v4.1.0
------------------------------
*July 4, 2022*

### Changed
- Update f-wdio-utils to v1.1.0 to use new Axe Core implementation.
- Accessibility tests to be async.
- Specs to ES6 syntax
- Babel config to allow for async syntax in tests.

v4.0.0
------------------------------
*June 15, 2022*

### Changed
- *** Breaking change *** - Implement @use for fozzie where required.


v3.6.1
-----------------------------
*Jun 10, 2022*

### Changed
- Bumped wdio version and fixed breaking changes.

*May 27, 2022*

### Removed
- unneeded `load` and `waitForComponent` functions from component object

*May 26, 2022*

### Changed
- Refactor WebDriverIO tests to use async in order to support Node 16 using `codemod` utility.

*February 4, 2022*

### Changed
- Upgraded to ESLint v8


v3.6.0
------------------------------
*January 28, 2022*

### Changed
- `spacing` references to new mapping from fozzie e.g spacing(x2) > spacing(d).


v3.5.0
------------------------------
*January 25, 2022*

### Added
- `cardHeadingSize` prop.


v3.4.0
------------------------------
*December 6, 2021*

### Changed
- Nested selector.


v3.3.0
------------------------------
*November 25, 2021*

### Added
- Computed `capitaliseCardSizeProp` so we can capitialise the prop values passed in for our class names.
- Tests to cover the computed `capitaliseCardSizeProp` method.

### Changed
- Tests to reflect renaming classes.


v3.2.0
------------------------------
*November 23, 2021*

### Added
- `cardSizeCustom` prop to allow two custom sizes for the accounts page, medium & large.


v3.1.0
------------------------------
*November 19, 2021*

### Added
- `hasInnerSpacingLarge` prop to allow large spacing around the edges of the card.


v3.0.1
------------------------------
*November 15, 2021*

### Changed
 - Page content wrapper padding now only applies to immediate children


v3.0.0
------------------------------
*October 5, 2021*

### Changed
- New border radius in line with Icing Phase 2.

### Removed
- `isRounded` prop as now all the cards should be rounded.


v2.0.0
------------------------------
*September 16, 2021*

### Removed
- Normalise styles from the build. Note that now if consuming application doesn't have normalised (reset) styles, there may be some slight style differences after this update. If the consuming application uses fozzie, there shouldn't be any style differences as normalised styles should be added as part of the fozzie import.


v1.3.0
------------------------------
*May 25, 2021*

### Changed
- CSS variables to use pie design tokens instead of fozzie-colour-palette vars


v1.2.1
------------------------------
*May 20, 2021*

### Added
- Returned back `.c-card--center`, `.c-card--right` css classes as they are in use for aligning the header. Renamed to `.c-card-heading--centerAligned` and `.c-card-heading--rightAligned`.

### Changed
-Refactored unit tests


v1.2.0
------------------------------
*May 20, 2021*

### Added
- `hasFullWidthFooter` prop
- Named slot `cardFooter` to render full width content at the bottom of the card without card paddings when `hasFullWidthFooter` set to true
- `.c-card-innerSpacing` css class for card paddings to be able to separate card content paddings from the card itself

### Removed
- `.c-card--separated`, `.c-card--center`, `.c-card--right` css classes as unused

v1.1.0
------------------------------
*March 17, 2021*

### Added
- Added a `prop` to allow the customisation of the heading level.

### Changed
- Restructured component object into page object model
- Refactored accessibility tests

v1.0.0
------------------------------
*February 22, 2021*

### Removed
- `tenant` and `theme` config, as not used in Card component.

### Changed
- Storybook config switched over to using `controls` rather than `knobs`.
- Reordered props (Alphabetical order).
- Updated README.
- Updated config for latest `sass-loader`.
- Switches import in `common.scss` in line with fozzie v5-beta.


v0.9.0
------------------------------
*November 18, 2020*

### Changed
- `pageContentWrapper` width, so that it sits on our 8px grid.


v0.8.0
------------------------------
*October 26, 2020*

### Added
- Stylelint added to lint styling on build.
- data-test IDs to Card Component
- Test for Card
- Card Component-Object

### Changed
- 'jet' theme instead of 'je'


v0.7.0
------------------------------
*October 13, 2020*

### Changed
- Removed 'beta' style from card heading to align font-size with designs.


v0.6.0
------------------------------
*September 21, 2020*

### Fixed
- Add top and bottom margins to F-Card when 'isPageContentWrapper' is enabled


v0.5.1
------------------------------
*September 21, 2020*

### Fixed
- Fix linting issues fo `f-card` computed properties tests.


v0.5.0
------------------------------
*September 18, 2020*

### Added
- Tests for `f-card` computed properties.


v0.4.0
------------------------------
*July 23, 2020*

### Changed
- Updating colour variables to use new versions set in `fozzie-colour-palette` (rebrand phase 3.1).
- Changing `data-theme` to `data-theme-card` to avoid clashing with any other components in the future.
- Vue CLI minor package updates.

*July 2, 2020*

### Added
- Accessibility add-on to Storybook story.

*June 25, 2020*

### Changed
- Updating colour variables to use new versions set in `fozzie-colour-palette`.


v0.3.1
------------------------------
*June 11 2020*

### Changed
- Fixed linting issue.


v0.3.0
------------------------------
*June 10 2020*

### Changed
- Additional prop to indicate card heading text alignment.
- Storybook updated for card component.
- Updating `vue-test-utils` to v1.
- Structure of Storybook stories changed to CSF (Component Story Format) – the new recommended way to write stories.
- ESLint autofix turned off (so that tests don't pass due to --fix being applied, but then publish subsequently fails)


v0.2.0
------------------------------
*April 27, 2020*

### Added
- Component markup and core functionality added.
- Storybook config added.


v0.1.0
------------------------------
*April 21, 2020*

### Added
- Component structure and basic configuration (copied from `f-skeleton-component`).

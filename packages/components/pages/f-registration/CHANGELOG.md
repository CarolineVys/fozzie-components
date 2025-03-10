# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

v3.13.1
------------------------------
*December 8, 2022*

### Added
- `crypto` setup file to handle `getRandomValues` within jest tests. This logical stems from `f-form-field`'s use of UUID.


v3.13.0
------------------------------
*November 8, 2022*

### Changed
- Added fozzie components as externals in Webpack config (via the PR hokey-cokey)


v3.12.0
------------------------------
*November 7, 2022*

### Changed
- Reverting externals change so can test CoreWeb integration further


v3.11.0
------------------------------
*November 4, 2022*

### Changed
- Removed asterisks from registration page form fields


v3.10.0
------------------------------
*November 2, 2022*

### Changed
- Added fozzie components as externals in Webpack config.


v3.9.0
------------------------------
*October 28, 2022*

### Changed
- Visual tests to include new tenants
- Updated Story file to use Storybook `Controls`.


v3.8.0
------------------------------
*October 27, 2022*

### Changed
- Update component to use Vue I18n.
- Added translations for form error message.

v3.7.2
------------------------------
*October 13, 2022*

### Changed
- Added translations for es-ES, en-IE and it-IT.

v3.7.1
------------------------------
*October 03, 2022*

### Changed
- `f-http` package version.


v3.7.0
------------------------------
*August 22, 2022*

### Changed
- Updated component to emit RateLimitExceeded event for 429 errors

v3.6.1
------------------------------
*August 19, 2022*

### Changed
- Add LoginBlock event not emitted assertion

v3.6.0
------------------------------
*August 18, 2022*

### Changed
- Updated component to emit MfaChallengeIssue event for 403 errors

v3.5.0
------------------------------
*August 15, 2022*

### Changed
- Updated component to handle 401 error

v3.4.0
------------------------------
*July 28, 2022*

### Added
- Node 16 compatible version of `@justeat/f-services`.
- Node 16 compatible version of `@justeat/f-error-message`.
- Node 16 compatible version of `@justeat/f-vue-icons`.
- Node 16 compatible peerDependency version of `@justeat/f-button`.
- Node 16 compatible peerDependency version of `@justeat/f-card`.


v3.3.0
------------------------------
*July 25, 2022*

### Added
- Node 16 support.


v3.2.0
------------------------------
*July 19, 2021*

### Added
- Peer dependencies for fozzie components.
- `required` attribute to required fields but disable default HTML5 form validation.


v3.1.0
------------------------------
*July 13, 2022*

### Changed
- Update f-wdio-utils to v1.1.0 to use new Axe Core implementation.
- Accessibility tests to be async.

### Changed
- Refactor WebDriverIO tests to use async in order to support Node 16 using `codemod` utility.


v3.0.0
------------------------------
*July 13, 2022*

### Changed
- **breaking changes** Update to `@use` and `@forward` SASS syntax.


v2.4.2
------------------------------
*June 29, 2022*

### Added
- Increase password minimum length from 4 to 10 characters.


v2.4.1
------------------------------
*June 27, 2022*

### Added
- Component tests to check correct URLs for Ts & Cs, Privacy and Cookies policy links.


v2.4.0
------------------------------
*June 22, 2022*

### Changed
- Update `f-link` to v3.1.1.


v2.3.0
------------------------------
*June 20, 2022*

### Changed
- Bumped `f-form-field` version to add `required` fields.


v2.2.0
------------------------------
*June 16, 2022*

### Changed
- Bumped wdio version and fixed breaking changes.

*February 4, 2022*

### Changed
- Upgraded to ESLint v8


v2.1.1
------------------------------
*January 27, 2022*

### Changed
- `component` and `visual` tests to take in functions from `f-wdio-utils` package.
- visual tests to dynamically change device type


v2.1.0
------------------------------
*November 4, 2021*

### Changed
- Updated references to point to being a `Page` rather than an `Organism`.


v2.0.3
------------------------------
*October 18, 2021*

### Changed
- Updated version of `f-form-field`.


v2.0.2
------------------------------
*October 15, 2021*

Republish to fix a bad previous publish.


v2.0.1
------------------------------
*October 14, 2021*

### Changed
- Updated version of `f-button`.


v2.0.0
------------------------------
*October 5, 2021*

### Changed
- Updated version of `f-button`, `f-card`, `f-link` and `f-form-field` to include icing phase 2 changes.

### Removed
- `is-rounded` prop from `f-card` component call as the card is now rounded by default.

### Added
- `is-distinct` prop for f-link component call to make links blue.


v1.1.0
------------------------------
*September 16, 2021*

### Changed
- Updated version of `f-button`, `f-form-field`, `f-error-message`, `f-link` and `f-card` to remove normalize styles from the build.

### Removed
- Normalise styles from the build. Note that now if consuming application doesn't have normalised (reset) styles, there may be some slight style differences after this update. If the consuming application uses fozzie, there shouldn't be any style differences as normalised styles should be added as part of the fozzie import.


v1.0.0
------------------------------
*September 15, 2021*

- Return beta to master. Component has JETSansDigital font.


v1.0.0-beta.2
------------------------------
*September 8, 2021*

### Changed
- Updated font weights after design review.
- Restored decoration (underline) for link to login page.


v1.0.0-beta.1
------------------------------
*September 7, 2021*

### Changed
- Republish to remove JustEatBasis from css output file.


v1.0.0-beta.0
------------------------------
*September 1, 2021*

### Updated
- New font JETSansDigital
- `f-button` to v2.0.0-beta.0 which use the new font
- `f-form-field` to v3.0.0-beta.0 which use the new font


v0.63.0
------------------------------
*August 31, 2021*

### Updated
- Updated generic error message and handling on registration failure.


v0.62.0
------------------------------
*August 19, 2021*

### Updated
- Versions of `f-card`, `f-error-message`,`f-form-field`, `f-vue-icons` to the latest


v0.61.0
------------------------------
*August 19, 2021*

### Fixed
- Removing the `je-oidc` cookie when registering to avoid logged in users from being kept logged in to the previous account.


v0.60.0
------------------------------
*August 5, 2021*

### Changed
- Update the story file API mocking to work with f-http


v0.59.0
------------------------------
*August 4, 2021*

### Changed
- Updated Integration Tests to work with new f-http version
- Use $http from context instead of creating a new HTTP Client
- Updated version of `f-button`.


v0.58.0
------------------------------
*June 25, 2021*

### Added
- `CreateAccountWarning` event to be emitted for logging warning instead of errors. Now is used for 409 errors.


v0.57.0
------------------------------
*June 18, 2021*

### Added
- Percy Visual regression tests


v0.56.0
------------------------------
*May 27, 2021*

### Changed
- f-card package version updated to 1.2.1
- Some styles were cleaned up in connection with new f-card version


v0.55.0
------------------------------
*May 27, 2021*

### Added
- `f-link` to login link and terms and conditions.`


v0.54.0
------------------------------
*May 25, 2021*

### Changed
- CSS variables to use pie design tokens instead of fozzie-colour-palette vars


v0.53.2
------------------------------
*May 20, 2021*

### Changed
- Bumped f-http version to 0.5.0


v0.53.1
------------------------------
*May 14, 2021*

### Fixed
- Error message for 409 - Conflict was no longer being rendered due to recent accessibility changes.
- Added functionality to validate conflicted email addresses


v0.53.0
------------------------------
*May 11, 2021*

### Changed
- Switched from Axios and Axios Mock Adapter to f-http


v0.52.0
------------------------------
*May 6, 2021*

### Removed
- `is-visuallyHidden` css style definition as should come from `fozzie`

### Added
- Tagging for future Percy tests


v0.51.0
------------------------------
*April 15, 2021*

### Changed
- Error messages retrieved from i18n files.


v0.50.0
------------------------------
*April 1, 2021*

### Added
- A11y markup to support screen-reader


v0.49.2
------------------------------
*April 1, 2021*

### Added
- `o-link` fozzie classes for the links.


*March 31, 2021*

### Changed
- user email and password in unit and component tests


v0.49.1
------------------------------
*March 23, 2021*

### Added
- `f-wdio-utils` npm package to package.json


v0.49.0
------------------------------
*March 19, 2021*

### Added
- Add translations for 'en-AU' and 'en-NZ'


v0.48.0
------------------------------
*March 18, 2021*

### Removed
- Remove 'en-GB' as the default value for `props.locale.default`


v0.47.0
------------------------------
*March 12, 2021*

### Added
- Browserstack test config in `package.json`
- Axios mocks for Storybook
- 'email in use' component test
- `f-wdio-utils` npm package to `f-registration-component`
- `selector.js` file for referencing attributes

### Changed
- Restructured component tests to support Browserstack
- component feature tests
- component object into a class that imports `page.object`
- Update axios version for security advisory.
- Use latest version of `f-form-field`.
  - Updated tests to handle new `data-test-id` attributes.


v0.46.0
------------------------------
*December 30, 2020*

### Changed
- Updated config for latest `sass-loader`.
- Switches import in `common.scss` in line with fozzie v5-beta.
- Updated `f-form-field` dependency.


v0.45.0
------------------------------
*December 10, 2020*

### Changed
- Moved justeat packages to the dev dependencies
- Updated f-button component to the latest (0.4.1)
- Renamed button-component to f-button for concistency between projects


v0.44.1
------------------------------
*December 10, 2020*

### Fixed
- Set form method to POST.


v0.44.0
------------------------------
*December 9, 2020*

### Added
- 'loginUrl' prop so that returnUrl is not lost when clicking 'Already on Just Eat' as it can be passed in by the parent

### Changed
- Updated storybook to include missing props
- Make 'showLoginLink' a required prop

### Removed
- Unsupported EU tenants
- Obselete localisation message for loginUrl


v0.43.3
------------------------------
*December 8, 2020*

### Fixed
- Remove tabindex from form element – results in visible border temporarily appearing around form when inputs are clicked.


v0.43.2
------------------------------
*December 7, 2020*

### Fixed
- All tests now run in component spec files.


v0.43.1
------------------------------
*December 2, 2020*

### Fixed
- Remove erroneous `>`.


v0.43.0
------------------------------
*November 20, 2020*

### Changed
- Margin at top of component updated for narrow widths.
- De-capitalised `name` on form labels.

### Fixed
- Generic error message updated to use `f-error-message` component.


v0.42.0
------------------------------
*November 18, 2020*

### Added
- `box-shadow` around component card.

### Changed
- Some minor spacing tweaks.


v0.41.0
------------------------------
*November 18, 2020*

### Added
- Underline for link `:hover` and `:focus` states.

### Changed
- Updating `f-button` to pull in new hover states.


v0.40.0
------------------------------
*November 17, 2020*

### Added
- Eyeglass sass config added so that the component can just import the base fozzie `index.scss`.

### Changed
- `Button.vue` replaced in favour of `f-button` component.
- Some small class name updates to make more consistent with our naming scheme.

### Removed
- `theme()` mixin as no longer needed.


v0.39.1
------------------------------
*November 5, 2020*

### Added
- Added f-error-message into dependencies for f-registration


v0.39.0
------------------------------
*November 3, 2020*

### Changed
- Added f-error-message for inline registration page errors
- 'jet' theme instead of 'je'

### Added
- Stylelint added to lint styling on build.

### Removed
- System test mocks


v0.37.0
------------------------------
*October 22, 2020*

### Changed
- Various style to align better with designs.


v0.36.0
------------------------------
*October 20, 2020*

### Added
- Handling of 403 responses in `f-registration`.
- New prop to set the form AJAX call timeout.


v0.35.0
------------------------------
*October 16, 2020*

### Added
- Moved text into translations file
- Support for locale en-GB
- Emit VisitLoginPage event on login page click interaction

### Changed
- Prop for showing login link changed to boolean called `showLoginLink`


v0.34.0
------------------------------
*October 9, 2020*

### Added
- Emit CreateAccountStart event on first form interaction
- Emit CreateAccountInlineError event on field blur and fails validation

### Changed
- Updated CreateAccountFailure emit event to pass the valid & invalid fields in the payload


v0.33.0
------------------------------
*October 5, 2020*

### Added
- Emit CreateAccountFailure event when form is submitted with validation errors

### Changed
- Password field has no max length requirement
- Refactored unit tests to ensure failure event is emitted because of validation errors and not service failures


v0.32.0
------------------------------
*October 5, 2020*

### Changed
- Use the latest version of `f-form-field` to display form labels on desktop.


v0.31.0
------------------------------
*September 30, 2020*

### Added
- Accessibility tests that run as part of the pipeline


v0.30.0
------------------------------
*September 29, 2020*

### Added
- Added bag icon to registration component.


v0.29.0
------------------------------

### Changed
- Uses `JustEatBasis` font and new fozzie font size declarations.


v0.28.0
------------------------------

### Removed
- Contract tests + scripts


v0.27.0
------------------------------
*September 23, 2020*

### Changed
- Use the latest version of F-Card to apply top and bottom margins to the registration component


v0.26.2
------------------------------
*September 23, 2020*

### Changed
- Reverted syntax change in `RegistrationService` due to issues when running `yarn:demo`


v0.26.1
------------------------------
*September 21, 2020*

### Fixed
- RegistrationService import so that it can be used by contract tests


v0.26.0
------------------------------
*September 17 , 2020*

### Changed
- Validation for inputs now displayed when focus is lost

### Added
- Email input max length is now 50 characters
- Password input must be between 4 and 50 characters


v0.25.0
------------------------------
*September 17, 2020*

### Changed
- Updated `f-registration` component object to make tests pass


v0.24.0
------------------------------
*September 15, 2020*

### Changed
- Include Registration API service as part of npm package for use in Magikarp contract tests


v0.23.0
------------------------------
*September 15, 2020*

### Changed
- font-weight for the Button bold text is now 500


v0.22.0
------------------------------
*September 15, 2020*

### Changed
- font-weight for the Button bold text is now 600


v0.21.0
------------------------------
*September 10, 2020*

### Added
- `registrationSource` and `marketingPreferences` to account creation post request body.


v0.20.0
------------------------------
*September 9, 2020*

### Added
- Integration tests


v0.19.0
------------------------------
*September 7, 2020*

### Added
- `consumer` folder for consumer pact tests
- `test:consumer` script to execute consumer pact tests

### Changed
- `testEnvironment` in `package.json` for consumer pact tests
- `modulePathIgnorePatterns` in `jest.config.js`


v0.18.0
------------------------------
*September 4, 2020*

### Added
- Legal text and relevant hyperlinks


v0.17.0
------------------------------
*September 1, 2020*

### Added
- WebDriverIO component tests


v0.16.0
------------------------------
*August 28, 2020*

### Changed
- Remove tenant prop and infer from locale prop instead.


v0.15.0
------------------------------
*August 26, 2020*

### Changed
- Update button colour to orange.


v0.14.0
------------------------------
*August 21, 2020*

### Changed
- Validation message for conflicting email address.


v0.13.0
------------------------------
*August 19, 2020*

### Added
- Wiremock files for Nuxt system tests

### Changed
- Changed folder structure for test utils.


v0.12.0
------------------------------
*August 13, 2020*

### Added
- `f-registration.page.js` for use within WebDriverIO test frameworks.
- New `data-test-id` attributes for f-registration error selectors.


v0.11.1
------------------------------
*August 7, 2020*

### Changed
- Unit tests cleaned up in Registration.test.js


v0.11.0
------------------------------
*August 6, 2020*

### Added
- Validation on First name and Last name regarding max length and invalid characters


v0.10.0
------------------------------
*August 3, 2020*

### Fixed
- Update expected structure of the axios error object to show custom 409 error message


v0.9.2
------------------------------
*July 31, 2020*

### Fixed
- Changed property name of POST object from `email` to `emailAddress`.


v0.9.1
------------------------------
*July 28, 2020*

### Changed
- Vue CLI minor package updates.
- Small update to colours from updating to `fozzie-colour-palette` in the mono-repo root.


v0.9.0
------------------------------
*July 15, 2020*

### Changed
- Update registration component to handle AccountWeb API endpoint.
- Updating colour variables to use new versions set in `fozzie-colour-palette`.

### Added
- Accessibility add-on to Storybook story.


v0.7.1
------------------------------
*June 12, 2020*

### Changed
- Added space between login preLinkText and linkText.


v0.7.0
------------------------------
*June 11, 2020*

### Changed
- Storybook category updated to `Organisms`.

### Added
- Login link to registration component.


v0.6.0
------------------------------
*June 2, 2020*

### Added
- Create account API call when clicking create account button


v0.5.0
------------------------------
*May 26, 2020*

### Added
- `Vuelidate` package added for validation of form inputs. Validation currently set-up to show to form submission.
- Error messages for error states and styling for error messages (needs to be in the form rather than on the input because of the way CSS Modules works – the plan will be to move this styling to a more generic `f-form` component down the line).
- `name` attributes added to each form field component.
- Added base `typography` file to the demo component so that it shows how the component will look with the global fozzie typographic styles applied (global styles like this will be made available as a separate include that is imported into each component in the future).

### Changed
- Stubbed `.css` file module imports as was causing build error.


v0.4.0
------------------------------
*May 18, 2020*

### Added
- Added Storybook file to include component in documentation component library.

### Changed
- `f-card` and `f-form-field` now used in the registration component in place of inline components.
- Added props for component `title` and `buttonText`.
- Changed `theme` data attribute to be more specific to component.


v0.3.0
------------------------------
*May 14, 2020*

### Added
- Added `data-test-id` for input elements in `f-registration`.

### Changed
- Updating `vue-test-utils` to v1 and `@vue/cli-plugin-unit-test` to v4.3.1.

### Removed
- `testMatch` from jest config, as not needed.


v0.2.0
------------------------------
*April 17, 2020*

### Added
- `f-registration` base HTML structure and styling has been added.

### Changed
- Components separated out into separate `.vue` files.


v0.1.0
------------------------------
*April 7, 2020*

### Added
- `f-registration` component structure and config.

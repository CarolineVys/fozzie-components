export default {
    messages: {
        locale: 'en-NZ',
        genericErrorMessage: 'Unable to Create Account at this time',
        navLinks: {
            termsAndConditions: {
                prefix: 'By creating an account you agree to our ',
                suffix: '.',
                text: 'Terms and Conditions',
                url: '/info/privacy-policy'
            },
            privacyPolicy: {
                prefix: 'Please read our ',
                text: 'Privacy Policy',
                url: '/info/privacy-policy'
            },
            cookiesPolicy: {
                prefix: ' and ',
                suffix: '.',
                text: 'Cookie Policy',
                url: '/info/privacy-policy'
            },
            login: {
                text: 'Already on Menulog?'
            }
        },
        labels: {
            createAccountTitle: 'Create account',
            createAccountBtn: 'Create account',
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            password: 'Password'
        },
        validationMessages: {
            singleFieldError: 'There is 1 error in the form',
            multipleFieldErrors: 'There are {errorCount} errors in the form',
            firstName: {
                requiredError: 'Please include your first name',
                maxLengthError: 'First name exceeds 50 characters',
                invalidCharError: 'Your name can only contain letters, hyphens or apostrophes'
            },
            lastName: {
                requiredError: 'Please include your last name',
                maxLengthError: 'Last name exceeds 50 characters',
                invalidCharError: 'Your last name can only contain letters, hyphens or apostrophes'
            },
            email: {
                requiredError: 'Please include your email address',
                maxLengthError: 'Email address exceeds 50 characters',
                invalidEmailError: 'Please enter your email address correctly',
                alreadyExistsError: 'Email address is already registered'
            },
            password: {
                requiredError: 'Please enter a password',
                minLengthError: 'Password is less than ten characters '
            }
        }
    }
};

<template>
    <div
        ref="megaModal"
        :class="['c-megaModal',
                 $style['c-megaModal'], {
                     'u-overlay': showOverlay,
                     [$style['c-megaModal--hasBackButton']]: hasBackButton,
                     [$style['c-megaModal--modeRTL']]: isModeRightToLeft
                 }]"
        data-test-id='mega-modal-component'
        :aria-hidden="!isOpen"
        @click.self="overlayClose">
        <div
            ref="megaModalContent"
            :class="['c-megaModal-content', $style['c-megaModal-content'], {
                'c-megaModal-content--visible': isOpen,
                [$style['c-megaModal-content--visible']]: isOpen,
                [$style['c-megaModal-content--narrow']]: isNarrow,
                [$style['c-megaModal-content--wide']]: isWide,
                [$style['c-megaModal-content--flush']]: isFlush,
                [$style['c-megaModal-content--rightToLeft']]: isModeRightToLeft,
                [$style['is-fullHeight']]: isFullHeight,
                [$style['is-positioned-bottom']]: isPositionedBottom,
                [$style['is-text-aligned-center']]: isTextAlignedCenter
            }]"
            role="dialog"
            :aria-labelledby="showAriaLabel">
            <div
                ref="megaModalDocument"
                :class="['c-megaModal-document', {
                    'c-megaModal-document--scrollable': isScrollable,
                    [$style['c-megaModal-document--scrollable']]: isScrollable
                }]"
                role="document">
                <header>
                    <component
                        :is="titleHtmlTag"
                        v-if="title"
                        :id="uid"
                        :class="['c-megaModal-title', $style['c-megaModal-title']]"
                        data-test-id="mega-modal-title">
                        {{ title }}
                    </component>
                    <slot
                        v-if="hasCloseButton"
                        name="close-button">
                        <f-button
                            is-icon
                            :class="[$style['c-megaModal-closeBtn'], {
                                [$style['c-megaModal-closeBtn--fixed']]: isCloseFixed || isFullHeight
                            }]"
                            button-type="inverse"
                            button-size="xsmall"
                            data-test-id="close-modal"
                            @click.native="close">
                            <component
                                :is="setCloseButtonIconStyle"
                                :class="[$style['c-megaModal-closeIcon']]" />

                            <span class="is-visuallyHidden">
                                {{ closeButtonCopy }}
                            </span>
                        </f-button>
                    </slot>
                </header>

                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import { CloseSmallIcon, ChevronLeftIcon } from '@justeattakeaway/pie-icons-vue';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import FButton from '@justeat/f-button';

let uid = 0;

export default {
    components: {
        ChevronLeftIcon,
        CloseSmallIcon,
        FButton
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },

        isNarrow: {
            type: Boolean,
            default: false
        },

        isWide: {
            type: Boolean,
            default: false
        },

        isFlush: {
            type: Boolean,
            default: false
        },

        isFullHeight: {
            type: Boolean,
            default: false
        },

        isScrollable: {
            type: Boolean,
            default: false
        },

        isCloseFixed: {
            type: Boolean,
            default: false
        },

        isPositionedBottom: {
            type: Boolean,
            default: false
        },

        isTextAlignedCenter: {
            type: Boolean,
            default: false
        },

        hasOverlay: {
            type: Boolean,
            default: true
        },

        hasCloseButton: {
            type: Boolean,
            default: true
        },

        closeButtonStyle: {
            type: String,
            default: 'cross',
            validator: value => ['cross', 'chevron'].includes(value)
        },

        closeOnBlur: {
            type: Boolean,
            default: true
        },

        closeButtonCopy: {
            type: String,
            default: 'Close modal'
        },

        title: {
            type: String,
            default: ''
        },

        ariaLabel: {
            type: String,
            default: ''
        },

        titleHtmlTag: {
            type: String,
            default: 'h3',
            validator: value => ['h1', 'h2', 'h3', 'h4'].includes(value)
        },

        isModeRightToLeft: {
            type: Boolean,
            default: false
        }
    },

    data () {
        uid += 1;

        return {
            uid: `modal-${uid}-title`
        };
    },

    computed: {
        showOverlay () {
            return this.isOpen
                && this.hasOverlay;
        },
        showAriaLabel () {
            return this.ariaLabel === '' ? this.uid : this.ariaLabel;
        },
        hasBackButton () {
            return this.closeButtonStyle === 'chevron' && this.hasCloseButton;
        },
        setCloseButtonIconStyle () {
            return this.closeButtonStyle.includes('cross')
                ? 'close-small-icon'
                : 'chevron-left-icon';
        }
    },

    watch: {
        isOpen (newVal) {
            if (newVal) {
                this.open();
            } else {
                this.close({ emit: false });
            }
        }
    },

    beforeDestroy () {
        // In case modal is destroyed without being closed first, re-enable scrolling
        enableBodyScroll(this.$refs.megaModalDocument);
    },

    methods: {
        /**
         * Handles user key presses to help improve acccessibilty for keyboard users.
         *
         * @param {Object} e Event object.
         */
        keyActions (e) {
            if (e.key === 'Escape') {
                this.close();
            }

            if (e.key === 'Tab' && this.firstFocusableEl) {
                const { activeElement } = document;
                const isFirstElement = activeElement === this.firstFocusableEl;
                const isLastElement = activeElement === this.lastFocusableEl;

                if (e.shiftKey && isFirstElement) {
                    // If focused on first item and user presses back-tab, go to the last focusable item
                    this.lastFocusableEl.focus();

                    e.preventDefault();
                } else if (!e.shiftKey && isLastElement) {
                    // If focused on the last item and user presses tab, go to the first focusable item
                    this.firstFocusableEl.focus();

                    e.preventDefault();
                }
            }
        },

        /**
         * Registers modal actions when the modal is opened.
         *
         * Emits an `open` event on completion.
         */
        open () {
            if (this.hasOpened) return;

            this.hasOpened = true;

            // use `nextTick` to give Vue enough time to update the DOM with the modal content
            this.$nextTick(() => {
                const focusableElsSelector = [
                    'a[href]:not([tabindex^="-"]):not([inert])',
                    'area[href]:not([tabindex^="-"]):not([inert])',
                    'input:not([disabled]):not([inert])',
                    'select:not([disabled]):not([inert])',
                    'textarea:not([disabled]):not([inert])',
                    'button:not([disabled]):not([inert])',
                    'iframe:not([tabindex^="-"]):not([inert])',
                    'audio:not([tabindex^="-"]):not([inert])',
                    'video:not([tabindex^="-"]):not([inert])',
                    '[contenteditable]:not([tabindex^="-"]):not([inert])',
                    '[tabindex]:not([tabindex^="-"]):not([inert])'
                ].join();

                const {
                    megaModal,
                    megaModalDocument
                } = this.$refs;

                // Filter any "hidden" elements
                const nodeList = megaModal.querySelectorAll(focusableElsSelector) || [];
                const focusableEls = Array.from(nodeList).filter(el => el.offsetHeight > 0);
                const {
                    0: firstFocusableEl,
                    [focusableEls.length - 1]: lastFocusableEl
                } = focusableEls;

                this.firstFocusableEl = firstFocusableEl;
                this.lastFocusableEl = lastFocusableEl;

                // The element from which the modal was triggered
                this.opener = document.activeElement;

                if (this.firstFocusableEl) {
                    this.firstFocusableEl.focus();
                }

                disableBodyScroll(megaModalDocument);

                megaModal.addEventListener('keydown', this.keyActions);
            });

            this.$emit('open');
        },

        /**
         * Closes the modal when the user clicks the overlay if configuration allows.
         */
        overlayClose () {
            if (this.closeOnBlur) {
                this.close();
            }
        },

        /**
         * Unregisters modal actions when the modal is closed.
         *
         * Emits an `close` event on completion.
         *
         * @param {Object} [options] - Close method options.
         * @param {Boolean} [options.emit=true] - Controls whether or not the `close` event be emitted.
         */
        close ({ emit = true } = {}) {
            if (!this.hasOpened) return;

            this.hasOpened = false;

            const {
                megaModal,
                megaModalDocument
            } = this.$refs;

            // Shift the focus back to the element that opened the modal
            if (this.opener) {
                this.opener.focus();
            }

            enableBodyScroll(megaModalDocument);

            megaModal.removeEventListener('keydown', this.keyActions);

            if (emit) {
                this.$emit('close');
            }
        }
    }
};
</script>

<style lang="scss" module>
@use '@justeat/fozzie/src/scss/fozzie' as f;

.c-megaModal {
    z-index: f.zIndex(high);
}

.c-megaModal-content {
    background-color: f.$color-container-default;
    border-radius: f.$radius-rounded-d;
    box-shadow: f.$elevation-04;
    display: none;
    padding: f.spacing(e);
    position: fixed;
    right: 50%;
    text-align: start;
    top: 50%;
    transform: translate(50%, -50%);
    width: 95%;

    .c-megaModal--modeRTL & {
        direction: rtl;
    }

    &.is-positioned-bottom {
        border-radius: 0;
        bottom: -100vh;
        box-shadow: f.$elevation-05;
        display: block;
        left: 0;
        top: auto;
        transform: none;
        width: 100%;
        max-width: inherit;

        &.c-megaModal-content--visible {
            bottom: 0;
        }
    }

    &.is-text-aligned-center {
        text-align: center;
    }

    @include f.media('>=narrow') {
        width: 85%;
    }

    @include f.media('<mid') {
        min-width: f.em(22);

        &.is-fullHeight {
            height: 100%;
        }
    }

    @include f.media('>=mid') {
        max-height: 90vh;
        max-width: 600px;
    }
}

.c-megaModal-content--visible {
    display: block;
}

.c-megaModal-content--narrow {
    @include f.media('>=narrowMid') {
        max-width: 450px;
    }
}

.c-megaModal-content--wide {
    max-width: 1080px;

    @include f.media('<huge') {
        max-width: 75%;
    }

    @include f.media('<mid') {
        width: 100%;
        max-width: 100%;
    }
}

.c-megaModal-content--flush {
    padding: 0;
}

.c-megaModal-content.c-megaModal-content--flush {
    .c-megaModal-closeBtn {
        top: f.spacing(d);
    }
}

.c-megaModal-document--scrollable {
    height: 100%;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;

    @include f.media('>=mid') {
        max-height: 550px;
    }

    @include f.media('height<=narrowMid', '>=mid') {
        max-height: 90vh;
    }
}

.c-megaModal {
    .c-megaModal-closeBtn {
        display: flex;
        opacity: 0.9;
        right: f.spacing(d);
        top: 22px;
        z-index: f.zIndex(high);

        svg path {
            fill: f.$color-interactive-primary;
            width: 17px;
            height: 17px;
        }

        &,
        &:focus,
        &:focus-visible {
            // Override default position from button
            position: absolute;

            @include f.media('>=mid') {
                position: fixed;
            }
        }
    }

    &.c-megaModal--modeRTL {
        .c-megaModal-closeBtn {
            right: f.spacing(d);
            left: auto;
            transform: scaleX(-1);
        }
    }

    &.c-megaModal--hasBackButton {
        .c-megaModal-closeBtn {
            left: f.spacing(d);
        }
    }

    .c-megaModal-closeBtn--fixed {
        position: fixed;
    }
}

.c-megaModal-title {
    margin: 0 f.spacing(f) 0 0;

    .is-text-aligned-center & {
        margin-left: f.spacing(e);
        margin-right: f.spacing(e);
    }

    .c-megaModal--hasBackButton & {
        margin: 0 0 0 f.spacing(f);
    }

    .c-megaModal--modeRTL & {
        margin: 0 f.spacing(f) 0 0;
    }

    // Allow the title to sit flush when there is no close button in RTL mode.
    .c-megaModal--modeRTL &:only-child {
        margin: 0;
    }
}
</style>

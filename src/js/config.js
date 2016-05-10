/* eslint spaced-comment: 0 */

////////////////
// SCROLLABLE //
////////////////

// DOM selectors
export const SCROLLABLE_SELECTOR = '[data-scrollable]'

// DATA API
export const SCROLLABLE_DATA_KEY = 'bl.scrollable'
export const SCROLLABLE_DATA = {
	scrollTimer: `scrollTimer.${ SCROLLABLE_DATA_KEY }`
}

// EVENTS
export const SCROLLABLE_EVENTS = {
	scroll: `scroll.${ SCROLLABLE_DATA_KEY }`,
	scrollEnd: `scrollEnd.${ SCROLLABLE_DATA_KEY }`,
	scrollTo: `scrollTo.${ SCROLLABLE_DATA_KEY }`
}
import { 
	SCROLLABLE_SELECTOR, 
	SCROLLABLE_DATA_KEY, 
	SCROLLABLE_DATA, 
	SCROLLABLE_EVENTS 
} from './config'

export class Scrollable {

	/**
	 * Scrollable constructor
	 * @return {Scrollable} A Scrollable instance
	 */
	constructor () {
		jQuery(SCROLLABLE_SELECTOR).each((index, el) => this.init(el))
	}

	/**
	 * Get a jQuery element
	 * @param  {String|jQuery} elementOrSelector 	jQuery element or DOM selector
	 * @return {jQuery}                   			A jQuery element
	 */
	_element (elementOrSelector) {
		return elementOrSelector instanceof jQuery ? elementOrSelector : jQuery(elementOrSelector)
	}

	/**
	 * Get a scrollable element
	 * @param  {String|jQuery} el 	jQuery element or DOM selector
	 * @return {jQuery}    			jQuery element
	 */
	_scrollableElement (el) {
		return this._element(el).simplebar('getScrollElement')
	}

	/**
	 * Initialize a scrollable element
	 * @param  {String|jQuery} el jQuery element or DOM selector
	 */
	init (el) {
		el = this._element(el)

		if (jQuery.fn.simplebar === undefined) {
			return
		}		
		
		if (!el.data(SCROLLABLE_DATA_KEY)) {
			
			// DATA
			el.data(SCROLLABLE_DATA_KEY, true)

			// CSS CLASSES
			el.addClass('simplebar')
			if (el.data('scrollable-direction') === 'horizontal') {
				el.addClass('simplebar-horizontal')
			}

			// INITIALIZE
			el.simplebar()

			// EVENTS
			el.simplebar().on('scroll', (e) => {
				el.trigger(SCROLLABLE_EVENTS.scroll, [this._scrollableElement(el)])

				clearTimeout(el.data(SCROLLABLE_DATA.scrollTimer))
				el.data(SCROLLABLE_DATA.scrollTimer, setTimeout(() => {
					el.trigger(SCROLLABLE_EVENTS.scrollEnd, [this._scrollableElement(el)])
				}, 100))
			})
			
			// LISTENERS
			el.on(SCROLLABLE_EVENTS.scrollTo, (id) => {
				const toElement = document.querySelector(id)
				if (toElement) {
					this._scrollableElement(el).animate({
						scrollTop: toElement.offsetTop
					})
				}
			})
		}
	}
}

// export instance
export let scrollable = new Scrollable()
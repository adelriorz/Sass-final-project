
let navbar_items = [
	{
		name: 'Home',
		icon: 'fas fa-home',
		link: ''
	},
	{
		name: 'About',
		icon: 'fas fa-address-card',
		link: 'about'
	},
	{
		name: 'FAQ',
		icon: 'fas fa-question-circle',
		link: 'faq'
	},
	{
		name: 'Contact',
		icon: 'fas fa-phone-alt',
		link: 'contact'
	}
]

let navbar_accounts = [
	{
		link: 'https://www.facebook.com/',
		icon: 'fab fa-facebook'
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'fab fa-instagram'
	},
	{
		link: 'https://twitter.com/',
		icon: 'fab fa-twitter'
	}
]

let faq_items = [
	{
		id_one: 'headingOne',
		data_bs_target: '#collapseOne',
		aria_controls: 'collapseOne',
		id_two: 'collapseOne',
		aria_labelledby: 'headingOne',
		title: 'ullam corporis suscipit',
		show: true
	},
	{
		id_one: 'headingTwo',
		data_bs_target: '#collapseTwo',
		aria_controls: 'collapseTwo',
		id_two: 'collapseTwo',
		aria_labelledby: 'headingTwo',
		title: 'Lorem ipsum dolor sit amet',
		show: false
	},
	{
		id_one: 'headingThree',
		data_bs_target: '#collapseThree',
		aria_controls: 'collapseThree',
		id_two: 'collapseThree',
		aria_labelledby: 'headingThree',
		title: 'sed quia consequuntur',
		show: false
	}
]

let contact = [
	{
		type: 'e-mail',
		info: 'support@mail.com',
		icon: 'fas fa-envelope'
	},
	{
		type: 'phone-number',
		info: '612-233-2323',
		icon: 'fas fa-phone-alt'
	},
	{
		type: 'address-location',
		info: '4055 Lister Court, Burnaby, Canada',
		icon: 'fas fa-map-marker-alt'
	}
]

export
{
	navbar_items,
	navbar_accounts,
	faq_items,
	contact
}
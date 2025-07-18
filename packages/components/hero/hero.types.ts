export interface HeroComponentProps {
	heading: string;
	subheading?: string;
	image?: string;
	imageAlt?: string;
	cta?: {
		label: string;
		link: string;
	};
	className?: string;
}

export interface HeroSchema {
	_type: 'hero';
	_key?: string;
	heading: string;
	subheading?: string;
	image?: {
		asset: {
			url: string;
		};
		alt: string;
	};
	cta?: {
		label: string;
		link: string;
	};
}

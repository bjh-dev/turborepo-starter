import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroComponent } from './hero.component.js';

import { describe, expect, it } from 'vitest';

describe('HeroComponent', () => {
	it('renders hero content', () => {
		const props = {
			heading: 'Hero Title',
			subheading: 'Hero subtitle',
			image: '/test-image.jpg',
			imageAlt: 'Test image',
			cta: {
				label: 'Get Started',
				link: '/signup',
			},
		};

		render(<HeroComponent {...props} />);

		expect(screen.getByText('Hero Title')).toBeInTheDocument();
		expect(screen.getByText('Hero subtitle')).toBeInTheDocument();
		expect(screen.getByText('Get Started')).toBeInTheDocument();
		expect(screen.getByRole('img')).toHaveAttribute('src', '/test-image.jpg');
		expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test image');
	});

	it('applies custom className', () => {
		const props = {
			heading: 'Hero Title',
			className: 'custom-class',
		};

		const { container } = render(<HeroComponent {...props} />);

		expect(container.firstChild).toHaveClass('custom-class');
	});
});

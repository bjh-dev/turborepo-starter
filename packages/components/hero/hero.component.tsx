import { cn } from '@repo/ui/lib/utils';
import { HeroComponentProps } from 'hero/hero.types.js';

export const  HeroComponent: React.FC<HeroComponentProps> = ({ heading, subheading, image, imageAlt, cta, className }) => {
	return (
		<section className={cn('py-16', className)}>
			<div className="container mx-auto px-4">
				<div className="text-center">
					<h1 className="text-6xl font-bold mb-6">{heading}</h1>
					{subheading && <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{subheading}</p>}
					{image && (
						<div className="mb-8">
							<img src={image} alt={imageAlt || heading} className="mx-auto rounded-lg shadow-lg" />
						</div>
					)}
					{cta && (
						<a
							href={cta.link}
							className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
						>
							{cta.label}
						</a>
					)}
				</div>
			</div>
		</section>
	);
};

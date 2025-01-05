import { useTranslations } from 'next-intl';
import { Spotify } from 'react-spotify-embed';

export default function PodcastSection() {
    const t = useTranslations('podcast');

    return (
        <section id="podcast" className="mt-10 py-8 px-3">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center text-3xl font-bold mb-4">{t('title')}</h1>
                <p className="sm:text-lg text-sm mb-16">{t('description')}</p>
                <Spotify wide link="https://open.spotify.com/show/5cxFOlOIWogdfhhAd3kyt6" />
            </div>
        </section>
    );
}
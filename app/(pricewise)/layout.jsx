import Navbar from '@/components/PriceWise/Navbar'

export const metadata = {
    title: 'Pricewise',
    description: 'Track product prices effortlessly and save money on your online shopping.',
    other: {
        'theme-color': '#FFFFFF',
        "color-scheme": "light only",
        "twitter:image": 'https://drive.google.com/file/d/1R0iXWq1h21tzdP3rCq1x3a4a4Y79GZWE/view?usp=sharing',
        "twitter:card": "summary_large_image",
        "og:url": "offshop.vercel.app",
        "og:image": 'https://drive.google.com/file/d/1R0iXWq1h21tzdP3rCq1x3a4a4Y79GZWE/view?usp=sharing',
        "og:type": "website",
    }
}

export default function RootLayout({ children }) {
    return (
        <main className="max-w-10xl mx-auto">
            <Navbar />
            {children}
        </main>
    )
}

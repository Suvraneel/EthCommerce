import { NextPage } from 'next';
import SplineObject from '../../components/SplineObject';

const Quickstart: NextPage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-start relative">
            <div className="w-full h-fit flex flex-col justify-start gap-10 items-center sticky top-5 z-20">
                <h1 className="w-full text-5xl font-semibold px-10">
                    Quickstart
                </h1>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center py-20 gap-10 snap-y snap-mandatory overflow-y-scroll scroll-hidden scroll-p-5 scroll-m-5 px-10">
                <div className="w-full h-fit flex flex-row justify-start bg-white rounded-md border-2 border-black px-10 py-8 relative snap-center snap-always">
                    <div className="flex flex-col justify-start gap-4 text-xl w-full sm:w-3/5">
                        <h1 className='text-4xl font-bold'>Create Your Own Fashion Empire with Our Customizable Merch Store!</h1>
                        <p>
                            At our customizable ecommerce store for your merch, we empower you to unleash your creativity and bring your fashion vision to life. Our platform offers a range of customizable options for you to choose from, so you can design merchandise that reflects your unique style and brand.
                        </p><p>
                            Whether you&apos;re an artist, musician, or entrepreneur, our merch store can help you build your brand and create a following that resonates with your audience.
                        </p><p>
                            Our platform also offers a range of features to help you sell your products, including built-in payment processing, shipping integrations, and analytics to help you track your sales and performance. And with our customizable storefront, you can create a branded shopping experience that&apos;s unique to your brand and appeals to your customers.
                        </p><p>
                            So why wait? Join the thousands of creators who have already built their fashion empires with our customizable merch store. Start designing your own line of clothing and accessories today and make your mark on the fashion industry.
                        </p>
                    </div>
                    <div className='flex w-2/5 h-full overflow-hidden flex-col justify-center item-center'>
                        <SplineObject scene={'https://prod.spline.design/jg4voINZKC3lb6pv/scene.splinecode'} className='' />
                    </div>
                </div>
                <div className="w-full h-fit flex flex-row justify-end bg-white rounded-md border-2 border-black px-10 py-8 relative snap-center snap-always">
                    <div className='flex w-2/5 h-full overflow-hidden flex-col justify-center item-center'>
                        <SplineObject scene={'https://prod.spline.design/q4ckei-dUrws-Koy/scene.splinecode'} className='' />
                    </div>
                    <div className="flex flex-col justify-start gap-4 text-xl w-full sm:w-3/5">
                        <h1 className='text-4xl font-bold'>Turn Your Virtual Self into Real Profit with Our Avatar and AR Character Marketplace!</h1>
                        <p>
                            Our Avatar and AR Character Marketplace offers you the opportunity to monetize your virtual self and create a new revenue stream. Whether you&apos;ve spent countless hours customizing your Metaverse avatar or designing a unique AR character, our platform empowers you to sell your creations to a wide audience of buyers.
                        </p><p>
                            We make it easy to list your avatar or AR character on our platform and connect with potential buyers who are looking for unique and personalized virtual identities. Our platform provides a secure and transparent marketplace for transactions, so you can sell your avatar or AR character with confidence.
                        </p><p>
                            In addition, we offer a range of features to help you manage your sales and transactions, including order management, payment processing, and dispute resolution. Our goal is to make it as easy as possible for you to monetize your virtual self and turn your passion for virtual customization into real profit.
                        </p>
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col justify-start items-start bg-white rounded-md border-2 border-black snap-center snap-always">
                    <div className="text-lg px-10 py-6">
                        <p className="text-lg">
                            In this guide, we&apos;ll walk you through the steps to get started in this exciting new economy where you can sell your courses, NFTs, services, audio, royalty, art, and more.
                        </p>
                        <ol>
                            <li>
                                <h3 className='font-bold'>
                                    Step 1: Acquire Tokens
                                </h3>
                                To participate in the Creator Economy, you&apos;ll first need to acquire tokens. Tokens can be purchased on exchanges or directly from the platform.
                            </li>
                            <li>
                                <h3 className='font-bold'>
                                    Step 2: Set up your Creator Profile
                                </h3>
                                Once you have your tokens, you can set up your Creator profile on the platform. This is where you&apos;ll be able to showcase your skills, interests, and projects. Make sure to include all relevant information about yourself to help others find you and your offerings.
                            </li>
                            <li>
                                <h3 className='font-bold'>
                                    Step 3: Create and Upload Your Offerings
                                </h3>
                                <p className="text-lg">
                                    The Creator Economy is all about sharing your talents and offerings with the world. You can sell anything from courses, NFTs, services, audio, royalty, art, and more. Once you&apos;ve created your offerings, simply upload them to the platform and set your price in tokens.
                                </p>
                            </li>
                            <li>
                                <h3 className='font-bold'>
                                    Step 4: Market and Promote Your Offerings
                                </h3>
                                <p className="text-lg">
                                    To attract buyers, you&apos;ll need to market and promote your offerings. Use the platform&apos;s marketing tools and social media to get the word out about your offerings. Engage with potential buyers and build relationships to create a loyal customer base.
                                </p>
                            </li>
                            <li>
                                <h3 className='font-bold'>
                                    Step 5: Get Rewarded
                                </h3>
                                <p className="text-lg">

                                    When someone purchases your offering, you&apos;ll be rewarded with tokens. These tokens can then be sold or used to participate in other offerings on the platform. Make sure to track your sales and adjust your pricing as necessary to maximize your earnings.
                                </p>
                                <p className="text-lg">
                                    And that&apos;s it! With these five simple steps, you&apos;re on your way to becoming a part of the Token Gated Creator Economy. So why wait? Start creating and sharing your offerings today and take your creativity to the next level!
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Quickstart;
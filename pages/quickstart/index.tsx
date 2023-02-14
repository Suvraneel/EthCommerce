import { NextPage } from 'next';

const Quickstart: NextPage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-start px-10 relative">
            <div className="w-full h-fit flex flex-col justify-start gap-10 items-center sticky top-6 z-20">
                <h1 className="w-full text-5xl">
                    Quickstart
                </h1>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-center mt-20">
                <div className="w-full h-fit flex flex-col justify-start items-start bg-white rounded-md border-2 border-black px-10 py-8">
                    <div className='flex'></div>
                </div>
                <div className="w-full h-fit flex flex-col justify-start items-start bg-white rounded-md border-2 border-black">
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
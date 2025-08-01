import React from 'react';

const keyInsights = [
  {
    imgURL: 'https://i.postimg.cc/3RMY40xX/brain.png',
    heading: 'Gen Z & Alpha Redefine Beauty Discovery',
    content: 'Discovery is led by peer recs, influencers, K-culture & AI search — not traditional ads.'
  },
  {
    imgURL: 'https://i.postimg.cc/bwpjdsbt/music-8217317.png',
    heading: 'Cultural Influence Converts to Sales',
    content: 'K-pop, K-dramas & K-fashion drive beauty adoption beyond metros into Tier-2 India.'
  },
  {
    imgURL: 'https://i.postimg.cc/vmFN5r5Z/mobile-shopping-1.png',
    heading: 'Omnichannel is Vital, But Digital Wins First',
    content: 'Trial and discovery start online — from Q-commerce to D2C and repeat buying.'
  },
  {
    imgURL: 'https://i.postimg.cc/tJCfY9Wd/star.png',
    heading: 'Influencers & Reviews Seal the Deal',
    content: '51% trust K-idol endorsements; 86% say reviews drive final purchase.'
  }
];

export default function KeyInsights() {
  return (
    <div className="px-8 lg:pl-15 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">KEY INSIGHTS</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-rows-4 gap-10">
        {keyInsights.map((insight) => (
          <div
            key={insight.heading}
            className="flex items-start gap-4  "
          >
            <img
              src={insight.imgURL}
              alt={insight.heading}
              className="h-12 w-12 object-contain mt-1 shrink-0"
            />
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-1">{insight.heading}</h3>
              <p className="text-base text-gray-700">{insight.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

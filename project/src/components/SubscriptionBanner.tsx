import React from 'react';
import { Music, Sparkles } from 'lucide-react';

export const SubscriptionBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 rounded-lg p-6 mb-12 mx-4 sm:mx-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Music className="h-8 w-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center space-x-2 flex-wrap">
              <span>Thank you for subscribing to Rhythmic Music!</span>
              <Sparkles className="h-5 w-5 text-yellow-300" />
            </h3>
            <p className="text-white/90">Enjoy unlimited vibes and premium features</p>
          </div>
        </div>
        <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors shadow-lg flex items-center space-x-2">
          <span>✓ Subscribed</span>
        </button>
      </div>
    </div>
  );
};
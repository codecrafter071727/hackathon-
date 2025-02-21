"use client";

import { useState } from 'react';
import { ArrowRight, User, Phone, Calendar, Heart, Sparkles, Star, Moon, Waves, CloudRain, Snowflake } from 'lucide-react';

export default function CompleteProfile() {
  const [interests, setInterests] = useState<string[]>([]);
  const [floatingElements] = useState(
    Array(15).fill(null).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      scale: 0.5 + Math.random() * 1,
      rotate: Math.random() * 360,
      duration: 15 + Math.random() * 10
    }))
  );

  const commonInterests = [
    "Meditation", "Yoga", "Reading", "Exercise",
    "Music", "Art", "Nature", "Travel",
    "Cooking", "Photography", "Writing", "Sports"
  ];

  const toggleInterest = (interest: string) => {
    setInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-violet-50 relative overflow-hidden py-12">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map((pos, i) => (
          <div
            key={i}
            className="absolute animate-floating"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${pos.duration}s`,
              transform: `rotate(${pos.rotate}deg) scale(${pos.scale})`,
              opacity: 0.1
            }}
          >
            {i % 5 === 0 ? (
              <Star className="h-16 w-16 text-violet-400 animate-twinkle" />
            ) : i % 5 === 1 ? (
              <Moon className="h-12 w-12 text-rose-300 animate-pulse" />
            ) : i % 5 === 2 ? (
              <Sparkles className="h-10 w-10 text-pink-300 animate-sparkle" />
            ) : i % 5 === 3 ? (
              <Snowflake className="h-14 w-14 text-violet-300 animate-spin" />
            ) : (
              <CloudRain className="h-12 w-12 text-rose-400 animate-bounce" />
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floating {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(25px, -25px) rotate(5deg) scale(1.1); }
          50% { transform: translate(-20px, 30px) rotate(-5deg) scale(0.9); }
          75% { transform: translate(-25px, -20px) rotate(3deg) scale(1.05); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); filter: blur(0px); }
          50% { opacity: 0.7; transform: scale(1.3) rotate(180deg); filter: blur(1px); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.1; transform: scale(1) rotate(0deg); filter: blur(0px); }
          50% { opacity: 0.6; transform: scale(1.4) rotate(180deg); filter: blur(2px); }
        }
      `}</style>

      <div className="max-w-3xl mx-auto px-4 relative">
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-[0_8px_32px_-8px_rgba(219,39,119,0.3)] border border-rose-200/50 hover:shadow-[0_20px_60px_-12px_rgba(219,39,119,0.4)] transition-all duration-700">
          {/* Header with enhanced gradient */}
          <div className="text-center mb-8 relative">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-500 via-pink-500 to-violet-500 text-transparent bg-clip-text mb-3 animate-gradient">
              Complete Your Profile
            </h1>
            <p className="text-slate-600 text-lg">Tell us more about yourself to personalize your experience</p>
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-gradient-to-r from-rose-200/20 via-pink-200/20 to-violet-200/20 rounded-xl blur-xl -z-10"></div>
          </div>

          {/* Profile Form with enhanced styling */}
          <form className="space-y-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-400 transition-all duration-300 group-hover:scale-110 group-hover:text-rose-500" />
                  <input
                    type="text"
                    className="w-full bg-white/50 border border-rose-200/50 rounded-xl py-3.5 px-4 pl-10 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-rose-400/0 via-pink-400/0 to-violet-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Age</label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-400 transition-all duration-300 group-hover:scale-110 group-hover:text-rose-500" />
                    <input
                      type="number"
                      className="w-full bg-white/50 border border-rose-200/50 rounded-xl py-3.5 px-4 pl-10 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                      placeholder="Your age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-600 mb-2">Gender</label>
                  <select className="w-full bg-white/50 border border-rose-200/50 rounded-xl py-3.5 px-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Phone Number</label>
                <div className="relative group">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-rose-400 transition-all duration-300 group-hover:scale-110 group-hover:text-rose-500" />
                  <input
                    type="tel"
                    className="w-full bg-white/50 border border-rose-200/50 rounded-xl py-3.5 px-4 pl-10 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-400/50 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            </div>

            {/* Enhanced Interests Section */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-4">
                What interests you? (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {commonInterests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`p-3.5 rounded-xl text-sm font-medium transition-all duration-500 flex items-center justify-center gap-2 group relative overflow-hidden
                      ${interests.includes(interest)
                        ? 'bg-gradient-to-r from-rose-500/10 via-pink-500/10 to-violet-500/10 border-violet-300/50 text-violet-700'
                        : 'bg-white/40 border-rose-200/30 text-slate-600 hover:bg-white/60'
                      } border shadow-sm hover:shadow-md`}
                  >
                    <Heart 
                      className={`h-4 w-4 transition-all duration-500 group-hover:scale-125 
                        ${interests.includes(interest) ? 'text-rose-500 scale-110' : 'text-rose-300'}`} 
                    />
                    {interest}
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-400/0 via-pink-400/5 to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Enhanced Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 hover:from-rose-500 hover:via-pink-500 hover:to-violet-500 text-white rounded-xl py-4 font-semibold shadow-lg hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-500 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Complete Profile
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/0 via-white/10 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
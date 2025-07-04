
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Clock, Shield, Star } from 'lucide-react';

const HornOfDawn = () => {
  const [battleCry, setBattleCry] = useState('');
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const dailyScripture = {
    verse: "Joshua 1:9",
    text: "Have I not commanded you? Be strong and courageous! Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go."
  };

  const battleCryPrompts = [
    "I am called to build, not just consume.",
    "My family depends on my faithfulness, not my feelings.",
    "God gave me this vision - I will not waste it.",
    "Today I choose discipline over distraction.",
    "I am a warrior in the kingdom, not a passenger in life."
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleComplete = () => {
    if (battleCry.trim()) {
      setTodayCompleted(true);
      console.log('Horn of Dawn completed:', battleCry);
    }
  };

  return (
    <div className="space-y-6">
      {/* Current Time & Status */}
      <Card className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border-amber-500/30">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <div>
                <div className="text-3xl font-black text-foreground">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-amber-400 font-semibold">
                  {currentTime.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                </div>
              </div>
            </div>
            
            {todayCompleted ? (
              <Badge className="bg-green-600 text-white px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                HORN SOUNDED
              </Badge>
            ) : (
              <Badge variant="outline" className="border-amber-500 text-amber-400 px-4 py-2">
                AWAITING BATTLE CRY
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Daily Scripture */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-400">
              <Shield className="w-6 h-6 mr-2" />
              TODAY'S SHIELD VERSE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="text-sm font-bold text-amber-500 uppercase tracking-wide">
                {dailyScripture.verse}
              </div>
              <div className="scripture-text text-lg leading-relaxed">
                "{dailyScripture.text}"
              </div>
              <div className="text-xs text-muted-foreground italic">
                Meditate on this truth. Let it anchor your day.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Battle Cry */}
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-amber-400">YOUR BATTLE CRY</CardTitle>
            <p className="text-muted-foreground text-sm">
              Declare your intention for today. Speak it with conviction.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={battleCry}
              onChange={(e) => setBattleCry(e.target.value)}
              placeholder="Today I will..."
              className="min-h-[120px] bg-background border-border text-foreground resize-none"
              disabled={todayCompleted}
            />
            
            {!todayCompleted && (
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">Need inspiration? Try one of these:</div>
                <div className="space-y-2">
                  {battleCryPrompts.slice(0, 3).map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => setBattleCry(prompt)}
                      className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted text-sm transition-colors"
                    >
                      "{prompt}"
                    </button>
                  ))}
                </div>
              </div>
            )}

            <Button 
              onClick={handleComplete}
              disabled={!battleCry.trim() || todayCompleted}
              className="w-full battle-ready"
            >
              {todayCompleted ? 'BATTLE CRY DECLARED' : 'SOUND THE HORN'}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Morning Ritual Guide */}
      <Card className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 border-stone-600/30">
        <CardHeader>
          <CardTitle className="text-stone-300">THE WARRIOR'S DAWN RITUAL</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="space-y-2">
              <div className="font-bold text-amber-400">1. WAKE WITH PURPOSE</div>
              <div className="text-stone-300">
                No snooze. Feet on floor. Thank God for another day to build His kingdom.
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-amber-400">2. FORTIFY WITH TRUTH</div>
              <div className="text-stone-300">
                Read today's shield verse. Let God's word set the foundation for everything else.
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-amber-400">3. DECLARE WAR</div>
              <div className="text-stone-300">
                Write your battle cry. Speak it aloud. This is your covenant with the day.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HornOfDawn;

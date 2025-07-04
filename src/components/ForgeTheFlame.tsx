
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Star, Flag, Clock, Heart, Shield } from 'lucide-react';

const ForgeTheFlame = () => {
  const [selectedMission, setSelectedMission] = useState(null);
  const [missionComplete, setMissionComplete] = useState(false);
  const [completionNotes, setCompletionNotes] = useState('');

  const dailyMissions = [
    {
      id: 1,
      category: 'BUILD',
      icon: Star,
      title: 'Execute one revenue-generating task',
      description: 'Make one phone call, send one proposal, or create one piece of content that could directly lead to income.',
      difficulty: 'MEDIUM',
      impact: 'HIGH',
      timeEstimate: '30-60 min'
    },
    {
      id: 2,
      category: 'LEAD',
      icon: Shield,
      title: 'Have a meaningful conversation with your wife',
      description: 'Ask her one deep question about her dreams, fears, or needs. Listen without trying to fix.',
      difficulty: 'EASY',
      impact: 'HIGH',
      timeEstimate: '15-30 min'
    },
    {
      id: 3,
      category: 'GROW',
      icon: Flag,
      title: 'Read 10 pages of a leadership book',
      description: 'Invest in your mind. Choose something that challenges your thinking about business, faith, or character.',
      difficulty: 'EASY',
      impact: 'MEDIUM',
      timeEstimate: '20-30 min'
    },
    {
      id: 4,
      category: 'SERVE',
      icon: Heart,
      title: 'Encourage another man in his calling',
      description: 'Send a text, make a call, or have a conversation that builds up a brother in his mission.',
      difficulty: 'EASY',
      impact: 'HIGH',
      timeEstimate: '10-20 min'
    },
    {
      id: 5,
      category: 'FIGHT',
      icon: Clock,
      title: 'Eliminate one time-waster for the day',
      description: 'Identify your biggest distraction today and consciously avoid it. Replace with productive action.',
      difficulty: 'HARD',
      impact: 'MEDIUM',
      timeEstimate: 'All day'
    }
  ];

  const handleMissionSelect = (mission) => {
    setSelectedMission(mission);
    setMissionComplete(false);
    setCompletionNotes('');
  };

  const handleMissionComplete = () => {
    setMissionComplete(true);
    console.log(`Mission completed: ${selectedMission.title}`, completionNotes);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'EASY': return 'text-green-400 border-green-400';
      case 'MEDIUM': return 'text-amber-400 border-amber-400';
      case 'HARD': return 'text-red-400 border-red-400';
      default: return 'text-muted-foreground border-muted-foreground';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'BUILD': return 'bg-amber-600';
      case 'LEAD': return 'bg-blue-600';
      case 'GROW': return 'bg-green-600';
      case 'SERVE': return 'bg-purple-600';
      case 'FIGHT': return 'bg-red-600';
      default: return 'bg-stone-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Mission Selection Header */}
      <Card className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border-amber-500/30">
        <CardHeader>
          <CardTitle className="text-amber-400">CHOOSE YOUR DAILY MISSION</CardTitle>
          <p className="text-muted-foreground">
            One meaningful action. One step forward. Every day counts in the kingdom.
          </p>
        </CardHeader>
        <CardContent>
          {selectedMission ? (
            <div className="text-center space-y-4">
              <div className="text-2xl font-black text-foreground">
                TODAY'S MISSION: {selectedMission.category}
              </div>
              <Badge className={`${getCategoryColor(selectedMission.category)} text-white px-4 py-2`}>
                {selectedMission.title}
              </Badge>
              {missionComplete && (
                <div className="text-green-400 font-bold text-lg">
                  🔥 MISSION ACCOMPLISHED! 🔥
                </div>
              )}
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              Select a mission below to begin your daily conquest.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Mission Cards */}
      <div className="grid gap-4">
        {dailyMissions.map((mission) => {
          const IconComponent = mission.icon;
          const isSelected = selectedMission?.id === mission.id;
          
          return (
            <Card 
              key={mission.id}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'bg-gradient-to-r from-amber-500/20 to-orange-600/20 border-amber-500 warrior-glow' 
                  : 'bg-card/50 border-border hover:border-amber-500/50'
              }`}
              onClick={() => handleMissionSelect(mission)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getCategoryColor(mission.category)}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Badge variant="outline" className="mb-2 text-xs">
                          {mission.category}
                        </Badge>
                        <h3 className="font-bold text-foreground text-lg">{mission.title}</h3>
                      </div>
                      
                      <div className="text-right space-y-1">
                        <Badge variant="outline" className={`text-xs ${getDifficultyColor(mission.difficulty)}`}>
                          {mission.difficulty}
                        </Badge>
                        <div className="text-xs text-muted-foreground">
                          {mission.timeEstimate}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {mission.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        Impact: {mission.impact}
                      </Badge>
                      
                      {isSelected && (
                        <Badge className="bg-amber-500 text-black">
                          SELECTED
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Mission Completion */}
      {selectedMission && !missionComplete && (
        <Card className="bg-card/50 border-border">
          <CardHeader>
            <CardTitle className="text-amber-400">COMPLETE YOUR MISSION</CardTitle>
            <p className="text-muted-foreground text-sm">
              Document your victory. What did you accomplish? What did you learn?
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={completionNotes}
              onChange={(e) => setCompletionNotes(e.target.value)}
              placeholder="Describe what you did, any obstacles you overcame, and how it felt to push through..."
              className="min-h-[120px] bg-background border-border"
            />
            
            <Button 
              onClick={handleMissionComplete}
              disabled={!completionNotes.trim()}
              className="w-full battle-ready"
            >
              DECLARE VICTORY
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Mission Complete Celebration */}
      {missionComplete && (
        <Card className="bg-gradient-to-r from-green-600/20 to-green-500/20 border-green-500/50">
          <CardContent className="p-6 text-center space-y-4">
            <div className="text-4xl">🏆</div>
            <div className="text-xl font-black text-green-400">
              MISSION ACCOMPLISHED!
            </div>
            <div className="text-muted-foreground">
              Another day, another victory. You're building momentum that compounds.
            </div>
            <div className="text-sm italic text-green-300">
              "Faithful in little, ruler over much." - Matthew 25:21
            </div>
          </CardContent>
        </Card>
      )}

      {/* Daily Mission Philosophy */}
      <Card className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 border-stone-600/30">
        <CardHeader>
          <CardTitle className="text-stone-300">THE FORGE PHILOSOPHY</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-stone-300">
            <p className="leading-relaxed">
              The flame of purpose dies without daily fuel. Every mission you complete is kindling for the fire 
              God placed in you. Choose one. Complete it fully. Feel the satisfaction of forward motion.
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div>
                <div className="font-bold text-amber-400 mb-2">Why One Mission?</div>
                <div className="text-xs leading-relaxed">
                  Overwhelm kills progress. One meaningful action, done with excellence, 
                  builds more momentum than ten half-hearted attempts.
                </div>
              </div>
              <div>
                <div className="font-bold text-amber-400 mb-2">Why Document Victory?</div>
                <div className="text-xs leading-relaxed">
                  Your brain forgets wins and remembers failures. Force yourself to acknowledge 
                  progress. It rewires you for more success.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgeTheFlame;

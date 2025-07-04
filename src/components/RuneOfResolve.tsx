
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, Heart, Star, Flag, Shield } from 'lucide-react';

const RuneOfResolve = () => {
  const [habits, setHabits] = useState([
    {
      id: 'wake',
      name: 'Wake Before Dawn',
      icon: Clock,
      target: '5:30 AM',
      completed: true,
      streak: 7,
      description: 'Rise while the world sleeps'
    },
    {
      id: 'word',
      name: 'Word Time',
      icon: Shield,
      target: '15 min',
      completed: true,
      streak: 5,
      description: 'Daily scripture meditation'
    },
    {
      id: 'wife',
      name: 'Wife Investment',
      icon: Heart,
      target: 'Meaningful touch/words',
      completed: false,
      streak: 3,
      description: 'Love her like Christ loves the church'
    },
    {
      id: 'work',
      name: 'High-Value Work',
      icon: Star,
      target: '2 hour block',
      completed: false,
      streak: 4,
      description: 'Build something that matters'
    },
    {
      id: 'win',
      name: 'Victory Documentation',
      icon: Flag,
      target: 'Evening reflection',
      completed: false,
      streak: 6,
      description: 'Record the day\'s victories'
    }
  ]);

  const toggleHabit = (habitId: string) => {
    setHabits(habits.map(habit => 
      habit.id === habitId 
        ? { ...habit, completed: !habit.completed }
        : habit
    ));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const completionPercentage = (completedCount / habits.length) * 100;

  return (
    <div className="space-y-6">
      {/* Daily Progress Overview */}
      <Card className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border-amber-500/30">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-amber-400">TODAY'S BATTLE PROGRESS</span>
            <Badge className="bg-amber-500 text-black px-4 py-2">
              {completedCount}/{habits.length} Complete
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Runes Activated</span>
              <span className="text-foreground font-bold">{Math.round(completionPercentage)}%</span>
            </div>
            <Progress value={completionPercentage} className="h-3" />
            <div className="text-center">
              <div className="text-2xl font-black text-foreground mb-2">
                {completionPercentage === 100 ? '🔥 WARRIOR STATUS ACHIEVED!' : 'KEEP FIGHTING, BROTHER'}
              </div>
              <div className="text-sm text-muted-foreground">
                {completionPercentage === 100 
                  ? 'All runes activated. You\'re operating at full power.' 
                  : `${habits.length - completedCount} more victories needed for full warrior status.`
                }
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Habit Tracking Grid */}
      <div className="grid gap-4">
        {habits.map((habit) => {
          const IconComponent = habit.icon;
          return (
            <Card 
              key={habit.id}
              className={`transition-all duration-200 cursor-pointer ${
                habit.completed 
                  ? 'bg-gradient-to-r from-green-600/20 to-green-500/20 border-green-500/50 warrior-glow' 
                  : 'bg-card/50 border-border hover:border-amber-500/50'
              }`}
              onClick={() => toggleHabit(habit.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      habit.completed 
                        ? 'bg-green-600' 
                        : 'bg-gradient-to-br from-amber-500 to-orange-600'
                    }`}>
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">{habit.name}</div>
                      <div className="text-muted-foreground text-sm">{habit.description}</div>
                      <div className="text-amber-400 text-sm font-semibold">Target: {habit.target}</div>
                    </div>
                  </div>
                  
                  <div className="text-right space-y-2">
                    <div className="flex items-center space-x-2">
                      <Badge variant={habit.completed ? "default" : "outline"} className={
                        habit.completed 
                          ? "bg-green-600 text-white" 
                          : "border-amber-500 text-amber-400"
                      }>
                        {habit.completed ? 'COMPLETE' : 'PENDING'}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      🔥 {habit.streak} day streak
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Streak Motivation */}
      <Card className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 border-stone-600/30">
        <CardHeader>
          <CardTitle className="text-stone-300">STREAK WARRIOR STATUS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black text-amber-500 mb-2">7</div>
              <div className="text-sm text-stone-300">Current Streak</div>
              <div className="text-xs text-muted-foreground">Consistency builds character</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-orange-500 mb-2">21</div>
              <div className="text-sm text-stone-300">Next Milestone</div>
              <div className="text-xs text-muted-foreground">Unlock Chieftain badge</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-red-500 mb-2">100</div>
              <div className="text-sm text-stone-300">Legend Status</div>
              <div className="text-xs text-muted-foreground">Elite warrior recognition</div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <div className="text-sm text-stone-300 italic">
              "The difference between ordinary and extraordinary is that little 'extra'." - Every day matters, warrior.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RuneOfResolve;

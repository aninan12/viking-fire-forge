
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Flag, Star, Clock, Shield } from 'lucide-react';

const WarTable = () => {
  const [currentSprint, setCurrentSprint] = useState({
    name: 'Launch YouTube Channel',
    startDate: '2024-07-01',
    endDate: '2024-07-07',
    progress: 65,
    tasks: [
      { id: 1, name: 'Record intro video', completed: true },
      { id: 2, name: 'Design channel art', completed: true },
      { id: 3, name: 'Write 5 video scripts', completed: true },
      { id: 4, name: 'Set up editing workflow', completed: false },
      { id: 5, name: 'Schedule first 3 videos', completed: false },
    ]
  });

  const [newSprintName, setNewSprintName] = useState('');
  const [newSprintGoal, setNewSprintGoal] = useState('');

  const completedTasks = currentSprint.tasks.filter(task => task.completed).length;
  const totalTasks = currentSprint.tasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const toggleTask = (taskId: number) => {
    setCurrentSprint({
      ...currentSprint,
      tasks: currentSprint.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    });
  };

  return (
    <div className="space-y-6">
      {/* Current Sprint Overview */}
      <Card className="bg-gradient-to-r from-amber-500/10 to-orange-600/10 border-amber-500/30">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="text-amber-400">CURRENT 7-DAY SPRINT</span>
            <Badge className="bg-amber-500 text-black px-4 py-2">
              Day 5 of 7
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-black text-foreground mb-2">{currentSprint.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>Started: {new Date(currentSprint.startDate).toLocaleDateString()}</span>
                <span>•</span>
                <span>Ends: {new Date(currentSprint.endDate).toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sprint Progress</span>
                <span className="text-foreground font-bold">{completedTasks}/{totalTasks} Tasks Complete</span>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </div>
            
            <div className="text-center py-4">
              <div className="text-lg font-bold text-foreground mb-1">
                {progressPercentage >= 80 ? '🔥 VICTORY WITHIN REACH!' : '⚔️ BATTLE IN PROGRESS'}
              </div>
              <div className="text-sm text-muted-foreground">
                {progressPercentage >= 80 
                  ? 'You\'re dominating this sprint. Finish strong!' 
                  : 'Every completed task is a victory. Keep pushing forward.'
                }
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sprint Tasks */}
      <Card className="bg-card/50 border-border">
        <CardHeader>
          <CardTitle className="flex items-center text-amber-400">
            <Flag className="w-6 h-6 mr-2" />
            BATTLE OBJECTIVES
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {currentSprint.tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer transition-all ${
                  task.completed 
                    ? 'bg-green-600/20 border border-green-500/50' 
                    : 'bg-muted/30 hover:bg-muted/50 border border-transparent'
                }`}
                onClick={() => toggleTask(task.id)}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  task.completed ? 'bg-green-600' : 'border-2 border-muted-foreground'
                }`}>
                  {task.completed && <span className="text-white text-sm">✓</span>}
                </div>
                <div className={`flex-1 ${task.completed ? 'text-green-400' : 'text-foreground'}`}>
                  <span className={task.completed ? 'line-through' : ''}>{task.name}</span>
                </div>
                <Badge variant={task.completed ? "default" : "outline"} className={
                  task.completed 
                    ? "bg-green-600 text-white" 
                    : "border-amber-500 text-amber-400"
                }>
                  {task.completed ? 'WON' : 'ACTIVE'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Start New Sprint */}
      <Card className="bg-gradient-to-r from-stone-800/50 to-stone-700/50 border-stone-600/30">
        <CardHeader>
          <CardTitle className="flex items-center text-stone-300">
            <Star className="w-6 h-6 mr-2" />
            PLAN YOUR NEXT CONQUEST
          </CardTitle>
          <p className="text-stone-400 text-sm">
            7 days. One focused goal. Maximum execution.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-stone-300 mb-2">
              Sprint Name
            </label>
            <Input
              value={newSprintName}
              onChange={(e) => setNewSprintName(e.target.value)}
              placeholder="e.g., Launch my coaching program"
              className="bg-background border-border"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-stone-300 mb-2">
              Victory Condition (What success looks like)
            </label>
            <Textarea
              value={newSprintGoal}
              onChange={(e) => setNewSprintGoal(e.target.value)}
              placeholder="e.g., 100 email subscribers, first paying client, product prototype complete..."
              className="bg-background border-border h-24"
            />
          </div>
          
          <div className="flex space-x-4">
            <Button className="battle-ready flex-1">
              START NEW SPRINT
            </Button>
            <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800">
              <Shield className="w-4 h-4 mr-2" />
              UPGRADE FOR TEMPLATES
            </Button>
          </div>
          
          <div className="text-xs text-stone-400 italic text-center pt-2">
            Pro tip: The best sprints have one clear, measurable outcome. Think "launch" not "work on."
          </div>
        </CardContent>
      </Card>

      {/* Sprint Philosophy */}
      <Card className="bg-card/30 border-border">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-bold text-amber-400">THE WAR TABLE PHILOSOPHY</h3>
            <div className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Most men fail because they think in years, not weeks. The War Table forces you to think in sprints: 
              7 days of focused, aggressive execution on ONE meaningful objective. No distractions. No excuses. 
              Just you vs. your calling, with a clear deadline that demands action.
            </div>
            <div className="text-xs text-amber-400 italic">
              "Plans are worthless, but planning is everything." - Execute with urgency, adjust with wisdom.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WarTable;

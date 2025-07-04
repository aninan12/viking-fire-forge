
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Star, Flag, Clock, Users, Book } from 'lucide-react';
import HornOfDawn from '@/components/HornOfDawn';
import RuneOfResolve from '@/components/RuneOfResolve';
import WarTable from '@/components/WarTable';
import ForgeTheFlame from '@/components/ForgeTheFlame';

const Index = () => {
  const [currentStreak, setCurrentStreak] = useState(7);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [userName] = useState('Warrior'); // In real app, this would come from auth

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-background to-card">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.1"%3E%3Cpath d="M30 30l15-15v30l-15-15zM15 0v30l15-15V0H15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <div>
                <h1 className="text-3xl font-black text-foreground">VIKING MODE™</h1>
                <p className="text-amber-400 font-semibold">Warrior • Builder • Faithful</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-amber-500 text-amber-400 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                {currentStreak} Day Streak
              </Badge>
              <Button className="battle-ready">
                UPGRADE TO PRO
              </Button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Rise, {userName}. The battle begins at dawn.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              "As iron sharpens iron, so one person sharpens another." - Proverbs 27:17
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Flag className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">7</div>
                <div className="text-sm text-muted-foreground">Streak Days</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Clock className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">5:30 AM</div>
                <div className="text-sm text-muted-foreground">Avg Wake</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Star className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Missions Won</div>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-2xl font-black text-foreground">LOCKED</div>
                <div className="text-sm text-muted-foreground">Shield Wall</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main App Modules */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <Tabs defaultValue="horn" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50">
            <TabsTrigger value="horn" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              HORN OF DAWN
            </TabsTrigger>
            <TabsTrigger value="rune" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              RUNE OF RESOLVE
            </TabsTrigger>
            <TabsTrigger value="war" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              WAR TABLE
            </TabsTrigger>
            <TabsTrigger value="forge" className="data-[state=active]:bg-amber-500 data-[state=active]:text-black font-bold">
              FORGE THE FLAME
            </TabsTrigger>
          </TabsList>

          <TabsContent value="horn">
            <HornOfDawn />
          </TabsContent>

          <TabsContent value="rune">
            <RuneOfResolve />
          </TabsContent>

          <TabsContent value="war">
            <WarTable />
          </TabsContent>

          <TabsContent value="forge">
            <ForgeTheFlame />
          </TabsContent>
        </Tabs>

        {/* Upgrade Prompts */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border-amber-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-400">
                <Shield className="w-6 h-6 mr-2" />
                Shield Wall - Brotherhood ($9/mo)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Join the brotherhood. Share victories, get accountability, and battle alongside other warriors.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Brotherhood feed & challenges</li>
                <li>• Advanced habit gamification</li>
                <li>• Weekly warrior check-ins</li>
                <li>• Extended War Table features</li>
              </ul>
              <Button className="w-full battle-ready">
                JOIN THE SHIELD WALL
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600/10 to-red-600/10 border-orange-500/30">
            <CardHeader>
              <CardTitle className="flex items-center text-orange-400">
                <Book className="w-6 h-6 mr-2" />
                Chieftain Access ($99/year)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Elite warrior templates, fasting guides, and the complete Seer's Scrolls collection.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Exclusive Seer's Scrolls templates</li>  
                <li>• 21-day warrior onboarding</li>
                <li>• Fasting & vision reset guides</li>
                <li>• Premium battle cry library</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-black py-4 hover:from-orange-600 hover:to-red-700">
                BECOME A CHIEFTAIN
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
